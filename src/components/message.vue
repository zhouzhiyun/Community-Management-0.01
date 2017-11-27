
<template>
	<div id="message">
        <div class="card card-1 h-100 w-100 rounded-circle" @click="c_click" > 
            <i class="material-icons">&#xE0C9;</i>
            <span class="rounded-circle dotted bg-danger" v-if="visitedArr.length>=1"></span>                     
        </div>
        <div class="card card-2" v-if="this.$store.state.massageflag">
            <div v-if="visitedArr.length==0 && events.length==0">暂无消息</div>
            <ul class="list-group list-group-flush" v-else>
                <li class="list-group-item" v-if="visitedArr.length!=0">
                    今天是探访独居老人的日子，请及时到访！
                </li>
                <li class="list-group-item"  v-if="events.length!=0">
                    有偷盗案件，请及时解决
                </li>
                <li class="list-group-item" v-if="visitedArr.length!=0">
                    有租客出租到期，请及时处理
                </li>
                
            </ul>
            
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
	export default {
		data(){
			return {
                visitedArr:[],
                events:[]

				
			}
		},
        methods:{
            c_click(){
                this.$store.commit('massageFlagHide')
            },
        },
		mounted() {
            let vm=this;
            vm.$events.on('visited',function(val){
                for(var i in val){
                    if(!val[i].visited){
                        vm.visitedArr.push(val[i]);
                    }
                }
            });
            axios.post('/events').then(function(req){
                 vm.events=req.data.event;
            }).catch(function (error) {
                console.log(error);
            });
			
		 }
	}
</script>

<style scoped>
#message{
    position:absolute;
    width:50px;
    height:50px;
    bottom:20px;
    right:20px;
    z-index: 90000;
}
.card-1{
    background-color:rgba(0,0,0,.4);
    padding:8px;
    color:#fff;
    cursor:pointer;
}
i{
    font-size:34px;
}
.dotted{
    width: 10px;
    height: 10px;
    position: absolute;
    right: 7px;
}
.card-2{
    position: absolute;
     width: 200px;
     height:150px;
     overflow-y:auto; 
     right: 0px; 
     bottom: 60px;
}

</style>