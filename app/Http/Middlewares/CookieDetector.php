<?php
namespace App\Http\Middlewares;

use Clicalmani\Foundation\Http\Middlewares\Middleware;
use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Http\ResponseInterface;

/**
 * Class CookieDetector
 *
 * Middleware responsible for detecting, validating, and establishing session state
 * from HTTP session cookies before processing downstream requests.
 *
 * @package App\Http\Middlewares
 * @author Clicalmani
 */
class CookieDetector extends Middleware 
{
    /**
     * Handle an incoming request by validating the session cookie ID against the session store.
     * 
     * @param \Clicalmani\Foundation\Http\RequestInterface $request Incoming HTTP request instance.
     * @param \Clicalmani\Foundation\Http\ResponseInterface $response Outgoing HTTP response instance.
     * @param \Closure $next Next middleware callback in the pipeline.
     * @return \Clicalmani\Foundation\Http\ResponseInterface|\Clicalmani\Foundation\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Foundation\Http\ResponseInterface|\Clicalmani\Foundation\Http\RedirectInterface
    {
        if ($session_id = $request->cookie()->get('_SESSION_COOKIE')) {
            $session = new \Clicalmani\Foundation\Http\Session\DBSessionHandler(false, [
                'driver' => 'mysql', 
                'table'  => env('DB_TABLE_PREFIX') . 'sessions'
            ]);
            
            $session->open('/', $session_id);
            
            if ($session->validate_sid($session_id)) {
                return $next();
            }
        }
        
        return $response->unauthorized();
    }

    /**
     * Bootstrap middleware dependencies and include cookie handling routines.
     * 
     * @return void
     */
    public function boot() : void
    {
        $this->include('cookie');
    }
}