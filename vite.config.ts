import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tonka from 'tonka-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tonka({
            input: 'resources/js/main.tsx',
            
            // SSR (Server-Side Rendering)
            ssr: false,
            
            // HMR: Hot Module Replacement
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    define: {
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
    }
});