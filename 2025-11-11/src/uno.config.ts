import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [
      'box-contents',
      {
        'background-color': 'var(--box-contents-background-color)',
        color: 'var(--box-contents-text-color)',
        'border-color': 'var(--box-contents-border-color)',
      },
    ],
    [
      'box-contents-border-color',
      {
        'border-color': 'var(--box-contents-border-color)',
      },
    ],
    [
      'font-en',
      { 'font-family': 'Barlow Condensed', 'letter-spacing': '0.125em', 'padding-left': '0.1em' },
    ],
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
      'background-gradient',
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
    [
      'border-gradient',
      {
        'border-image': `linear-gradient(
          90deg,
          #b3002d 0%,
          #c21c46 20%,
          #d13b60 40%,
          #e0527a 60%,
          #ec6b8f 80%,
          #f48fa7 100%
        ) 1`,
      },
    ],
  ],
})
