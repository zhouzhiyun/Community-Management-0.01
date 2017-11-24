<template>
    <div>
        <div id="detail" class="modal-content position-absolute" >
            <div class="modal-header">
                <h5 class="modal-title">楼层走访统计图（<span>{{ this.$store.state.building }}&nbsp;&nbsp;合计：<span v-text="buildings.length"></span></span>户）</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" @click="close">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="lists" >
                <div class="list" v-for="room in buildings">
                    <span class="text" style="cursor: pointer;" @click="edit(room)">{{ room.roomInfo.roomId }}</span>
                    <span class="text">
                        <span v-for="type in room.roomInfo.type" v-html="type"></span>
                    </span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">返回</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
  data(){
      return {
         rooms: '',
         buildings: [],
      }
  },
  methods: {
      close(){
          this.$store.commit('changeShow');
      },
      edit(room){
          this.$store.commit('changeRoomNum', room)
      }
  },
  mounted(){
        var vm = this;
        let build = vm.$store.state.building;
        axios.get('data/info.json')
        .then(function(res){
            vm.rooms = res.data;
            vm.rooms.forEach(function(e){
                let buildNum = e.roomInfo.building + "#";
                if(buildNum == build){
                    vm.buildings.push(e)
                }
            });
        })
        .catch(function(err){
            console.log(err)
        })
    },
    beforeUpdate () {
        let vm = this;
        vm.buildings = [];
        let build = vm.$store.state.building;
        vm.rooms.forEach(function(e){
            let buildNum = e.roomInfo.building + "#";
            if(buildNum == build){
               vm.buildings.push(e);
            }
        });
    },
    beforeCreate(){

    }
}
</script>
<style scoped>
#detail{
    width: 450px;
    height: 500px;
    right: 20px;
    top: 75px;
}
#lists{
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
}
.list{
    height: 25px;
    width: 70px;
    border: 1px solid #ccc;
    margin-left: 3px
}
.text{
    display: inline-block;
    font-size: 14px;
    width: 30px;
    height: 100%;
    margin-top: -1px;
    text-align: center;
    
}
.symbol{
    display: inline-block;
    vertical-align:bottom;
}
</style>
