<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Route Filtering
    |--------------------------------------------------------------------------
    | By default, Spark will not expose any routes for security reasons.
    | You must explicitly allow route groups or specific names.
    */
    'only' => [
        [
            'name' => 'home',
            'policy' => null
        ],
        [
            'name' => 'workspace',
            'policy' => \App\Contracts\Spark\WorkspaceContract::class
        ],
        [
            'name' => 'users.*',
            'policy' => null
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | OR: Exclusion (Blacklist)
    |--------------------------------------------------------------------------
    | If you prefer to expose everything EXCEPT specific routes.
    */
    // 'except' => [
    //     'admin.*',
    //     'horizon.*',
    // ],

    /*
    |--------------------------------------------------------------------------
    | Groups
    |--------------------------------------------------------------------------
    | Define route groups for selective exposure.
    */
    'groups' => [
        'public' => ['home', 'about', 'contact'],
        'auth' => ['dashboard', 'profile', 'settings'],
    ],
];
