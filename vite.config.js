import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss()
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3333',
                changeOrigin: true,
            },
        },
        host: '127.0.0.1',
        port: 5173,
    },
})
