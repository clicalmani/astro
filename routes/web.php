<?php

use Clicalmani\Foundation\Support\Facades\Route;
use Inertia\Inertia;

/**
 * |-------------------------------------------------------------------------------
 * | Web Routes
 * |-------------------------------------------------------------------------------
 * 
 */

Route::get('/', static function () {
    return Inertia::render('Home');
});