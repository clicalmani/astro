import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tonka from 'tonka-vite-plugin';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tonka({
            input: ['resources/sass/app.scss', 'resources/js/main.tsx'],
            
            // SSR (Server-Side Rendering)
            ssr: false,
            
            // HMR: Hot Module Replacement
            refresh: true,
        }),
        react(),
    ],
});