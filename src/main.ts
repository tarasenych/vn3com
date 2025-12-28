import { createApp } from 'vue'
import WebApp from '@twa-dev/sdk'

import App from './App.vue'

const init = async () => {
  // 1. Сообщаем Telegram, что мы готовы. 
  // Это убирает загрузочный экран Telegram.
  WebApp.ready()

  // 2. Опционально: можно добавить микро-задержку для стабилизации стилей темы
  // или дождаться, пока Telegram передаст расширенные параметры темы
  if (WebApp.colorScheme) {
     console.log('Тема определена:', WebApp.colorScheme)
  }

  // 3. Монтируем приложение
  const app = createApp(App)
  app.mount('#app')
};

init()