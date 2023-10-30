import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()



export default defineConfig({
  define: {
    'import.meta.env.REACT_APP_HANKO_API': JSON.stringify(process.env.REACT_APP_HANKO_API)
  }
,  
  plugins: [react(),
  ],
})
