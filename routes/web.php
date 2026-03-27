<?php

use Clicalmani\Foundation\Http\RequestInterface;
use Clicalmani\Foundation\Support\Facades\Route;

/**
 * |-------------------------------------------------------------------------------
 * | Unauthenticated Routes
 * |-------------------------------------------------------------------------------
 * 
 * Routes without authentication should go here before the middleware.
 */

Route::get('/', static function (RequestInterface $request) {
    return inertia('App');
})->name('home');

/**
 * |-------------------------------------------------------------------------------
 * | Authenticated Routes
 * |-------------------------------------------------------------------------------
 * 
 * Based on JWT token
 * 
 */
Route::middleware('tokenizer');