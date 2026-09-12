<?php
namespace App\Providers;

use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Providers\ServiceProvider;
use Inertia\Inertia;

/**
 * Class AppServiceProvider
 *
 * Core application service provider responsible for registering framework services,
 * bootstrapping global resources, and sharing shared data across Inertia components.
 *
 * @package App\Providers
 * @author Clicalmani
 */
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register application services and container bindings.
     * 
     * @return void
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap application services and configure global Inertia shared props.
     * 
     * @return void
     */
    public function boot(): void
    {
        Inertia::share(static function(RequestInterface $request) {
            return [
                // Global shared data across Inertia views
            ];
        });
    }
}