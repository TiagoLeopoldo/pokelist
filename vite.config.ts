import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 👈 força o Vite a detectar mudanças em sistemas de arquivos instáveis
    },
  },
});