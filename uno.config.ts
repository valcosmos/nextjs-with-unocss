import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  presetAttributify,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal'
  },
  rules: [['custom-rule', { color: 'red' }]],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    })
    // ...
  ],
  transformers: [transformerAttributifyJsx()]
})
