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
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SettingsController;


Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/portfolio', [PortfolioController::class, 'view'])->name('portfolio');
Route::get('/project/{slug}.{id}', [ProjectController::class, 'project_view'])->name('project.view');

Route::get('/get-all-localizations', [LocalizationController::class, 'get_all']);
Route::post('/set-user-localization', [LocalizationController::class, 'set_user_localization']);
Route::get('/get-default-localization', [LocalizationController::class, 'get_default_localization']);

Route::post('/comment-create', [CommentController::class, 'store'])->name('comment.create');
Route::post('/reply-comment-create', [CommentController::class, 'reply_store'])->name('comment.reply.create');

Route::get('/get-default-theme-mode', [ThemeModeController::class, 'get_default_theme_mode']);
Route::post('/set-default-theme-mode', [ThemeModeController::class, 'set_default_theme_mode']);

Route::get('/get-settings', [SettingsController::class, 'get_settings'])->name('settings.get');

Route::get('/blog', [BlogController::class, 'view'])->name('blog');
Route::get('/article/{slug}.{id}', [ArticleController::class, 'view'])->name('article');

Route::middleware(['auth', 'verified'])->group(function(){

    Route::get('/dashboard', [DashboardController::class, 'view_main'])->name('dashboard');
    Route::get('/dashboard/projects', [DashboardController::class, 'view_projects'])->name('dashboard.projects.view');
    Route::get('/dashboard/projects/create', [DashboardController::class, 'view_project_create'])->name('dashboard.projects.create.view');
    Route::post('/dashboard/projects/create', [ProjectController::class, 'create_project'])->name('project.create');
    Route::get('/dashboard/articles', [DashboardController::class, 'view_articles'])->name('dashboard.articles.view');
    Route::get('/dashboard/articles/create', [DashboardController::class, 'view_article_create'])->name('dashboard.articles.create.view');
    Route::post('/dashboard/articles/create', [ArticleController::class, 'create_article'])->name('article.create');
    Route::get('/dashboard/settings', [DashboardController::class, 'view_settings'])->name('dashboard.settings.view');
    Route::get('/dashboard/social', [DashboardController::class, 'view_social'])->name('dashboard.social.view');
    Route::get('/dashboard/preferences', [DashboardController::class, 'view_preferences'])->name('dashboard.preferences.view');
    Route::patch('/preferences-update', [SettingsController::class, 'update_preferences'])->name('preferences.update');
    Route::post('/site-settings-update', [SettingsController::class, 'update_site_settings'])->name('site_settings.update');
    Route::post('/social-update', [SettingsController::class, 'update_social'])->name('social.update');
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
