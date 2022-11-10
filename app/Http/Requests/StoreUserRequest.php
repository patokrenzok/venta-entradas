<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'required', 'max:100'],
            'email' => ['string', 'required', 'max:100', 'email', 'unique:users,email'],
            'role_id' => ['numeric', 'required', 'exists:roles,id'],
        ];
    }
}
