
<template>
	<div id="message">
        <div class="card card-1 h-100 w-100 rounded-circle" @click="c_click" > 
            <i class="material-icons">&#xE0C9;</i>
            <span class="rounded-circle dotted bg-danger" v-if="visitedArr.length>=1"></span>                     
        </div>
        <div class="card card-2" v-if="this.$store.state.massageflag">
            <div v-if="visitedArr.length==0 && events.length==0">暂无消息</div>
            <ul class="list-group list-group-flush" v-else>
                <li class="list-group-item" v-for=" visited in visitedArr">
                    {{visited.date}}日，需探访{{visited.building}}号楼{{visited.unit}}单元{{visited.roomNumber}}的{{visited.name}}老人。
                </li>
                <li class="list-group-item"  v-for="event in events" v-if="!event.deal">
                    于{{event.date}}日，在{{event.building}}号楼{{event.unit}}单元{{event.roomId}}发生偷盗案件，请及时处理
                </li>
                <li class="list-group-item" v-for=" visited in visitedArr">
                    {{visited.date}}日，{{visited.building}}号楼{{visited.unit}}单元{{visited.roomId}}的{{visited.name}}出租到期，请及时办理续租或退组
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
                this.$store.commit('massageFlagHide');
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
            //偷盗事件
            axios.post('/events').then(function(req){
                 vm.events=JSON.parse(JSON.stringify(req.data.event)).event;                 
            }).catch(function (error) {
                console.log(error);
            });

            vm.$events.on('delEvent',function(val){
                vm.visitedArr.splice(val,1);
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
     width: 400px;
     height:150px;
     overflow-y:auto; 
     right: 0px; 
     bottom: 60px;
}

</style>