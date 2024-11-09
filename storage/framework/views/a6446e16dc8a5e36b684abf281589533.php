<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>" data-bs-theme="<?php echo e(Auth::check() ? (Auth::user()->default_theme_mode != '' ? Auth::user()->default_theme_mode : (session()->has('default_theme_mode') ? session()->get('default_theme_mode') : 'light')) : 'light'); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia><?php echo e(config('app.name', 'Laravel')); ?></title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <?php echo app('Tighten\Ziggy\BladeRouteGenerator')->generate(); ?>
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>
    <body>
        <div class="page-loader">
            <div class="page-loader-spinner"></div>
            <img src="/storage/images/alpagu.webp" alt="page-loader-logo" class="page-loader-logo">
        </div>
        <div class="brand-filigran">
            <img src="/storage/images/alpagu.webp" alt="background-logo-filigran">
        </div>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
    </body>
    <style>
        .page-loader{
            display: flex; 
            justify-content: center;
            align-items: center;
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: #232333;
            z-index: 9999;
        }
        .page-loader-logo{
            position: absolute;
            width: 100px; 
            height: 100px; 
            object-fit: cover; 
            border-radius: 50%;
        }
        .page-loader-spinner{
            position: absolute;
            width: 103px;
            height: 103px;
            display: block;
            background: linear-gradient(to right, transparent 30%, #8492a2 100%);
            border-radius: 50%;
            animation: spin 0.5s linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

    </style>
    <script type="module">
        window.addEventListener('load', () => {
            document.querySelector('.page-loader')?.remove();
        });
    </script>
</html>
<?php /**PATH /Users/cagdaskarabudak/Desktop/projects/alpagu/resources/views/app.blade.php ENDPATH**/ ?>