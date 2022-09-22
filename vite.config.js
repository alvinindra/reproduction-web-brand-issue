import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { VitePluginRadar } from "vite-plugin-radar"
import viteCompression from 'vite-plugin-compression'
import WindiCSS from 'vite-plugin-windicss'
import VitePluginHtmlEnv from 'vite-plugin-html-env'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    Pages(),
    Sitemap(),
    Layouts(),
    WindiCSS(),
    quasar({
      sassVariables: 'src/assets/scss/abstracts/quasar-variables.scss'
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core', 'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [ElementPlusResolver()],
    }),
    VitePluginHtmlEnv(),
    viteCompression(),
    VitePluginRadar({
      analytics: {
        id: 'G-ZVMS24J2HN',
      },
    }),
    splitVendorChunkPlugin()
  ]
})
