import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
       show: false, // 控制bdetails是否显示
       text: '', // 楼号
       roomNumber: '', // 房号
       detailsShow: false   // 控制details是否显示
    },
	mutations:{
        changeVal(state, payload){
            state.show = true;
            state.text = payload.text;
        },
        changeShow(state){
            state.show = false;
        },
        changeRoomNum(state, payload){
            state.detailsShow = true;
            state.roomNumber = payload.roomNumber
        }
    }
});

export default store;