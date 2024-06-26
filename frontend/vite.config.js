// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    //port: 5173, When not running with docker compose, this is the port which will be used in docker
  }
})