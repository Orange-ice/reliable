import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import {routes} from './config/routes';
import './styles/reset.scss';
import './styles/variable.scss';
// 引入所有 svg
import '@svgstore';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');
