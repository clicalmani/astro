<?php
namespace App\Providers;

use App\Models\AuthAccess;
use Clicalmani\Foundation\Auth\Authenticate;
use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Support\Facades\DB;

/**
 * Class AuthServiceProvider
 *
 * Manages user authentication state, token generation, online verification,
 * and session lifecycle procedures for the application.
 *
 * @package App\Providers
 * @author Clicalmani
 */
class AuthServiceProvider extends Authenticate
{
    /**
     * The fully qualified class name of the user model.
     * 
     * @var string
     */
    protected string $userModel = \App\Models\User::class;

    /**
     * Retrieve the currently connected user ID from the request session.
     *
     * @param RequestInterface|null $request Incoming HTTP request instance.
     * @return int|null Connected user ID or null if unauthenticated.
     */
    public function getConnectedUserID(?RequestInterface $request): mixed
    {
        if ($user_id = $request->session('user:id')->get()) {
            return (int) $user_id;
        }
        
        return null;
    }

    /**
     * Authenticate user or renew active user authentication tokens.
     * 
     * @return void
     */
    public function authenticate(): void
    {
        if ($this->user_id) {
            DB::table('auth_access')
                ->insert([
                    ['user_id' => $this->user_id, 'token' => token($this->user_id)]
                ], true)
                ->where('user_id = :user', ['user' => (int) $this->user_id])
                ->exec();
        }
    }

    /**
     * Determine whether the active user has a valid stored authentication record.
     * 
     * @return bool
     */
    public function isAuthenticated(): bool
    {
        return !!DB::table('auth_access')
            ->where('user_id = :user_id', ['user_id' => $this->user_id])
            ->get('token')
            ->first();
    }

    /**
     * Determine whether the user is actively online by verifying the stored access token.
     * 
     * @return bool
     */
    public function isOnline(): bool
    {
        $auth = DB::table('auth_access')
            ->where('user_id = :user_id', 'AND', ['user_id' => $this->user_id])
            ->get('token')
            ->first();

        if ($auth && verify_token((string) $auth->token)) {
            return true;
        }

        return false;
    }

    /**
     * Destroy the current authentication session and purge user access records.
     * 
     * @return void
     */
    public function destroy(): void
    {
        if ($this->user_id) {
            AuthAccess::destroy($this->user_id);
        }
    }
}