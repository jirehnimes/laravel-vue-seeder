<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User\Admin;

class AuthorizeAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $adminAuthorizationHeader = $request->header(Admin::REQUEST_HEADER);

        if (env(Admin::AUTH_ENV_KEY) === $adminAuthorizationHeader) {
            return $next($request);
        }

        return response()->json('Unauthorized.', 401);
    }
}
