
<template>
<div id="recorded" v-if="disp">
	<div class="card">
        <div class="card-body">
            <h6 class="card-title">房屋信息录入</h6>
            <form class="row">
                <div class="col-4">
                    <p>房屋信息</p>
                    <div>
                        <label>社区</label>
                        <select class="recordForm" v-model="houseInfo.community">
                            <option value="山水园社区">山水园</option>
                        </select>
                    </div>
                    <div>
                        <label>小区</label>
                        <select class="recordForm" v-model="houseInfo.village">
                            <option value="燕升园">燕升园</option>
                        </select>
                    </div>
                    <div>
                        <label>楼栋</label>
                        <select class="recordForm" v-model="houseInfo.building">
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                        </select>
                    </div>
                    <div>
                        <label>单元</label>
                        <select class="recordForm" v-model="houseInfo.unit">
                            <option value="一单元">一单元</option>
                        </select>
                    </div>
                    <div>
                        <label>房号</label>
                        <input class="recordForm" type="text" v-model="houseInfo.roomNumber">
                    </div>
                    <div>
                        <label>房屋状态</label>
                        <select class="recordForm" v-model="houseInfo.type">
                            <option value="&#916;">出租房</option>
                            <option value="&#927;">自住房</option>
                            <option value="&#10004;">装修房</option>
                            <option value="&#9734;">未拿房</option>
                        </select>
                    </div>
                </div>
                <div class="col-8 row">
                    
                    <div class="col-6">
                        <p>房主信息</p>                       
                        <div>
                            <label>房主姓名</label>
                            <input class="recordForm" type="text" v-model="ownerInfo.name">
                        </div>
                        <div>
                            <label>性别</label>
                            <input class="recordForm" type="text" v-model="ownerInfo.sex">
                        </div>
                        <div>
                            <label>民族</label>
                            <input class="recordForm" type="text" v-model="ownerInfo.nation">
                        </div>
                        <div>
                            <label>户籍</label>
                            <input class="recordForm" type="text" v-model="ownerInfo.household">
                        </div>
                        <div>
                            <label>身份证号码</label>
                            <input class="recordForm" type="text" v-model="ownerInfo.IDCard">
                        </div>
                        <div>
                            <label>联系电话</label>
                            <input class="recordForm" type="text" v-model="ownerInfo.phone">
                        </div>
                    </div>
                    <div class="col-6">
                        <p>&nbsp;</p>
                        <div>
                            <label>婚姻状态</label>
                            <select class="recordForm" v-model="ownerInfo.marriage">
                                <option value="已婚">已婚</option>
                                <option value="未婚">未婚</option>
                                <option value="离异">离异</option>
                            </select>
                        </div>
                        <div>
                            <label>户籍标志</label>
                            <select class="recordForm" v-model="ownerInfo.householdSign">
                                <option value="非户籍">非户籍</option>
                                <option value="户籍">户籍</option>
                            </select>
                        </div>
                        <div>
                            <label>政治面貌</label>
                            <select class="recordForm" v-model="ownerInfo.politicalStatus">
                                <option value="党员">党员</option>
                                <option value="团员">团员</option>
                                <option value="群众">群众</option>
                            </select>
                        </div>
                        <div>
                            <label>就业现状</label>
                            <select class="recordForm" v-model="ownerInfo.employment">
                                <option value="在职">在职</option>
                                <option value="在读">在读</option>
                                <option value="无业">无业</option>
                                <option value="退休">退休</option>
                                <option value="自由职业">自由职业</option>
                                <option value="个体">个体</option>
                            </select>
                        </div>
                        <div>
                            <label>是否独居</label>
                            <select class="recordForm" v-model="ownerInfo.livingAlone">
                                <option value="true">是</option>
                                <option value="false">否</option>
                            </select>
                        </div>
                        <div>
                            <label>志愿者</label>
                            <select class="recordForm" v-model="ownerInfo.volunteer">
                                <option value="true">是</option>
                                <option value="false">否</option>
                            </select>
                        </div>     
                    </div>      
                </div>
                <div class="col-4">
                    <div class="my-1">
                        <label class="custom-file">
                            <input type="file" id="file2" class="custom-file-input" :value="file" >
                            <span class="custom-file-control ">选择文件</span>
                        </label>
                    </div>
                    <div>
                        <!--文件展示区-->
                        <!--<button type="button" class="btn btn-primary btn-person"> 
                          
                            <span class=" mx-2" aria-hidden="true ">&times;</span>
                        </button>-->
                    </div>
                </div>
                <div class="col-8">
                    <div class="my-3">
                        <button type="button" class="btn btn-danger" @click="tanentFlag=true">新增房客</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary btn-person" @click="delTenant(index)" v-for="(tenantObj,index) in tenantArr"> 
                            {{tenantObj.name}} 
                            <span class=" mx-2" aria-hidden="true ">&times;</span>
                        </button>
                    </div>
                </div>
                <div class="col-12 text-center my-4">
                    <button type="button" class="btn btn-secondary" @click="cancel">取消</button>
                    <button type="button" class="btn btn-success" @click="add">保存</button>
                </div>
            </form>
        </div>
    </div>
    <div class="card tanent" v-if="tanentFlag">
        <div class="card-body">
            <form class="row">
                <div class="col-7">
                    <p>房客信息</p>
                    <div>
                        <label>房客姓名</label>
                        <input class="recordForm" type="text" v-model="tenant.name">
                    </div>
                    <div>
                        <label>与户主关系</label>
                        <input class="recordForm" type="text" v-model="tenant.relation">
                    </div>
                    <div>
                        <label>性别</label>
                        <input class="recordForm" type="text" v-model="tenant.sex">
                    </div>
                    <div>
                        <label>民族</label>
                        <input class="recordForm" type="text" v-model="tenant.nation">
                    </div>
                    <div>
                        <label>户籍</label>
                        <input class="recordForm" type="text" v-model="tenant.houseHold">
                    </div>
                    <div>
                        <label>身份证号码</label>
                        <input class="recordForm" type="text" v-model="tenant.IDCard">
                    </div>
                    <div>
                        <label>联系电话</label>
                        <input class="recordForm" type="text" v-model="tenant.phone">
                    </div>
                    <div>
                        <label>租赁截止日期</label>
                        <input class="recordForm" type="date" v-model="tenant.leaseDeadline">                        
                    </div>                    
                </div>
                <div class="col-5">
                    <p>&nbsp;</p>
                    <div>
                        <label>户籍标志</label>
                        <select class="recordForm" v-model="tenant.householdSign">
                            <option value="非户籍">非户籍</option>
                            <option value="户籍">户籍</option>
                        </select>
                    </div>
                    <div>
                        <label>政治面貌</label>
                        <select class="recordForm" v-model="tenant.politicalStatus">
                            <option value="党员">党员</option>
                            <option value="团员">团员</option>
                            <option value="群众">群众</option>
                        </select>
                    </div>
                    <div>
                        <label>就业现状</label>
                        <select class="recordForm" v-model="tenant.employment">
                            <option value="在职">在职</option>
                            <option value="在读">在读</option>
                            <option value="无业">无业</option>
                            <option value="退休">退休</option>
                            <option value="自由职业">自由职业</option>
                            <option value="个体">个体</option>
                        </select>
                    </div>
                    <div>
                        <label>是否独居</label>
                        <select class="recordForm" v-model="tenant.livingAlone">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>
                    <div>
                        <label>志愿者</label>
                        <select class="recordForm" v-model="tenant.volunteer">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 text-center my-2">
                    <button type="button" class="btn btn-secondary" @click="cancelTenant">取消</button>
                    <button type="button" class="btn btn-success" @click="addTenant">添加</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios';
	export default {
		data(){
			return {
                disp:false,
                houseInfo:{//房屋
                    community:"山水园社区",
                    village:"燕升园",
                    building:"",
                    unit:"",
                    roomNumber:"",
                    type:""
                },
                ownerInfo:{//房主
                    name:"",
                    sex:"",
                    nation:"",//民族
                    household:"",//户籍
                    IDCard:"",
                    phone:"",
                    marriage:"",//婚姻状态
                    householdSign:"",//户籍标志
                    politicalStatus:"",//政治面貌
                    employment:"",//就业现状
                    livingAlone:"",//是否独居
                    volunteer:""//志愿者
                },
                tenant:{//房客
                    name: "",
                    relation: "",
                    sex: "",
                    nation: "",
                    houseHold: "",
                    IDcard: "",
                    phone: "",
                    leaseDeadline:"",//租赁截止日期
                    marriage: "",
                    politicalStatus: "",
                    employment: "",
                    volunteer: "",
                    livingAlone: ""
                },
                file:"",
                tenantArr:[],
                tanentFlag:false,
                db:[]
			}
		},
		methods: {
            initHouse(){
                this.houseInfo={//房屋
                    community:"山水园社区",
                    village:"燕升园",
                    building:"",
                    unit:"",
                    roomNumber:"",
                    type:""
                };
                this.ownerInfo={//房主
                    name:"",
                    sex:"",
                    nation:"",//民族
                    household:"",//户籍
                    IDCard:"",
                    phone:"",
                    marriage:"",//婚姻状态
                    householdSign:"",//户籍标志
                    politicalStatus:"",//政治面貌
                    employment:"",//就业现状
                    livingAlone:"",//是否独居
                    volunteer:""//志愿者
                };
                this.tenantArr=[];
                this.initTenant();
            },
            initTenant(){
                this.tenant={
                    name: "",
                    relation: "",
                    sex: "",
                    nation: "",
                    houseHold: "",
                    IDcard: "",
                    phone: "",
                    leaseDeadline:"",//租赁截止日期
                    marriage: "",
                    politicalStatus: "",
                    employment: "",
                    volunteer: "",
                    livingAlone: ""
                };
            },            
            add(){
                let vm=this;
                var flag=true;
                //保存所有录入信息
                vm.disp=false;
                for(var i in vm.db){
                    if(vm.houseInfo.building == vm.db[i].roomInfo.building && 
                    vm.houseInfo.roomNumber == vm.db[i].roomInfo.roomId ){
                       // vm.db[i].tenants[0].tenantInfo.concat(vm.tenantArr);
                        for(var j in vm.tenantArr){
                             vm.db[i].tenants[0].tenantInfo.push(vm.tenantArr[j]);
                        }
                        flag=false;
                    }
                }
                if(flag){
                   vm.db.push({
                       roomInfo:vm.houseInfo,
                       owner:vm.ownerInfo,
                       tenants:vm.tenant
                   }) ;                    
                }
                
                $.ajax({
                    url:'/entering',
                    method:'post',
                    contentType: 'application/json',
                    data: JSON.stringify(vm.db),
                    success:function(val){
                       
                    }
                });               
                vm.initHouse();
            },
            cancel(){//取消
                let vm=this;
                vm.disp=false;
                this.initHouse();
            },
            addTenant(){
                //添加房客
                let vm=this;
                vm.tanentFlag=false;
                if(vm.tenantArr.length>=8){

                }else{
                    vm.tenantArr.push(vm.tenant);
                }
                this.initTenant();
            },
            cancelTenant(){
                //取消房客信息
                this.tanentFlag=false;
                this.initTenant();                
            },
            delTenant(len){
                this.tenantArr.splice(len,1);
            }
           
		},
		mounted () {
            let vm=this;
            vm.$events.on('recorded',function(v){
                vm.disp=true; 
            });            
            axios.post('/getDB').then(function(req){
                vm.db=req.data;
<<<<<<< HEAD
                // console.log('-------------------------');
                // console.log(req.data);
=======
>>>>>>> 17e6afb0fd203cf00f56c3f425e7b1ada48183e2
            }).catch(function (error) {
                console.log(error);
            });
		}
	}
</script>

<style scoped>
#recorded{
    width:750px;
    height:450px;
    position:absolute;
    top:100px;
    right:10px;
    overflow:auto;
}
label{
    width:37%;
    font-size:14px;
}
.recordForm{
    appearance:none; 
    border:none;   
    border-bottom:1px solid #bdbdbd;
    width:60%;
    font-size:14px;    
}

.tanent{
    width:500px;
    height:330px;
    position:absolute;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
.btn-person:hover span{
    display:inline;
}

</style>