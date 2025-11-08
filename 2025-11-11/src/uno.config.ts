import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [
      'box-contents',
      {
        'background-color': '#d8dde1',
        color: '#1B1465',
        'border-color': 'var(--box-contents-border-color)',
      },
    ],
    ['font-en', { 'font-family': 'Barlow Condensed', 'letter-spacing': '0.125em' }],
    [
      'text-gradient',
      {
        background: `linear-gradient(
          135deg,
          #b3002d 0%,
          #c21c46 15%,
          #d13b60 35%,
          #e0527a 55%,
          #ec6b8f 75%,
          #f48fa7 100%
        )`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'background-clip': 'text',
        color: 'transparent',
      },
    ],
    [
      'border-gradient',
      {
        background: `linear-gradient(
          90deg,
          #b3002d 0%,
          #c21c46 20%,
          #d13b60 40%,
          #e0527a 60%,
          #ec6b8f 80%,
          #f48fa7 100%
        )`,
      },
    ],
  ],
})
