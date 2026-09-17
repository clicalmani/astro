<?php
namespace App\Http\Middlewares;

use Clicalmani\Core\Http\Middlewares\Middleware;
use Clicalmani\Core\Http\RequestInterface;
use Clicalmani\Core\Http\ResponseInterface;

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
     * @param \Clicalmani\Core\Http\RequestInterface $request Incoming HTTP request instance.
     * @param \Clicalmani\Core\Http\ResponseInterface $response Outgoing HTTP response instance.
     * @param \Closure $next Next middleware callback in the pipeline.
     * @return \Clicalmani\Core\Http\ResponseInterface|\Clicalmani\Core\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Core\Http\ResponseInterface|\Clicalmani\Core\Http\RedirectInterface
    {
        if ($session_id = $request->cookie()->get('_SESSION_COOKIE')) {
            $session = new \Clicalmani\Core\Http\Session\DBSessionHandler(false, [
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