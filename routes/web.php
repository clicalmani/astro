<?php

use Clicalmani\Core\Support\Facades\Route;

/**
 * |-------------------------------------------------------------------------------
 * | Unauthenticated Routes
 * |-------------------------------------------------------------------------------
 * 
 * Routes without authentication should go here before the middleware.
 */

Route::get('/', static fn () => inertia('App'))->name('home');

/**
 * |-------------------------------------------------------------------------------
 * | Authenticated Routes
 * |-------------------------------------------------------------------------------
 * 
 * Based on JWT token
 * 
 */
Route::middleware('tokenizer');