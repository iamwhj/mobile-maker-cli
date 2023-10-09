import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import componentConfig  from './src/components/lk.json'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // 一次只能打包一个组件，尝试通过配置数组打包多个，无解而终
      entry: path.resolve(__dirname, componentConfig.entry),
      name: componentConfig.name,
      fileName: componentConfig.fileName,
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    }
  }
})
