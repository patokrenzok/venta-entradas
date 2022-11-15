<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketTypeRequest;
use App\Models\TicketType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TicketTypeController extends Controller
{
    public function index(): JsonResponse
    {
        return new JsonResponse(TicketType::all(), Response::HTTP_OK);
    }

    public function store(StoreTicketTypeRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $ticketType = TicketType::create($validated);

        return new JsonResponse($ticketType, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function destroy(TicketType $ticketType): JsonResponse
    {
        $ticketType->delete();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
