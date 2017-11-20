
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Auth from '../views/auth.vue';
import Home from '../views/home.vue';

const router = new VueRouter({
  routes: [
	 { path: '/', component: Auth },
	 { path: '/auth', component: Auth },
	 { path: '/home', component: Home }
  ]
});

export default router;

