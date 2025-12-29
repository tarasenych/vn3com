import { createApp } from 'vue'
import WebApp from '@twa-dev/sdk'

import App from './App.vue'

const init = () => {
  WebApp.ready()

  const app = createApp(App)
  app.mount('#app')
}

init()
