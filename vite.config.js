import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const env = loadEnv(process.cwd(), "");

export default defineConfig({
  define: {
    "process.env": env,
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
})