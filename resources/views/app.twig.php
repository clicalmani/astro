<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Inertia – TONKA Astro</title>
		<meta charset="utf-8" />
        @reactRefresh
        @vite("main.tsx")
        @inertiaHead
    </head>
    <body class="fs-6">
        @routes
        @inertia
        <script>
        // Polyfill for process
        if (typeof window !== 'undefined' && !window.process) {
            window.process = { 
            env: { 
                NODE_ENV: 'development' 
            } 
            };
        }
        </script>
    </body>
</html>
