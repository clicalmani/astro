<?php
namespace App\Providers;

use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Providers\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register
     * 
     * @return void
     */
    public function register() : void
    {
        // ...
    }

    /**
     * Bootstrap
     * 
     * @return void
     */
    public function boot(): void
    {
        Inertia::share(static function(RequestInterface $request) {
            return [
                // ...
            ];
        });
    }
}
