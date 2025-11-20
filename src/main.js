import '@fortawesome/fontawesome-free/css/all.min.css'
import './styles/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
    