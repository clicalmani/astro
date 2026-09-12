<?php
namespace App\Http\Middlewares;

use Clicalmani\Foundation\Http\Middlewares\Middleware;
use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Http\ResponseInterface;

class VerifyToken extends Middleware 
{
    /**
     * Handler
     * 
     * @param \Clicalmani\Foundation\Http\RequestInterface $request Current RequestInterface; object
     * @param \Clicalmani\Foundation\Http\ResponseInterface $response Http response
     * @param \Closure $next 
     * @return \Clicalmani\Foundation\Http\Response|\Clicalmani\Foundation\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Foundation\Http\Response|\Clicalmani\Foundation\Http\RedirectInterface
    {
        if ($payload = verify_token($request->token)) {
            $request->payload = $payload;
            return $next($request, $response);
        }
        return $response->forbidden();
    }

    /**
     * Bootstrap
     * 
     * @return void
     */
    public function boot() : void
    {
        // ...
    }
}
