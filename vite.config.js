import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
export default defineConfig({
    plugins: [
        react()
    ],
    assetsInclude: ['**/*.md'],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
    build: {
        outDir: 'build'
    }
});
