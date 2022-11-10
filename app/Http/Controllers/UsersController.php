<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends Controller
{
    public function index(): JsonResponse
    {
        return new JsonResponse(User::all(), Response::HTTP_OK);
    }

    public function store(StoreUserRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $validated['password'] = bcrypt(Str::random());
        $user = User::create($validated);

        return new JsonResponse($user, Response::HTTP_CREATED);
    }

    public function destroy(): JsonResponse
    {
        $user = Auth::user();
        $user->delete();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
