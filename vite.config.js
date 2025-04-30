import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/github-resume/',
  plugins: [
    vue(),
    vueDevTools(),
  ],

})
