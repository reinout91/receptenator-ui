import { createApp } from 'vue';
import axios from 'axios';
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga-next/dist/oruga.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
// import 'bootstrap/dist/css/bootstrap.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/';

const app = createApp(App);
app.use(router);
app.use(Oruga);
app.mount('#app');
