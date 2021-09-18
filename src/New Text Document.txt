import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/';

createApp(App).use(router).mount('#app');
