<?php

/**
 * |-------------------------------------------------------------------------------
 * | Application Bootstrap File
 * |-------------------------------------------------------------------------------
 * This file is responsible for bootstrapping the application.
 * It sets up the application instance, loads necessary services, and runs the application.
 * 
 * @package Clicalmani\Foundation
 * @author Clicalmani
 * @version 2.3.4
 * @link https://github.com/clicalmani/foundation
 */

use Clicalmani\Foundation\Http\Middlewares\Middleware;
use Clicalmani\Foundation\Maker\Application;

return Application::setup(rootPath: dirname(__DIR__))
            ->withService(static function(Application $app) {
                $app->addService('inertia', [
                    \Inertia\Response::class
                ]);
            })
            ->withMiddleware(function(Middleware $middleware) {
                $middleware->web(append: [\Inertia\Middleware::class]);
            })
            ->run();
