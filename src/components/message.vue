
<template>
	<div id="message">
        <div class="card card-1 h-100 w-100 rounded-circle" @click="c_click"> 
            <i class="material-icons">&#xE0C9;</i>
            <span class="rounded-circle dotted bg-danger" v-if="visitedArr.length>=1"></span>                     
        </div>
        <div class="card card-2" v-if="flag">
            <div v-if="visitedArr.length==0">暂无消息</div>
            <ul class="list-group list-group-flush" v-else>
                <li class="list-group-item">
                    今天是探访独居老人的日子，请及时到访！
                </li>
                
            </ul>
            
        </div>
    </div>
</template>

<script>

	export default {
		data(){
			return {
                visitedArr:[],
                flag:false
				
			}
		},
        methods:{
            c_click(){
                if(this.flag){
                    this.flag=false;
                }else{
                    this.flag=true;
                }
            }
        },
		mounted() {
            let vm=this;
            vm.$events.on('visited',function(val){
                console.log('------------visited--------');
                for(var i in val){
                    if(!val[i].visited){
                        vm.visitedArr.push(val[i]);
                    }
                }
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