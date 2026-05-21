import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { resolve } from 'path'

// Custom plugin to copy src/data to public/data
const copyDataPlugin = {
  name: 'copy-data',
  apply: 'pre',
  hooks: {
    resolveId() {
      copyDataDirectory()
    },
  },
  configResolved() {
    copyDataDirectory()
  },
}

function copyDataDirectory() {
  const srcDir = resolve(__dirname, 'src/data')
  const destDir = resolve(__dirname, 'public/data')

  function copyRecursive(src: string, dest: string) {
    try {
      mkdirSync(dest, { recursive: true })
      const files = readdirSync(src)

      files.forEach((file) => {
        const srcPath = `${src}/${file}`
        const destPath = `${dest}/${file}`
        const stat = statSync(srcPath)

        if (stat.isDirectory()) {
          copyRecursive(srcPath, destPath)
        } else {
          copyFileSync(srcPath, destPath)
        }
      })
    } catch (error) {
      console.error(`Error copying data directory: ${error}`)
    }
  }

  copyRecursive(srcDir, destDir)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyDataPlugin],
})
