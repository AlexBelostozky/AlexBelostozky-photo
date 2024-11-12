import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp, firebaseAnalytics } from "./fireBaseConfig";

const app = createApp(App);

app.provide('firebaseApp', firebaseApp);
app.provide('firebaseAnalytics', firebaseAnalytics);

app.mount('#app');
