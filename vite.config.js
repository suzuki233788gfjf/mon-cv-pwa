import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // <-- Nouvelle ligne d'import

export default defineConfig({
  // IMPORTANT : Remplacez 'mon-cv-pwa' par le nom EXACT de votre dépôt GitHub
  base: '/mon-cv-pwa/',

  plugins: [
    react(),
    // Configuration du plugin PWA
    VitePWA({
      registerType: 'autoUpdate', // Active la mise à jour automatique du Service Worker
      devOptions: {
        enabled: true // Utile pour tester localement avec 'npm run dev'
      },
      manifest: { // Ici, nous configurons le manifest.json directement
        name: 'Mon CV de Meli Tsaki Susy',
        short_name: 'Mon CV',
        start_url: './', // Le Service Worker gérera le chemin de base correctement avec le plugin
        display: 'standalone', // Très important pour le mode application complète
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'img/android-chrome-192x192.png', // Ces chemins sont relatifs au dossier 'public'
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      // Configuration de Workbox (pour le caching et le mode hors ligne)
      workbox: {
        // Modèles de fichiers à mettre en cache par le Service Worker
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg}',
          'video/ma-presentation-video.mp4', // Votre vidéo
          'src/assets/CV-Meli_Tsaki_Susy_2025.pdf', // Votre PDF
          'audio/ma-voix.mp3', // Votre fichier audio
          'img/portrait.jpg', // Votre photo
          'img/*.jpg', // Toutes les images JPG dans public/img/
          'icons/*.png', // Toutes les icônes PNG dans public/icons/
        ],
      }
    }),
  ],
  // Permet l'accès au serveur de développement depuis le réseau local
  server: {
    host: '0.0.0.0',
  },
})