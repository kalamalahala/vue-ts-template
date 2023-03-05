import { createApp } from 'vue'
import { createPinia } from 'pinia'
import routes from './router/router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
	.use(pinia)
	.use(routes)
	.mount('#app')
