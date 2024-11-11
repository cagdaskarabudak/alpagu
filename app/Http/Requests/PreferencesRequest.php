<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PreferencesRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'blog' => ['required', 'in:1,0'],
            'portfolio' => ['required', 'in:1,0'],
            'contact' => ['required', 'in:1,0'],

            'project_comments' => ['required', 'in:1,0'],
            'article_comments' => ['required', 'in:1,0'],
            'view_project_comments' => ['required', 'in:1,0'],
            'view_article_comments' => ['required', 'in:1,0'],

            'registerable' => ['required', 'in:1,0'],
            'search' => ['required', 'in:1,0'],
            'customizer' => ['required', 'in:1,0'],
            'chat' => ['required', 'in:1,0'],
        ];
    }
}
