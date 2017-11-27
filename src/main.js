
import Vue from 'vue';
import VueEvents from 'vue-events'
import router from './router/router.js';
import store from './store/store.js';

import App from './app.vue';

Vue.use(VueEvents);


const app = new Vue({
	el: '#app',
	router,
	store,
	template: '<app></app>',
	components: {
		App
	}
});