<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tickets\StoreTicketTypeRequest;
use App\Http\Requests\Tickets\UpdateTicketTypeRequest;
use App\Models\TicketType;
use Illuminate\Http\JsonResponse;
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

    public function update(UpdateTicketTypeRequest $request, TicketType $ticketType): JsonResponse
    {
        $validated = $request->validated();
        $ticketType->update($validated);

        return new JsonResponse($ticketType, Response::HTTP_OK);
    }

    public function show(TicketType $ticketType): JsonResponse
    {
        return new JsonResponse($ticketType, Response::HTTP_OK);
    }

    public function destroy(TicketType $ticketType): JsonResponse
    {
        $ticketType->delete();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
