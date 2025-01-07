import { createApp } from 'vue';
import App from './App.vue';
import router from '../router';
import { firebaseApp, firebaseAnalytics, db } from "./fireBaseConfig";
import '@/assets/styles/main.sass'

const app = createApp(App);

app.use(router);

app.provide('firebaseApp', firebaseApp);
app.provide('firebaseAnalytics', firebaseAnalytics);
app.provide('db', db);

const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');

if (redirect) {
  router.push(redirect);
}

app.mount('#app');
