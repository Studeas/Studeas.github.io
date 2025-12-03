import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 如果使用 GitHub Pages 子路径（如 username.github.io/repo-name），取消下面的注释并设置 base
  // base: '/repo-name/',
  // 如果使用自定义域名或根路径，保持 base 为 '/' 或不设置
  base: '/',
})
