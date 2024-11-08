<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\LocalizationController;
use App\Http\Controllers\ThemeModeController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/portfolio', [PortfolioController::class, 'view'])->name('portfolio');
Route::get('/project/{slug}.{id}', [ProjectController::class, 'project_view'])->name('project.view');

Route::get('/get-all-localizations', [LocalizationController::class, 'get_all']);
Route::post('/set-user-localization', [LocalizationController::class, 'set_user_localization']);
Route::get('/get-default-localization', [LocalizationController::class, 'get_default_localization']);

Route::get('/get-default-theme-mode', [ThemeModeController::class, 'get_default_theme_mode']);
Route::post('/set-default-theme-mode', [ThemeModeController::class, 'set_default_theme_mode']);

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::post('/live-chat/first-message', [ChatController::class, 'first_message'])->name('message.first');
Route::post('/live-chat/send-message', [ChatController::class, 'send_message'])->name('message.send');

Route::middleware('auth')->group(function () {
    Route::get('/profile/inbox', [ProfileController::class, 'inbox'])->name('profile.inbox');
    Route::get('/profile/articles', [ProfileController::class, 'articles'])->name('profile.articles');
    Route::get('/profile/comments', [ProfileController::class, 'comments'])->name('profile.comments');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
