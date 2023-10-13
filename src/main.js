import { createApp } from 'vue'
import App from './App.vue'
import store from 'core/store'
import './style.css'

const app = createApp(App)

// Vue挂载至全局
window.Vue = app

app.use(store)

app.mount('#app')