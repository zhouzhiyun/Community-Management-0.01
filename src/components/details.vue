
<template>
	<div id="details" >
		<div class="card" style="width:560px;" @contextmenu.prevent="menu($event)">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col" :style="{'background': this.$store.state.roomInfo.color}">{{ this.$store.state.roomInfo.roomId }}</th>
						<th scope="col">房主姓名</th>
						<th scope="col">{{ this.$store.state.owner.name }}</th>
						<th scope="col">联系电话</th>
						<th scope="col">{{ this.$store.state.owner.phone }}</th>
						<th scope="col" rowspan="2" style="text-aline: center">录入者</th>
					</tr>
					<tr>
						<th scope="col">房客姓名</th>
						<th scope="col" colspan="2">身份证号码</th>
						<th scope="col">联系电话</th>
						<th scope="col">租赁截止日期</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="tenant in this.$store.state.tenants[hisIndex].tenantInfo">
						<td scope="row">{{ tenant.name }}</td>
						<td colspan="2">{{ tenant.IDcard }}</td>
						<td>{{ tenant.phone }}</td>
						<td>{{ tenant.deadline }}</td>
						<td v-text="recorder"></td>
					</tr>
					<tr v-show="addShow"><td colspan="6" style="text-align:center;cursor: pointer;color:red;"><b @click="showTenant">添加</b></td></tr>
				</tbody>
			</table>
			<div class="card-footer bg-transparent">
				<small class="text-muted">
					<span class="symbol" v-for="mark in this.$store.state.roomInfo.type" v-html="mark">
					</span>
				</small>	
				<button type="button" class="btn btn-secondary float-right btn-sm mx-2" @click="goback">返回</button>			
				<ul class="pagination float-right" style="margin:0;padding:0;">
					<li class="page-item">
						<a class="page-link" aria-label="First" @click="first">
							<span aria-hidden="true" class="material-icons">&#xE5DC;</span>
							<span class="sr-only">First</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link"  @click="previous" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE314;</span>
							<span class="sr-only">Previous</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" @click="next($event)" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE315;</span>
							<span class="sr-only">Next</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" aria-label="Last" @click="last">
							<span aria-hidden="true" class="material-icons">&#xE5DD;</span>
							<span class="sr-only">Last</span>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="card" v-if="tip"
		style="width:260px;min-height:200px;position: absolute;right: 600px;top: 0;">
		</div>

		<div class="card" style="width:150px;position: absolute;" v-show="menuShow" id="menu" ref="menu">
			<div class="list-group list-group-flush">
				<a style="cursor: pointer;" class="list-group-item list-group-item-action" @click="detEdit">编辑</a>
				<a style="cursor: pointer;" class="list-group-item list-group-item-action">事件处理</a>
				<a style="cursor: pointer;" class="list-group-item list-group-item-action">历史数据</a>
			</div>
		</div>
		
		<div class="card" id="household" v-if="houseOwnerEdit" style="width:340px; height:450px; position:absolute;left: 0;top:0; right: 0; margin: auto;">
			<div class="d-flex justify-content-around">
				<div @click="ownerEdit" class="btn btn-secondary" role="button">房主编辑</div>
				<div>
					<span class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						租客编辑
					</span>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" v-for="(tenant,index) in this.$store.state.tenants[0].tenantInfo" @click="tenantEdit(index)" v-text="tenant.name"></a>
					</div>
				</div>
			</div>

			<div class="card-body" style="width:300px; height:420px;">
				<div>

					<!-- 房主 -->
					<div style="width:100%;height:100%;" v-if="ownerShow">
						<div>
							<label class="ownerinfo" for="name">房主姓名</label>
							<input type="text" id="name" v-model="owner.name" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="sex">性别</label>
							<input type="text" id="sex" v-model="owner.sex" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="ethnic">民族</label>
							<input type="text" id="ethnic" v-model="owner.nation" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="census">户籍</label>
							<input type="text" id="census" v-model="owner.address" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="card">身份证号码</label>
							<input type="text" id="card" v-model="owner.IDcard" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="phone">联系电话</label>
							<input type="text" id="phone" v-model="owner.phone" class="owneript">
						</div>
						<div>
							<span class="ownerinfo">婚姻状况</span>
							<select id="marital" v-model="owner.marriage" class="ownersel">
								<option value="已婚">已婚</option>
								<option value="未婚">未婚</option>
								<option value="离异">离异</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">户籍性质</span>
							<select id="" v-model="owner.houseHold" class="ownersel">
								<option value="本地">本地</option>
								<option value="外地">外地</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">政治面貌</span>
							<select name="" id="" v-model="owner.politicalStatus" class="ownersel">
								<option value="党员">党员</option>
								<option value="群众">群众</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">独居老人</span>
							<select name="" id="" v-model="owner.livingAlone" class="ownersel">
								<option value="true">是</option>
								<option value="false">否</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">志愿者</span>
							<select name="" id="" v-model="owner.volunteer" class="ownersel">
								<option value="true">是</option>
								<option value="false">否</option>
								
							</select>
						</div>
						<div>
							<span class="ownerinfo">低保户</span>
							<select name="" id="" v-model="owner.lowsecurity" class="ownersel">
								<option value="true">是</option>
								<option value="false">否</option>
								
							</select>
						</div>
					</div>

					
					<!-- 房客 -->
					<div style="width:100%;height:100%;" v-if="tenter">
						<div>
							<label class="ownerinfo" for="name">房客姓名</label>
							<input type="text" id="name" v-model="tenant.name" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="sex">性别</label>
							<input type="text" id="sex" v-model="tenant.sex" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="ethnic">民族</label>
							<input type="text" id="ethnic" v-model="tenant.nation" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="census">户籍</label>
							<input type="text" id="census" v-model="tenant.address" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="card">身份证号码</label>
							<input type="text" id="card" v-model="tenant.IDcard" class="owneript">
						</div>
						<div>
							<label class="ownerinfo" for="phone">联系电话</label>
							<input type="text" id="phone" v-model="tenant.phone" class="owneript">
						</div>
						<div>
							<span class="ownerinfo">婚姻状况</span>
							<select id="marital" v-model="tenant.marriage" class="ownersel">
								<option value="已婚">已婚</option>
								<option value="未婚">未婚</option>
								<option value="离异">离异</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">户籍性质</span>
							<select id="" v-model="tenant.houseHold" class="ownersel">
								<option value="本地">本地</option>
								<option value="外地">外地</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">政治面貌</span>
							<select name="" id="" v-model="tenant.politicalStatus" class="ownersel">
								<option value="群众">群众</option>
								<option value="党员">党员</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">独居老人</span>
							<select name="" id="" v-model="tenant.livingAlone" class="ownersel">
								<option value="true">是</option>
								<option value="false">否</option>
							</select>
						</div>
						<div>
							<span class="ownerinfo">志愿者</span>
							<select name="" id="" v-model="tenant.volunteer" class="ownersel">
								<option value="true">是</option>
								<option value="false">否</option>
								
							</select>
						</div>
						<div>
							<span class="ownerinfo">低保户</span>
							<select name="" id="" v-model="owner.lowsecurity" class="ownersel">
								<option value="true">是</option>
								<option value="false">否</option>
								
							</select>
						</div>
					</div>
					<div class="d-flex justify-content-around" style="margin-top:10px;">
						<button type="button" class="btn btn-primary btn-sm" @click="cancel">取消</button>
						<button type="button" class="btn btn-primary btn-sm" @click="save">保存</button>
					</div>
				</div>
			</div>	
		</div>
		<addTenant v-if="this.$store.state.addTenantShow"></addTenant>
	</div>
