<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". By default, the Laravel CORS package will allow all origins,
    | which is ideal for local development. You may configure it as per your
    | needs for production, allowing only specific origins or methods.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'], // You can specify allowed methods like ['GET', 'POST', 'PUT', 'DELETE']

    'allowed_origins' => [
        'http://localhost:5173', // Your React app's URL
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // You can specify allowed headers like ['Content-Type', 'Authorization']

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
