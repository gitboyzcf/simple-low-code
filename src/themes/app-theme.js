import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export const NoirPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{sky.500}',
          contrastColor: '#ffffff',
          hoverColor: '{sky.600}',
          activeColor: '{sky.700}'
        },
        highlight: {
          background: '{sky.50}',
          focusBackground: '{sky.100}',
          color: '{sky.700}',
          focusColor: '{sky.800}'
        }
      },
      dark: {
        primary: {
          color: '{sky.400}',
          contrastColor: '{sky.900}',
          hoverColor: '{sky.300}',
          activeColor: '{sky.200}'
        },
        highlight: {
          background: '{sky.50}',
          focusBackground: '{sky.300}',
          color: '{sky.950}',
          focusColor: '{sky.950}'
        }
      }
    }
  }
})

export default {
  preset: NoirPreset,
  options: {
    darkModeSelector: '.dark'
  }
}