</template>

<script>
	document.oncontextmenu=function(){
		return false;
	}
	import axios from 'axios';
	import $ from 'jquery';
	import addTenant from './addTenant.vue';
	export default {
		data(){
			return {
				disp:false,
				tip:false,
				menuShow:false,
				houseOwnerEdit:false,
				ownerShow: true,
				tenter: false,
				owner: {},
				tenant: {},
				text: 'owner',
				index: '',
				json: [],
				hisIndex: 0,
				recorder: this.$store.state.tenants[0].recorder,
				addShow: true
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
				this.menuShow = true;
			},
			detEdit(){
				let vm = this;
				switch(vm.$store.state.modify){
					case "1":
						vm.houseOwnerEdit = true;
						break;
					case "2": 
						if(vm.$store.state.building == "1#" || vm.$store.state.building == "2#" || vm.$store.state.building == "3#"){
							vm.houseOwnerEdit = true;
						}else{
							alert("没有操作权限")
						}
						break;
					case "3":
						if(vm.$store.state.building == "4#" || vm.$store.state.building == "5#" || vm.$store.state.building == "6#" || vm.$store.state.building == "7#"){
							vm.houseOwnerEdit = true;
						}else{
							alert("没有操作权限")
						}
						break;
					case "4":
						if(vm.$store.state.building == "8#" || vm.$store.state.building == "9#" || vm.$store.state.building == "10#"){
							vm.houseOwnerEdit = true;
						}else{
							alert("没有操作权限")
						}
							
						break;
					case "5":
						if(vm.$store.state.building == "11#" || vm.$store.state.building == "12#" || vm.$store.state.building == "13#" || vm.$store.state.building == "14#"){
							vm.houseOwnerEdit = true;
						}else{
							alert("没有操作权限")
						}
							
						break;
					case "6":
						if(vm.$store.state.building == "15#" || vm.$store.state.building == "16#" || vm.$store.state.building == "17#" || vm.$store.state.building == "18#"){
							vm.houseOwnerEdit = true;
						}else{
							alert("没有操作权限")
						}
							
						break;
					case "7":
						alert("没有操作权限")
						break;
					default:
						break;
				}
				
			},
			cancel(){
				this.houseOwnerEdit = false;
			},
			save(){
				let vm = this;
				vm.houseOwnerEdit = false;
				let building = vm.$store.state.roomInfo.building;
				let roomId = vm.$store.state.roomInfo.roomId;	
				let tenantInfo = this.$store.state.tenants[0].tenantInfo;
				let date = new Date().toLocaleDateString();
				let datas;
				vm.json.forEach(function(e, i){
					if(e.roomInfo.building == building && e.roomInfo.roomId == roomId){
						if(vm.text == "owner"){
							e.owner = vm.owner;
						}else{
							if(vm.tenant.name == ''){
								tenantInfo.splice (vm.index,1)
							}else{
								tenantInfo[vm.index] = vm.tenant;
							}
							let tenants = {};
							tenants.recordTime = date;
							tenants.tenantInfo = tenantInfo;
							e.tenants.unshift(tenants)
						}
						vm.json[i] = e
					}
				});
				$.ajax({
					method: 'POST',
					url: '/home',
					contentType: 'application/json',
                    data: JSON.stringify(vm.json),
					success: function(res){
						// console.log(res)
					},
					error: function(err){
						console.log(err)
					}
				})
			},
			goback(){
				this.$store.commit('changeDetailsShow')
			},
			ownerEdit(){
				this.tenter = false;
				this.ownerShow = true;
				this.text = "owner";
			},
			tenantEdit(index){
				this.tenter = true;
				this.ownerShow = false;
				this.text = "tenant";
				this.index = index;
				let tenants = this.$store.state.tenants[0].tenantInfo[index];
				this.tenant = tenants;
			},
			first(){
				this.hisIndex = 0;
				this.recorder = this.$store.state.tenants[this.hisIndex].recorder;
				this.addShow = true;
			},
			last(){
				this.hisIndex = this.$store.state.tenants.length - 1;
				this.recorder = this.$store.state.tenants[this.hisIndex].recorder;
				this.addShow = false;
			},
			next(){
				if(this.hisIndex < this.$store.state.tenants.length - 1){
					this.hisIndex += 1;
					this.recorder = this.$store.state.tenants[this.hisIndex].recorder;
					this.addShow = false;
				}
				if(this.hisIndex == 0){
					this.addShow = true;
				}
			},
			previous(){
				if(this.hisIndex > 0){
					this.hisIndex -= 1;
					this.recorder = this.$store.state.tenants[this.hisIndex].recorder;
					this.addShow = false;
				}
				if(this.hisIndex == 0){
					this.addShow = true;
				}
			},
			showTenant(){
				let vm = this;
				if(vm.hisIndex == 0){
					switch(vm.$store.state.modify){
						case "1":
							vm.$store.commit('changeAddTenant')
							break;
						case "2": 
							if(vm.$store.state.building == "1#" || vm.$store.state.building == "2#" || vm.$store.state.building == "3#"){
								vm.$store.commit('changeAddTenant')
							}else{
								alert("没有操作权限")
							}
							break;
						case "3":
							if(vm.$store.state.building == "4#" || vm.$store.state.building == "5#" || vm.$store.state.building == "6#" || vm.$store.state.building == "7#"){
								vm.$store.commit('changeAddTenant')
							}else{
								alert("没有操作权限")
							}
							break;
						case "4":
							if(vm.$store.state.building == "8#" || vm.$store.state.building == "9#" || vm.$store.state.building == "10#"){
								vm.$store.commit('changeAddTenant')
							}else{
								alert("没有操作权限")
							}
							break;
						case "5":
							if(vm.$store.state.building == "11#" || vm.$store.state.building == "12#" || vm.$store.state.building == "13#" || vm.$store.state.building == "14#"){
								vm.$store.commit('changeAddTenant')
							}else{
								alert("没有操作权限")
							}
							break;
						case "6":
							if(vm.$store.state.building == "15#" || vm.$store.state.building == "16#" || vm.$store.state.building == "17#" || vm.$store.state.building == "18#"){
								vm.$store.commit('changeAddTenant')
							}else{
								alert("没有操作权限")
							}	
							break;
						case "7":
							alert("没有操作权限")
							break;
						default:
							break;
					}
				}
				
			}
		},
		mounted(){
			let vm = this;
			vm.owner = vm.$store.state.owner;
			$.ajax({
					method: 'POST',
					url: '/getString',
					dataType: 'json',
					async: true,
					success: function(res){
						vm.json = res;
					},
					error: function(err){
						console.log(err)
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
			addTenant
		}
	}
	
</script>

<style scoped>
#details{
	position:absolute;
	right:10px;
	top:100px;
}
.ownerinfo{
	font-size: 14px;
	display: inline-block;
	width: 80px;
	text-align: left;
	outline: none;
}
.owneript{
	font-size: 14px;
	width: 150px;
	border: none;
	border-bottom: 1px solid #ccc;
	padding-left: 7px;
	outline: none;
	margin-top: 5px;
	
}
.ownersel{
	display: inline-block;
	width: 150px;
	font-size: 14px;
	border: none;
	border-bottom: 1px solid #ccc;
	padding-left: 7px;
	outline: none;
	margin-top: 5px;
}
</style>