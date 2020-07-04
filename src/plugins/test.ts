import { Plugin, Context } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    $apiv2: Number;
  }
}

const APINextPlugin: Plugin = (ctx) => {
  ctx.$apiv2 = 2
}

export default APINextPlugin
