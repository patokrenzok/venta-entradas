<?php

namespace App\Http\Middleware;

use App\Enums\RoleEnum;
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class SuperadminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->role_id === RoleEnum::SUPERADMIN) {
            return $next($request);
        }

        return new RedirectResponse(RouteServiceProvider::HOME);
    }
}
