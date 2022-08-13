import Welcome from '../views/welcome.vue';
import {RouteRecordRaw} from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {path: '/', redirect: '/welcome'},
  {path: '/welcome', component: Welcome},
];
