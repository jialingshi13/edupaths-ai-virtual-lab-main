import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Accept VITE_* (project .env) or Desktop-style url / Public keys
  envPrefix: ['VITE_', 'url', 'Public'],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});
