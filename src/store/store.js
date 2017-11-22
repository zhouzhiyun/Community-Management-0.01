import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
       show: false, // 控制bdetails是否显示
       text: '', // 楼号
       roomNumber: '', // 房号
       detailsShow: false,   // 控制details是否显示
       bgcolor: '',
       mark: []
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
            state.show = false;
            state.roomNumber = payload.roomnumber;
            state.bgcolor = payload.color;
            state.mark = payload.mark;
        },
        changeDetailsShow(state){
            state.detailsShow = false;
            state.show = true;
        }
    }
});

export default store;