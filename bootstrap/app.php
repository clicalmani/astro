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

return \Clicalmani\Foundation\Maker\Application::setup(rootPath: dirname(__DIR__))
            ->withMailer()
            ->withInertia()
            ->run();
