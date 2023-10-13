import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import componentConfig  from './src/components/lk.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      directoryAsNamespace: true,
      resolvers: [ElementPlusResolver()],
    }),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      core: path.resolve(__dirname, 'src/core'),
    },
    extensions: ['.js', '.vue']
  },
  build: {
    lib: {
      // 一次只能打包一个组件，尝试通过配置数组打包多个，无解而终
      entry: path.resolve(__dirname, componentConfig.entry),
      name: componentConfig.name,
      fileName: componentConfig.fileName,
      formats:  ['es', 'umd']
    },
  }
})
