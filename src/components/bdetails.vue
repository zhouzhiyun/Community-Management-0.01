<template>
    <div>
        <div id="detail" class="modal-content position-absolute" >
            <div class="modal-header">
                <h5 class="modal-title">楼层走访统计图（<span>{{ this.$store.state.buildingId }}栋&nbsp;&nbsp;合计：<span v-text="this.$store.state.house.length"></span></span>户）</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" @click="close">&times;</span>
                </button>
            </div>
            
            <div class="modal-body">
                <div :style="{width: this.$store.state.width}" id="lists">
                    <div class="list" v-for="room in this.$store.state.house">
                        <span class="text" :style="{'cursor': 'pointer','background-color': room.roomInfo.color}" @click="edit(room)">{{ room.roomInfo.roomId }}</span>
                        <span class="text">
                            <span v-for="type in room.roomInfo.type" v-html="type"></span>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
  data(){
      return {
         rooms: '' ,
         
      }
  },
  methods: {
      close(){
          this.$store.commit('changeShow');
      },
      edit(room){
          console.log(room)
          this.$store.commit('changeRoomNum', room)
      }
  },
  mounted(){
      let build = this.$store.state.building;
    //   if(this.$store.state.building){}
  }
}
</script>
<style scoped>
#detail{
    width: 585px;
    height: 500px;
    right: 20px;
    top: 75px;
    overflow-y: scroll;
}
#lists{
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
