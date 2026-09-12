<?php
namespace App\Http\Middlewares;

use Clicalmani\Foundation\Http\Middlewares\Middleware;
use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Http\ResponseInterface;

/**
 * Class PreventRouteTampering
 *
 * Middleware responsible for verifying route parameters against parameter hashes
 * to prevent URL tampering and unauthorized parameter manipulation.
 *
 * @package App\Http\Middlewares
 * @author Clicalmani
 */
class PreventRouteTampering extends Middleware 
{
    /**
     * Handle an incoming request and verify parameter integrity.
     * 
     * @param \Clicalmani\Foundation\Http\RequestInterface $request Incoming HTTP request instance.
     * @param \Clicalmani\Foundation\Http\ResponseInterface $response Outgoing HTTP response instance.
     * @param \Closure $next Next middleware callback in the pipeline.
     * @return \Clicalmani\Foundation\Http\ResponseInterface|\Clicalmani\Foundation\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Foundation\Http\ResponseInterface|\Clicalmani\Foundation\Http\RedirectInterface
    {
        if ( ! $request->verifyParameters() ) {
            return $response->unauthorized();
        }

        return $next();
    }

    /**
     * Bootstrap middleware dependencies.
     * 
     * @return void
     */
    public function boot() : void
    {
        // ...
    }
}