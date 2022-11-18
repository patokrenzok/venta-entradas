<?php

namespace App\Http\Requests\PaymentMethods;

use Illuminate\Foundation\Http\FormRequest;

class StorePaymentMethodsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'payment_methods' => ['required', 'array'],
            'payment_methods.*' => ['required', 'string', 'exists:payment_methods,name'],
        ];
    }
}
