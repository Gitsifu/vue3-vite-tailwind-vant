import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import {defineConfig} from "vite";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
    ],
    // or
    // alias: {
    //   '@': resolve(__dirname, 'src')
    // }
  }
})
