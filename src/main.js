
import Vue from 'vue';
import VueEvents from 'vue-events'
import router from './router/router.js';
import store from './store/store.js';
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
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