import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
    "registerType": "autoUpdate",
    "manifest": {
        "name": "FocusPulse - Offline Pomodoro & Ambient Audio",
        "short_name": "FocusPulse",
        "description": "Distraction-free focus timer with ambient sound generator, offline session logging, and productivity analytics.",
        "theme_color": "#EF4444",
        "background_color": "#ffffff",
        "display": "standalone",
        "icons": [
            {
                "src": "pwa-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "pwa-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
})
  ]
});
