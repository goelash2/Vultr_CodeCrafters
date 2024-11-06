<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Example API route
Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});
