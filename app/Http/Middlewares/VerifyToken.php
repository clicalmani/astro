<?php
namespace App\Http\Middlewares;

use Clicalmani\Core\Http\Middlewares\Middleware;
use Clicalmani\Core\Http\RequestInterface;
use Clicalmani\Core\Http\ResponseInterface;

class VerifyToken extends Middleware 
{
    /**
     * Handler
     * 
     * @param \Clicalmani\Core\Http\RequestInterface $request Current RequestInterface; object
     * @param \Clicalmani\Core\Http\ResponseInterface $response Http response
     * @param \Closure $next 
     * @return \Clicalmani\Core\Http\Response|\Clicalmani\Core\Http\RedirectInterface
     */
    public function handle(RequestInterface $request, ResponseInterface $response, \Closure $next) : \Clicalmani\Core\Http\Response|\Clicalmani\Core\Http\RedirectInterface
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
