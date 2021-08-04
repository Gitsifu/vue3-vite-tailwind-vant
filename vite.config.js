import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default {
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') }
    ]
  }
}
