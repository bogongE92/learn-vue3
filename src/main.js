/* import './assets/main.css' */
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'
/* import AppCard from '@/components/AppCard.vue'; */

/* createApp(App).mount('#app'); */

// 컴포넌트 전역등록
const app = createApp(App);

// 전역적으로 등록된 컴포넌트는 어디에서든지 사용할 수 있다. 
/* app.component('AppCard', AppCard); */

app.mount('#app');

/* 마운트를 먼저하고 부트스트랩 import하자 */
import 'bootstrap/dist/js/bootstrap.js';
