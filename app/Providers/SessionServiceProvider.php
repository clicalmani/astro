<?php
namespace App\Providers;

use Clicalmani\Foundation\Providers\SessionStorageServiceProvider as SessionProvider;

class SessionServiceProvider extends SessionProvider
{
    protected static $driver = \Clicalmani\Foundation\Http\Session\FileSessionHandler::class;

    /**
     * Here you may specify the number of seconds that you wish the session
     * to be allowed to remain idle before it expires.
     * 
     * @var int
     */
    protected static $lifetime = 300;

    /**
     * Here you may specify the maximum number of seconds that you wish the session
     * should be idle.
     * 
     * @var int
     */
    protected static $max_lifetime = 900;

    /**
     * If you want session to immediately expire on the browser closing, set that option.
     * 
     * @var bool
     */
    protected static $expire_on_close = false;
    
    /**
     * Bootstrap
     * 
     * @return void
     */
    public function boot(): void
    {
        parent::boot();
    }
}
