import {RouteRecordRaw} from 'vue-router';
import Layout from '../components/Layout.vue';

export const routes: RouteRecordRaw[] = [
  {path: '/', redirect: '/welcome'},
  {path: '/welcome', component: () => import('../views/welcome/index.vue')},
  {
    path: '/bills',
    component: Layout,
    redirect: '/bills/list',
    children: [
      {path: 'list', component: () => import('../views/bills/index.vue')},
      {path: 'create', component: () => import('../views/bills/create.vue')},
      {path: 'report', component: () => import('../views/bills/report.vue')},
      {path: 'settings', component: () => import('../views/bills/settings.vue')},
    ]
  },
];
