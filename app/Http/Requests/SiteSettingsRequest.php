<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SiteSettingsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'site_name' => ['required', 'string'],
            'logo_src' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp'],
            'is_destroy_photo' => ['required', 'in:1, 0'],
            'site_description' => ['required', 'string'],
            'site_keywords' => ['required', 'string'],
        ];
    }
}
