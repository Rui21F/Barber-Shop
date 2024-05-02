import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-calendly'], // Add 'react-calendly' to the external array
    },
  },
});
