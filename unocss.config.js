import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

// https://unocss.dev/guide/config-file
export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
      lg: '960px',
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  content: {
    pipeline: {
      include: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
      ]
    }
  },
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
