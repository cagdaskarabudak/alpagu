<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SocialRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'photo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp'],
            'is_destroy_photo' => ['required', 'in:1, 0'],
            'name' => ['nullable', 'string'],
            'phone' => ['nullable', 'string'],
            'email' => ['nullable', 'string'],
            'content' => ['nullable', 'string'],
    
            'url' => ['nullable', 'string'],
    
            'facebook' => ['nullable', 'string' ],
            'linkedin' => ['nullable', 'string' ],
            'instagram' => ['nullable', 'string' ],
            'x_twitter' => ['nullable', 'string' ],
            'discord' => ['nullable', 'string' ],
            'youtube' => ['nullable', 'string' ],
        ];
    }
}
