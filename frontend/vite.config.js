import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 確保 Vite 服務器允許從 Docker 主機訪問
    port: 5173
  }
});
