<?php

use Clicalmani\Core\Support\Facades\Route;

Route::get('/auth', function () {
    $user = auth()?->user();

    if (!$user) {
        return response()->unauthorized();
    }

    $channels = request()->input('topics', []);

    $granted = channel_authorizer()->authorize($user, $channels);
    
    // Génération du JWT Mercure avec le claim mercure.subscribe
    $token = \Clicalmani\Core\Support\Facades\Broadcast::subscribe($granted['channels']);

    return response()->json(['token' => $token]);
});