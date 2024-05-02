import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'swiper/swiper-bundle.css'; // Import Swiper CSS
import Swiper from 'swiper/bundle'; // Import Swiper JS

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['swiper'],
    }
  }
})
