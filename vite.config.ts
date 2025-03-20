import {fileURLToPath} from 'url'
import {URL} from 'url'
import {ConfigEnv, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        checker({
            vueTsc: {
                tsconfigPath: './tsconfig.app.json',
                root: '.',
            },
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"',
                dev: {
                    logLevel: ['error'],
                },
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[local]__[hash:base64:5]'
        }
    },
    base: '/',
    server: {
        port: 3000,
        open: true,
    },
})
