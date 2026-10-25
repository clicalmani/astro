<?php
namespace App\Providers;

use Clicalmani\Core\Providers\SessionStorageServiceProvider as SessionProvider;

/**
 * Class SessionServiceProvider
 *
 * Configures and bootstraps session storage handlers, lifetime configurations, 
 * and expiration behaviors for the application.
 *
 * @package App\Providers
 * @author Clicalmani
 */
class SessionServiceProvider extends SessionProvider
{
    /**
     * The session storage driver handler class.
     * 
     * @var string
     */
    protected static string $driver = \Clicalmani\Core\Http\Session\DBSessionHandler::class;

    /**
     * The number of seconds a session is allowed to remain idle before expiring.
     * 
     * @var int
     */
    protected static int $lifetime = 3000;

    /**
     * The absolute maximum duration in seconds that a session can remain active while idle.
     * 
     * @var int
     */
    protected static int $max_lifetime = 9000;

    /**
     * Determines whether the session cookie should expire immediately when the user's browser closes.
     * 
     * @var bool
     */
    protected static bool $expire_on_close = false;

    /**
     * Map block defining browser tracking cookie policies and boundary visibility controls.
     * 
     * @var array
     */
    protected static array $cookie = [
        'name'      => '__SESSION_COOKIE__',
        'path'      => '/',
        'domain'    => '',
        'secure'    => false,
        'http_only' => true,
        'samesite'  => true
    ];
    
    /**
     * Bootstrap session storage services and underlying framework provider logic.
     * 
     * @return void
     */
    public function boot(
        ?\Clicalmani\Core\Acme\Container $container = null
    ): void
    {
        parent::boot();
    }
}