import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
       show: false, // 控制bdetails是否显示
       building: '', // 楼号
       detailsShow: false,   // 控制details是否显示
       roomInfo: {},
       owner: {},
       tenants: [],
       permissions: '', // 权限等级
       modify: '', //  允许修改
<<<<<<< HEAD
       username: '' // 用户名
        
=======
       username: '' ,// 用户名
       house: [],
       buildingId: '',
       usermanage: false
>>>>>>> 17e6afb0fd203cf00f56c3f425e7b1ada48183e2
    },
	mutations:{
        changeVal(state, payload){
            state.show = true;
            state.building = payload.text;
        },
        changeShow(state){
            state.show = false;
        },
        changeRoomNum(state, payload){
            state.detailsShow = true;
            state.show = false;
            state.roomInfo = payload.roomInfo;
            state.owner = payload.owner;
            state.tenants = payload.tenants;
        },
        changeDetailsShow(state){
            state.detailsShow = false;
            state.show = true;
        },
        recordUserinfo(state, payload){
            state.permissions = payload.permissions;
            state.modify = payload.modify;
            state.username = payload.name;
            console.log(payload)
        },
        getData(state){
            state.house = [];
            axios.get('data/info.json')
            .then(function(res){
                let antrums = res.data;
                antrums.forEach(element => {
                    if(state.building == element.roomInfo.building + "#"){
                        state.buildingId = element.roomInfo.building
                        state.house.push(element)
                    }
                });
            })
            .catch(function(err){
                console.log(err)
            })
            
        },
        usermanageShow(state){
            state.usermanage = true;
        }
    }
});

export default store;