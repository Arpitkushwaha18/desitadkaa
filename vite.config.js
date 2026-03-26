import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // inline very small assets, keep defaults otherwise
    assetsInlineLimit: 4096,
  },
});
