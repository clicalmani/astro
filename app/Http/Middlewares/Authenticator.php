<?php
namespace App\Http\Middlewares;

use Clicalmani\Foundation\Http\Middlewares\Middleware;
use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Http\ResponseInterface;

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
     * @param \Clicalmani\Foundation\Http\RequestInterface $request Incoming HTTP request instance.
     * @param \Clicalmani\Foundation\Http\ResponseInterface $response Outgoing HTTP response instance.
     * @param \Closure $next Next middleware callback in the pipeline.
     * @return \Clicalmani\Foundation\Http\ResponseInterface|\Clicalmani\Foundation\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Foundation\Http\ResponseInterface|\Clicalmani\Foundation\Http\RedirectInterface
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