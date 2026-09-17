<?php
namespace App\Http\Middlewares;

use Clicalmani\Core\Http\Middlewares\Middleware;
use Clicalmani\Core\Http\RequestInterface;
use Clicalmani\Core\Http\ResponseInterface;

/**
 * Class Authenticator
 *
 * Middleware responsible for verifying user authentication status, 
 * renewing sliding sessions, and redirecting unauthenticated requests.
 *
 * @package App\Http\Middlewares
 * @author Clicalmani
 */
class Authenticator extends Middleware 
{
    /**
     * Handle an incoming request through the authentication lifecycle.
     * 
     * @param \Clicalmani\Core\Http\RequestInterface $request Incoming HTTP request instance.
     * @param \Clicalmani\Core\Http\ResponseInterface $response Outgoing HTTP response instance.
     * @param \Closure $next Next middleware callback in the pipeline.
     * @return \Clicalmani\Core\Http\ResponseInterface|\Clicalmani\Core\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Core\Http\ResponseInterface|\Clicalmani\Core\Http\RedirectInterface
    {
        if ($user = $request->user()) {
            if ($user->isAuthenticated() && false === $user->isOnline()) {
                $user->destroy();
                return redirect()->route('home');
            }

            $user->authenticate(); // Renew session sliding expiration

            return $next();
        }

        return redirect()->route('home');
    }

    /**
     * Bootstrap middleware dependencies and include global authentication routines.
     * 
     * @return void
     */
    public function boot() : void
    {
        $this->include('auth');
    }
}