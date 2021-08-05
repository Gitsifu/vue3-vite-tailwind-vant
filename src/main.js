import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import './index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vant)
app.mount('#app')
