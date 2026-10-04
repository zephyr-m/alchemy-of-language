import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router'
import { initializeDatabase } from './shared/db'
import './style.css'

await initializeDatabase()
createApp(App).use(router).mount('#app')
