import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {defineConfig} from "vite";
import legacy from '@vitejs/plugin-legacy'
import {visualizer} from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // 包大小分析插件
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  resolve: {
    alias: [
      {find: '@', replacement: resolve(__dirname, 'src')},
    ],
    // or
    // alias: {
    //   '@': resolve(__dirname, 'src')
    // }
    extensions: ['.js', '.ts', '.vue', '.json']
  }
})
