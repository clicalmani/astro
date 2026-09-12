<?php

namespace App\Http;

use Clicalmani\Foundation\Maker\HttpKernel;

/**
 * Class Kernel
 *
 * Configures the application's HTTP kernel, defining global and gateway-specific 
 * middleware pipelines as well as custom validation rule registries.
 *
 * @package App\Http
 * @author Clicalmani
 */
class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application
     * grouped by gateway channel ('web' or 'api').
     *
     * @var array
     */
    protected array $middleware = [

        /**
         * |-------------------------------------------------------------------
         * |                          Web Gateway
         * |-------------------------------------------------------------------
         * 
         * Web gateway middleware stack
         * 
         * Register here your custom middlewares for web gateway.
         */
        'web' => [
            'tokenizer' => \App\Http\Middlewares\Authenticator::class
        ],

        /**
         * |-------------------------------------------------------------------
         * |                          API Gateway
         * |-------------------------------------------------------------------
         * 
         * API gateway middleware stack
         * 
         * Register here your custom middlewares for api gateway.
         */
        'api' => [
            // ...
        ]
    ];

    /**
     * The application's custom HTTP validator rules registry.
     *
     * @var array<string, class-string>
     */
    protected array $custom_rules = [
        // Add here your custom validators
    ];
}