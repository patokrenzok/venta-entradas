<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class CompaniesController extends Controller
{
    public function index(): JsonResponse
    {
        return new JsonResponse(Company::all(), Response::HTTP_OK);
    }
}
