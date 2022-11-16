<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'email' => ['string', 'required', 'max:100', 'email', 'unique:users,email,'.$this->user->id],
            'role_id' => ['numeric', 'required', 'exists:roles,id'],
            'company_id' => ['numeric', 'nullable', 'exists:companies,id'],
        ];
    }
}
