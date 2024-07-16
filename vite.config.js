import { defineConfig } from "vite"
import tailwindcss from "tailwindcss"

export default defineConfig(() => {
  return {
    base: "/interno/",
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  }
})
