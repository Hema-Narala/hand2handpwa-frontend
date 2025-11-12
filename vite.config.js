import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',       // ✅ Automatically updates service worker
      manifest: {
        name: 'Hand2Hand App',          // ✅ Full name of the app
        short_name: 'Hand2Hand',        // ✅ Short name for home screen
        start_url: '/',                  // ✅ Entry point of the PWA
        display: 'standalone',          // ✅ Opens like a native app
        background_color: '#ffffff',    // ✅ Splash screen background
        theme_color: '#000000',         // ✅ Toolbar & system color
        icons: [
          {
            src: '/logo192.png',        // ✅ 192x192 PNG icon
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo512.png',        // ✅ 512x512 PNG icon
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
