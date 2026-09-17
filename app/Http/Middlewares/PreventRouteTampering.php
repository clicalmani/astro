<?php
namespace App\Http\Middlewares;

use Clicalmani\Core\Http\Middlewares\Middleware;
use Clicalmani\Core\Http\RequestInterface;
use Clicalmani\Core\Http\ResponseInterface;

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
     * @param \Clicalmani\Core\Http\RequestInterface $request Incoming HTTP request instance.
     * @param \Clicalmani\Core\Http\ResponseInterface $response Outgoing HTTP response instance.
     * @param \Closure $next Next middleware callback in the pipeline.
     * @return \Clicalmani\Core\Http\ResponseInterface|\Clicalmani\Core\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Core\Http\ResponseInterface|\Clicalmani\Core\Http\RedirectInterface
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