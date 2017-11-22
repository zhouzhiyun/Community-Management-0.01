
<template>
	<div id="details" >
		<div class="card" style="width:560px;">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">{{houseObj.roomID}}</th>
						<th scope="col">房主姓名</th>
						<th scope="col">{{houseObj.homeOwner.name}}</th>
						<th scope="col">联系电话</th>
						<th scope="col">{{houseObj.homeOwner.homeNumber}}</th>
						<th scope="col" rowspan="2">录入者</th>
					</tr>
					<tr>
						<th scope="col">房客姓名</th>
						<th scope="col" colspan="2">身份证号码</th>
						<th scope="col">联系电话</th>
						<th scope="col">租赁截止日期</th>
					</tr>
				</thead>
				<tbody>
					<tr @contextmenu.prevent="menu($event)" v-for="(room,index) in houseObj.room[0].roomers">
						<td scope="row">{{index+1}}.{{room.roomerName}}</td>
						<td colspan="2">{{room.IDCard}}</td>
						<td>{{room.rommerNumber}}</td>
						<td>{{room.closeingDate}}</td>
						<td>{{houseObj.room[0].recorder}}</td>
					</tr>
					
				</tbody>
			</table>
			<div class="card-footer bg-transparent">
				<small class="text-muted"><span>△□☆</span></small>	
				<button type="button" class="btn btn-secondary float-right btn-sm mx-2" @click="goback">返回</button>			
				<ul class="pagination float-right" style="margin:0;padding:0;">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE5DC;</span>
							<span class="sr-only">First</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE314;</span>
							<span class="sr-only">Previous</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE315;</span>
							<span class="sr-only">Next</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE5DD;</span>
							<span class="sr-only">Last</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="card" v-show="tip"
		style="width:260px;min-height:200px;position: absolute;right: 600px;top: 0;">起始
		</div>
		<div class="card" style="width:150px;position: absolute;" v-show="menuShow" id="menu" ref="menu">
			<div class="list-group list-group-flush">
				<a class="list-group-item list-group-item-action dropdown-toggle" id="navbarDropdown" 
				role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">编辑</a>
					<div class="dropdown-menu  dropdown-menu-left" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">房主信息编辑</a>
						<a class="dropdown-item" href="#">房客信息编辑</a>
					</div>
				<a class="list-group-item list-group-item-action">事件处理</a>
				<a class="list-group-item list-group-item-action">历史数据</a>
			</div>
		</div>
		
		<!--房主编辑-->
		<div class="card" v-show="houseOwnerEdit" style="width:300px;height:250px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;">
			<div class="card-body">
				<h5>房主信息</h5>
				
			</div>			
		</div>
	</div>
</template>

<script>
	document.oncontextmenu=function(){
		return false;
	}
	import axios from 'axios';
	export default {
		data(){
			return {
				disp:false,
				tip:false,
				menuShow:false,				
				houseOwnerEdit:false,
				houseObj:{}
			}
		},
		methods: {
			menu(el){
				var left=el.clientX;
				var top=el.clientY;
				var x=$('body').width();
				var y=$('body').height();
				var pos=$('#details').offset();
				if((x-left)<150){
					$('#menu').css({
						left:x-pos.left-150,
						top:top-pos.top
					});
				}else{
					$('#menu').css({
						left:left-pos.left,
						top:top-pos.top
					});
				}
				this.menuShow=true;
			},
			
			getDB(){
				
			},
			save(){
				
			},
			goback(){
				this.$store.commit('changeDetailsShow')
			}
		},
		mounted(){
			
			var vm=this;
			axios.get('data/house.json').then(function(res){
			
				
				var texts=vm.$store.state.text.split('#')[0];
				var number=vm.$store.state.roomNumber;
				console.log(number);
				for(var i=0;i<res.data.length;i++){
					if(res.data[i].building==texts){
						for(var j=0;j<res.data[i].rooms.length;j++){	
					
							if(res.data[i].rooms[j].roomID==number){
								console.log(res.data[i].rooms[j]);
								vm.houseObj=res.data[i].rooms[j];
								console.log(vm.houseObj);
							}
						}
					}
					
				}
			})
		},
		watch:{
			menuShow:function(value){
				var vm=this;
				if(value){
					$('body').not('#menu a').bind('click',function(){
						vm.menuShow=false;
					})
				}
			}
		},
		components: {
		}
	}
	
</script>

<style scoped>
#details{
	position:absolute;
	right:10px;
	top:100px;
}

</style>