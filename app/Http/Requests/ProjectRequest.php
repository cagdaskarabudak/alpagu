<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'slug' => ['required', 'string'],
            'open_source' => ['required', 'integer'],
            'content' => ['required', 'string', 'min:10'],
            'price' => ['required', 'integer'],
            'github_link' => ['nullable', 'string'],
            'demo_link' => ['nullable', 'string'],
            'view_count' => ['nullable', 'integer'],
            'status_id' => ['required', 'integer'],

            'technologies' => ['required', 'array'],
            'technologies.*.name' => ['required', 'string'],
            'technologies.*.image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp'],
            'technologies.*.content' => ['nullable', 'string'],

            'images' => ['required', 'array'],

            'contributors' => ['required', 'array'],
            'contributors.*.name' => ['required', 'string'],
            'contributors.*.url' => ['nullable', 'string'],
            'contributors.*.content' => ['nullable', 'string'],
            
            'attributes' => ['required', 'array'],
            'attributes.*.content' => ['required', 'string'],
        ];
    }
}
