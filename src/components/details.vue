
<template>
	<div id="details" v-show="disp">
		<div class="card" style="width:560px;">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">{{houseObj.roomID}}</th>
						<th scope="col">房主姓名</th>
						<th scope="col">{{houseObj.homeOwner}}</th>
						<th scope="col">联系电话</th>
						<th scope="col">{{houseObj.homeNumber}}</th>
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
					<tr @contextmenu.prevent="menu($event)" v-for="(room,index) in houseObj.roomers">
						<td scope="row">{{index+1}}.{{room.roomerName}}</td>
						<td colspan="2">{{room.IDCard}}</td>
						<td>{{room.rommerNumber}}</td>
						<td>{{room.closeingDate}}</td>
						<td>{{room.recorder}}</td>
					</tr>
					
				</tbody>
			</table>
			<div class="card-footer bg-transparent">
				<small class="text-muted"><span>△□☆</span></small>	
				<button type="button" class="btn btn-secondary float-right btn-sm mx-2" @click="">返回</button>			
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
				<a class="list-group-item list-group-item-action dropdown-toggle" @click="edit" id="navbarDropdown" 
				role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">编辑</a>
					<div class="dropdown-menu  dropdown-menu-left" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" @click="editHouse">房屋信息编辑</a>
						<a class="dropdown-item" href="#">房主信息编辑</a>
						<a class="dropdown-item" href="#">房客信息编辑</a>
					</div>
				<a class="list-group-item list-group-item-action">事件处理</a>
				<a class="list-group-item list-group-item-action">历史数据</a>
			</div>
		</div>
		<!--房屋编辑-->
		<div class="card" v-show="houseEdit" style="width:300px;height:250px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;">
			<div class="card-body">
				<h5>房屋信息</h5>
				<form>
					<div class="form-row align-items-center">
						<div class="col-6 ">
							<select class="form-control form-control-sm" id="community">
								<option>山水园</option>								
							</select>						
						</div>
						<div class="col-6 ">
							<select class="form-control form-control-sm" id="village">
								<option>燕升园</option>								
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center">
						<div class="col-6">
							<select class="form-control form-control-sm" id="building">
								<option>1栋楼</option>
								<option>2栋楼</option>
								<option>3栋楼</option>
								<option>4栋楼</option>
								<option>5栋楼</option>
								<option>6栋楼</option>
								<option>7栋楼</option>
								<option>8栋楼</option>
								<option>9栋楼</option>
								<option>10栋楼</option>
								<option>11栋楼</option>
								<option>12栋楼</option>
								<option>13栋楼</option>
								<option>14栋楼</option>
								<option>15栋楼</option>
								<option>16栋楼</option>
								<option>17栋楼</option>
								<option>18栋楼</option>	
							</select>						
						</div>
						<div class="col-6">
							<select class="form-control form-control-sm" id="unit">
								<option>1单元</option>								
								<option>2单元</option>								
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center">
						<div class="col-6">
							<select class="form-control form-control-sm" id="floor">
								<option>2层</option>								
								<option>3层</option>								
								<option>4层</option>								
								<option>5层</option>								
								<option>6层</option>								
								<option>7层</option>								
								<option>8层</option>								
								<option>9层</option>								
							</select>						
						</div>
						<div class="col-6">
							<select class="form-control form-control-sm" id="roomNumber">
								<option>201房</option>								
								<option>202房</option>								
								<option>203房</option>								
								<option>204房</option>								
								<option>205房</option>								
								<option>206房</option>								
								<option>207房</option>								
								<option>208房</option>								
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center">
						<div class="col-6">
							<select class="form-control form-control-sm" id="roomType">
								<option>自住房</option>								
								<option>装修房</option>								
								<option>出租房</option>								
								<option>未拿房</option>		
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center my-2">
						<div class="col-6">
							<button type="button" class="btn btn-secondary" @click="houseEdit=false">取消</button>		
							<button type="button" class="btn btn-info" @click="save">保存</button>				
						</div>
					</div>
				</form>
			</div>
			
		</div>
		<!--房主编辑-->
		<div class="card" v-show="houseOwnerEdit" style="width:300px;height:250px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;">
			<div class="card-body">
				<h5>房主信息</h5>
				<form>
					<div class="form-row align-items-center">
						<div class="col-6 ">
							<select class="form-control form-control-sm" id="community">
								<option>山水园</option>								
							</select>						
						</div>
						<div class="col-6 ">
							<select class="form-control form-control-sm" id="village">
								<option>燕升园</option>								
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center">
						<div class="col-6">
							<select class="form-control form-control-sm" id="building">
								<option>1栋楼</option>
								<option>2栋楼</option>
								<option>3栋楼</option>
								<option>4栋楼</option>
								<option>5栋楼</option>
								<option>6栋楼</option>
								<option>7栋楼</option>
								<option>8栋楼</option>
								<option>9栋楼</option>
								<option>10栋楼</option>
								<option>11栋楼</option>
								<option>12栋楼</option>
								<option>13栋楼</option>
								<option>14栋楼</option>
								<option>15栋楼</option>
								<option>16栋楼</option>
								<option>17栋楼</option>
								<option>18栋楼</option>	
							</select>						
						</div>
						<div class="col-6">
							<select class="form-control form-control-sm" id="unit">
								<option>1单元</option>								
								<option>2单元</option>								
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center">
						<div class="col-6">
							<select class="form-control form-control-sm" id="floor">
								<option>2层</option>								
								<option>3层</option>								
								<option>4层</option>								
								<option>5层</option>								
								<option>6层</option>								
								<option>7层</option>								
								<option>8层</option>								
								<option>9层</option>								
							</select>						
						</div>
						<div class="col-6">
							<select class="form-control form-control-sm" id="roomNumber">
								<option>201房</option>								
								<option>202房</option>								
								<option>203房</option>								
								<option>204房</option>								
								<option>205房</option>								
								<option>206房</option>								
								<option>207房</option>								
								<option>208房</option>								
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center">
						<div class="col-6">
							<select class="form-control form-control-sm" id="roomType">
								<option>自住房</option>								
								<option>装修房</option>								
								<option>出租房</option>								
								<option>未拿房</option>		
							</select>						
						</div>
					</div>
					<div class="form-row align-items-center my-2">
						<div class="col-6">
							<button type="button" class="btn btn-secondary" @click="houseEdit=false">取消</button>		
							<button type="button" class="btn btn-info" @click="save">保存</button>				
						</div>
					</div>
				</form>
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
				disp:true,
				tip:false,
				menuShow:false,
				houseEdit:false,
				houseArr:[],
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
			edit(){
				
			},
			//房屋编辑
			editHouse(){
				this.houseEdit=true;
			},
			getDB(){
				
			},
			save(){
				this.houseEdit=false;
			}
		},
		mounted(){
			var vm=this;
			axios.get('data/house.json').then(function(res){
				for(let i=0;i<res.data.length;i++){
					if(res.data[i].roomID=='1501'){
						vm.houseArr.push(res.data[i]);
					}
				}
				vm.houseObj=vm.houseArr[vm.houseArr.length-1];
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