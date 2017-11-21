<template>
    <div>
        <div id="detail" class="modal-content position-absolute" >
            <div class="modal-header">
                <h5 class="modal-title">楼层走访统计图（<span>{{ this.$store.state.text }}</span>）</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" @click="close">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <li></li>
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
         floors: '',
         builds: ''
      }
  },
  methods: {
      close(){
          this.$store.commit('changeShow');
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
                    vm.floors = e.unit[0].floors;
                    vm.floors.forEach(function(el){
                        console.log(el)
                    });
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
                vm.floors = e.unit[0].floors;
                vm.floors.forEach(function(el){
                    console.log(el)
                });
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
</style>
