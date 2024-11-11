<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'slug' => ['required', 'string'],
            'view_count' => ['required', 'integer'],
            'content' => ['required', 'string', 'min:100'],
            'banner' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp']
        ];
    }
}
