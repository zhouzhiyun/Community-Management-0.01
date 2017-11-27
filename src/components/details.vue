
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
					<span class="symbol" style="font-size:30px;" v-for="mark in this.$store.state.roomInfo.type" v-html="mark">
					</span>
					<span  class="symbol material-icons" @click="c_video" style="cursor:pointer;" v-if="this.$store.state.building=='18#' && this.$store.state.roomInfo.roomId==3108">&#xE04B;</span>
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
<<<<<<< HEAD

		<div class="card" v-if="tip"
		style="width:260px;min-height:200px;position: absolute;right: 600px;top: 0;">
=======
		<!-- word图片-->
		<div class="card" v-if="tip"
			style="width:400px;min-height:200px;max-height:535px;overflow-y:auto;position: absolute;right: 570px;top: 0;">
			<div v-if="this.$store.state.building=='18#' && this.$store.state.roomInfo.roomId==3108">
				<h6 class="text-center">管控人员</h6>
				<p>
				管控人员<br>

				1、周晓岗：身份证号320113195707132088，离异，籍贯江苏宜兴，2004年9月7日将自己写的‘严正声明’交给暂住在下关区新民村59号的李雪峰，让其上传至法轮功网站，被列为“组织和利用邪教组织破坏法律实施案”。<br>
				2、儿子：周思明，身份证号320106198201022818。<br>
				联系电话：13815874265。<br>
				3、孙女：周逸楠，身份证号320106201311050822。<br>
				户籍地均在：南京市鼓楼区水佐岗15巷1栋104室<br>
				现住地址：南京栖霞区燕升园9栋1910室。<br>
				</p>
			</div>
			<div v-if="this.$store.state.building=='15#' && this.$store.state.roomInfo.roomId==604">
				<img  src="../assets/daichangmei.png" style="vertical-align:bottom" width="80" height="100"/>				
				<big><strong>戴</strong></big>昌美，女，1946年1月出生，1965年4月加入中国共产党，居住在燕升园12-604。
				栖霞区建筑劳动服务公司党支部书记退休。戴昌美同志自2015年11月17日将党员组织关系转入山水园社区党支部以来，
				严格遵守党支部的各项规章制度，按时参加党支部组织的各项活动，积极投身于社区志愿者队伍，充分发挥了党员的模范带头作用，
				她将退休后的生活扎根在了社区、将退休后的时光献给了小区居民，在山水园社区树立了标杆。
			</div>
			<div v-if="this.$store.state.building=='17#' && this.$store.state.roomInfo.roomId==2502">
				<h6 class="text-center">志愿者风采展示</h6>
				<img  src="../assets/volunteer.png" style="float:left" width="120" height="140"/>				
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孙学林于2015年9月任燕升园14栋楼栋长，孙师傅还是山水园社区巡逻队的负责人，他在巡逻队的队长岗位上默默耕耘，
				为社区的卫生和安全环境无私奉献；他助人为乐，为居民调解矛盾，为左邻右舍排忧解难，为孤寡独居老人送去关怀。他任劳任怨，
				照顾癌症戏友直至生命的最后一刻；他生活简朴，不计较个人得失，无私地组织了一场又一场扬剧表演，为居民带来欢乐；
				他独自一人生活，却因为自己的热情善行将左邻右舍团结成一家人，给巡逻队带来一股凝聚力，他所在的地方总是一个大家庭；
				他年逾花甲，从朝气蓬勃到如今两鬓斑白，一直秉持着助人为乐的精神，依旧活跃在扬剧舞台上，活跃在为民服务的平台上，
				尽自己的力量，为社会添一份温暖与感动！
			</div>
			<div v-if="this.$store.state.building=='16#' && this.$store.state.roomInfo.roomId==306">
				<div class="text-center my-1">
					<img  src="../assets/dibaohu.png"  width="180" height="140"/>
					<p class="text-center">封铜昌</p>
				</div>			
				<p>								
					一、家庭自然情况：<br>
					1、家庭住址： 栖霞区华银路20号14幢一单元1808室。<br>
					2、家庭共同居住人员数及相互关系： 一人居住。<br>
					3、住房情况： 现住华银路20号14幢二单元808室为拆迁安置房。<br>
					二、家庭成员状况：<br>
					1、婚姻状况： 离异<br>
					2、身体状况： 一般<br>
					3、工作性质和工作单位： 无<br>
					三、实际收入情况： 封铜昌无劳保收入，儿子、儿媳妇均无业，无赡养能力。    <br>        
					四、赡（抚）养情况：  封铜昌与魏秀珍离婚有一子封奇安已婚，    儿子、儿媳周凤无业，无赡养能力。<br>                                                          
					五、综合困难情况：  封铜昌曾因触犯法律而坐牢，2008年2月刑满释放，劳动年龄段因有前科找不到工作，现无退休金无收入，同时其儿子、儿媳妇无业，无赡养能力，生活困难.
				</p>
			</div>
		</div>
		<div class="card" v-if="video" style="width:400px;hieht:320px;position: absolute;right: 570px;top: 260px;">
			<video src="../assets/test.mp4" class="card-img-top" style="object-fit:fill;" controls="controls">
				您的浏览器不支持 video 标签。
			</video>
>>>>>>> zhou
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
<<<<<<< HEAD
				addShow: true
=======
				video:false
>>>>>>> zhou
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
<<<<<<< HEAD
				
=======
			},
			c_video(){
				if(this.video){
					this.video=false;
				}else{
					this.video=true;
				}
>>>>>>> zhou
			}
		},
		mounted(){
			let vm = this;
			vm.owner = vm.$store.state.owner;
			if(vm.$store.state.building=='18#' && vm.$store.state.roomInfo.roomId==3108 ||
			vm.$store.state.building=='15#' && vm.$store.state.roomInfo.roomId==604 ||
			vm.$store.state.building=='17#' && vm.$store.state.roomInfo.roomId==2502 ||
			vm.$store.state.building=='16#' && vm.$store.state.roomInfo.roomId==306){
				vm.tip=true;
			}else{
				vm.tip=false;
			}
			
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
			});

			if(!this.$store.state.detailsShow){
				this.video=false;
			}
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