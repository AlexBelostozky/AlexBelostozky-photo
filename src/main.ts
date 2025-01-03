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

app.mount('#app');
