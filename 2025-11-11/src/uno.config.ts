import config from '@slidev/client/uno.config'
import { mergeConfigs } from 'unocss'

export default mergeConfigs([
  config,
  {
    theme: {
      fontFamily: {
        main: 'Kosugi, sans-serif',
      },
    },
  },
])
