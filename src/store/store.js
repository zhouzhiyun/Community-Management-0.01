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
       username: '', // 用户名
       house: [],
       buildingId: '',
       usermanage: false, // 用户管理
       eventHand: false, //  事件处理
       record:false , // 信息录入
       massage: false , // 消息提醒
       massageflag: false ,// 消息弹出
       width: "585px",
       addTenantShow: false
    },
	mutations:{
        changeWidth(state){
            if(state.building == "9#" || state.building == "10#" || state.building == "14#" || state.building == "17#"){
                state.width = "730px"
           }else{
            state.width = "585px"
           }
        },
        changeVal(state, payload){
            state.show = true;
            state.usermanage = false;
            state.eventHand = false;
            state.record = false;
            state.massage = false;
            state.detailsShow = false;
            state.massageflag = false;
            state.building = payload.text;
        },
        changeShow(state){
            state.show = false;
        },
        changeRoomNum(state, payload){
            state.detailsShow = true;
            state.show = false;
            state.massageflag = false;
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
            if(state.usermanage){
                state.usermanage = false;
            }else{
                state.usermanage = true;
                state.eventHand = false;
                state.record = false;
                state.massage = false;
                state.show = false;
                state.detailsShow = false;
                state.massageflag = false;
            }
        },
        eventHandHide(state){
            if(state.eventHand){
                state.eventHand = false;
            }else{
                state.usermanage = false;
                state.eventHand = true;
                state.record = false;
                state.massage = false;
                state.show = false;
                state.detailsShow = false;
                state.massageflag = false;
            }
        },
        recordHide(state){
            if(state.record){
                state.record = false;
            }else{
                state.usermanage = false;
                state.eventHand = false;
                state.record = true;
                state.massage = false;
                state.show = false;
                state.detailsShow = false;
                state.massageflag = false;
            }
        },
        massageHide(state){
            if(state.massage){
                state.massage = false;
            }else{
                state.usermanage = false;
                state.eventHand = false;
                state.record = false;
                state.massage = true;
            }
        },
        massageFlagHide(state){
            if(state.massageflag){
                state.massageflag = false;
            }else{
                state.massageflag = true; 
            }
        },
        changeAddTenant(state){
            if(state.addTenantShow){
                state.addTenantShow = false; 
            }else{
                state.addTenantShow = true;
            }
        }
    }
});

export default store;