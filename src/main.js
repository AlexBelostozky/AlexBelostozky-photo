import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp, firebaseAnalytics, db } from "./fireBaseConfig";

const app = createApp(App);

app.provide('firebaseApp', firebaseApp);
app.provide('firebaseAnalytics', firebaseAnalytics);
app.provide('db', db);

app.mount('#app');
