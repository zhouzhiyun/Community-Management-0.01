<template>
    <div>
        <div id="detail" class="modal-content position-absolute" >
            <div class="modal-header">
                <h5 class="modal-title">楼层走访统计图（<span>{{ this.$store.state.text }}&nbsp;&nbsp;合计：<span v-text="rooms.length"></span></span>户）</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" @click="close">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="lists" >
                <div class="list" v-for="room in rooms">
                    <span class="text" :style="{'background-color': room.color, cursor: 'pointer'}" @click="edit(room)" v-text="room.roomnumber"></span>
                    <span class="text">
                        <span class="symbol" v-for="mark in room.mark" v-html="mark">
                        </span>
                    </span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
         builds: ''
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
        var build = vm.$store.state.text
        axios.get('data/building.json')
        .then(function(res){
            vm.bulids = res.data;
            vm.bulids.forEach(function(e){
                if(e.id == build){
                    vm.rooms = e.room
                }
            });
        })
        .catch(function(err){
            console.log(err)
        })
    },
    updated () {
        var vm = this;
        var build = vm.$store.state.text;
        vm.bulids.forEach(function(e){
            if(e.id == build){
                vm.rooms = e.room
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
