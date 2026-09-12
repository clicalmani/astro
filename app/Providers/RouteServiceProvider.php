<?php
namespace App\Providers;

use Clicalmani\Foundation\Providers\RouteServiceProvider as ServiceProvider;
use Clicalmani\Foundation\Support\Facades\Route;

/**
 * Class RouteServiceProvider
 *
 * Handles routing registration, group middleware bindings, prefix configurations, 
 * and global route parameter patterns for the application.
 *
 * @package App\Providers
 * @author Clicalmani
 */
class RouteServiceProvider extends ServiceProvider
{
    /**
     * API routes URI prefix.
     * 
     * @var string 
     */
    protected string $api_prefix = 'api';

    /**
     * Route parameter placeholder prefix.
     * 
     * @var string 
     */
    protected string $parameter_prefix = ':';

    /**
     * Defines application route groups, model bindings, and middleware pipelines.
     * 
     * @return void
     */
    public function boot(): void
    {
        $this->routes(function() {
            if (Route::isApi()) {
                Route::group(fn() => require_once root_path($this->api_handler))
                    ->prefix($this->api_prefix)
                    ->middleware('api');
            } else {
                Route::group(fn() => require_once root_path($this->web_handler))
                    ->middleware('web');
            }
        });
    }

    /**
     * Register route response handlers, global patterns, and service bindings.
     * 
     * @return void
     */
    public function register(): void
    {
        ServiceProvider::responseHandler(fn(mixed $user) => [
            // Custom response payload data structure
        ]);

        /**
         * Global route parameter regex pattern constraints.
         */
        Route::pattern('id', '[0-9]+');
    }
}