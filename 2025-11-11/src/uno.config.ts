import config from '@slidev/client/uno.config'
import { mergeConfigs } from 'unocss'

export default mergeConfigs([
  config,
  {
    theme: {
      fontFamily: {
        sans: 'Kosugi, Hiragino Sans, Hiragino Kaku Gothic ProN, Noto Sans JP, sans-serif',
      },
    },
  },
])
