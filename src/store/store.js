import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
       show: false,
       text: ''
    },
	mutations:{
        changeVal(state, payload){
            state.show = true;
            state.text = payload.text;
        },
        changeShow(state){
            state.show = false;
        }
    }
});

export default store;