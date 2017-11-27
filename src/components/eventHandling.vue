
<template>
	<div id="event">
		<div class="card w-100 h-100">
            <ul class="nav nav-tabs  nav-justified" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link  active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">出租到期</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" >独居老人探访</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#profile" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">探访时间表</a>                            
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle"  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">偷盗案件处理</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#contact" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">案件登记</a>                            
                        <a class="dropdown-item" href="#" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">案件处理</a>                            
                        <a class="dropdown-item" href="#dataStatistics" id="data-statistics"  data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">案件统计</a>                            
                    </div>
                </li>
            </ul>
            <div class="card-body">                
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <table class="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">楼栋</th>
                                    <th scope="col">单元</th>
                                    <th scope="col">房号</th>
                                    <th scope="col">姓名</th>
                                    <th scope="col">身份证</th>
                                    
                                    <th scope="col">电话</th>
                                    <th scope="col">出租截止日期</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(older,index) in olders">
                                    <td>{{older.building}}</td>
                                    <td>{{older.unit}}</td>
                                    <td>{{older.roomNumber}}</td>
                                    <td>{{older.name}}</td>
                                    <td>{{older.IDCard}}</td>
                                  
                                    <td>{{older.phone}}</td>
                                    <td>
                                        {{older.date}}
                                    </td>
                                    
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <table class="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">楼栋</th>
                                    <th scope="col">单元</th>
                                    <th scope="col">房号</th>
                                    <th scope="col">姓名</th>
                                    <th scope="col">身份证</th>
                                    <th scope="col">年龄</th>
                                    <th scope="col">电话</th>
                                    <th scope="col">预约时间</th>
                                    <th scope="col">是否探访</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(older,index) in olders">
                                    <td>{{older.building}}</td>
                                    <td>{{older.unit}}</td>
                                    <td>{{older.roomNumber}}</td>
                                    <td>{{older.name}}</td>
                                    <td>{{older.IDCard}}</td>
                                    <td>{{older.old}}</td>
                                    <td>{{older.phone}}</td>
                                    <td>
                                        <el-date-picker  v-model="older.date" editable type="date">
                                        </el-date-picker>
                                    </td>
                                    <td>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="radio" v-model="older.visited" @click="deal(index)" value="true"> 是
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="radio" v-model="older.visited" value="false"> 否
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <form class="row">
                            <div class="col-6">
                                <div>
                                    <label>案件登记号</label>
                                    <input class="recordForm" type="text" v-model="event.number"> 
                                </div>
                                 <div class="my-2">
                                    <label>小区</label>
                                    <select class="recordForm" v-model="event.village">
                                        <option value="燕升园">燕升园</option>
                                    </select>
                                </div>
                                <div>
                                    <label>楼栋</label>
                                    <select class="recordForm" v-model="event.building">
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                    </select>
                                </div>
                                <div>
                                    <label>单元</label>
                                    <select class="recordForm" v-model="event.unit">
                                        <option value="一单元">一单元</option>
                                    </select>
                                </div>
                                <div>
                                    <label>房号</label>
                                    <input class="recordForm" type="text" v-model="event.roomNumber">
                                </div>                                                               
                            </div>
                            <div class="col-6">
                                <div>
                                    <label>事件内容</label>
                                    <textarea rows="1"  class="recordForm" v-model="event.content"></textarea>
                                </div>
                                <div>
                                    <label>发生时间</label>
                                    <input class="recordForm" type="datetime" v-model="event.date"> 
                                </div>
                                 <div>
                                    <label>当事人姓名</label>
                                    <input class="recordForm" type="text" v-model="event.partyname"> 
                                </div>
                                 <div>
                                    <label>当事人联系电话</label>
                                    <input class="recordForm" type="text" v-model="event.partynumber"> 
                                </div>
                                 <div>
                                    <label>报告人姓名</label>
                                    <input class="recordForm" type="text" v-model="event.reportname"> 
                                </div>
                                 <div>
                                    <label>报告人联系电话</label>
                                    <input class="recordForm" type="text" v-model="event.reportnumber"> 
                                </div>
                                 <div>
                                    <label>受理登记人</label>
                                    <input class="recordForm" type="text" v-model="event.resname"> 
                                </div>
                            </div>
                            <div class="col-12 text-center my-2">
                                <button type="button" class="btn btn-secondary" @click="cancel">取消</button>
                                <button type="button" class="btn btn-warning" @click="save">保存</button>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="dataStatistics" role="tabpanel" aria-labelledby="data-statistics">
                        <table class="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">案件登记号</th>
                                    <th scope="col">楼栋</th>
                                    <th scope="col">单元</th>
                                    <th scope="col">房号</th>
                                    <th scope="col">当事人</th>
                                    <th scope="col">电话</th>
                                    <th scope="col">事件内容</th>
                                    <th scope="col">受理人</th>
                                    <th scope="col">是否处理</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(events,index) in eventArr">
                                    <td>{{events.number}}</td>
                                    <td>{{events.building}}</td>
                                    <td>{{events.unit}}</td>
                                    <td>{{events.roomId}}</td>
                                    <td>{{events.partyname}}</td>
                                    <td>{{events.partynumber}}</td>
                                    <td>{{events.content}}</td>
                                    <td>{{events.resname}}</td>                                    
                                    <td>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="radio" v-model="events.deal"  value="true"> 是
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="radio" v-model="events.deal" value="false"> 否
                                            </label>
                                        </div>
                                    </td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
            <div class="card-footer bg-transparent text-right">
                <button type="button" class="close" aria-label="Close" @click="cancel">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>           
        </div>        
	</div>
</template>

<script>
    import axios from 'axios';
	export default {
		data(){
			return {
                date:"",
                olders:[
                    {
                        building:15,
                        unit:1,
                        roomNumber:201,
                        name:"王苏新",
                        IDCard:"320113193567909083",
                        old:82,
                        phone:'12345678909',
                        date:"",
                        visited:false
                    },
                    {
                        building:16,
                        unit:1,
                        roomNumber:204,
                        name:"王玉文",
                        IDCard:"320113193567909083",
                        old:75,
                        phone:'12345678909',
                        date:"",
                        visited:false
                    },
                    {
                        building:17,
                        unit:1,
                        roomNumber:302,
                        name:"刘宝山",
                        IDCard:"320113193567909083",
                        old:84,
                        phone:'12345678909',
                        date:"",
                        visited:false
                    },
                    {
                        building:18,
                        unit:1,
                        roomNumber:602,
                        name:"徐桂仁",
                        IDCard:"320113193567909083",
                        old:85,
                        phone:'12345678909',
                        date:"",
                        visited:false
                    }
                ],
                event:{
                    number:"",
                    village:"燕升园",
                    building:"",
                    unit:"",
                    roomId:"",
                    content:"",
                    date:"",
                    partyname:"",//当事人
                    partynumber:"",
                    reportname:"",//报告人
                    reportnumber:"",
                    resname:"",//受理人,
                    deal:false
                },
                eventArr:[]
                
			}
		},
		methods: { 
            initEvent(){
                this.event={
                    number:"",
                    village:"燕升园",
                    building:"",
                    unit:"",
                    roomId:"",
                    content:"",
                    date:"",
                    partyname:"",
                    partynumber:"",
                    reportname:"",
                    reportnumber:"",
                    resname:""
                }
            },
            cancel(){
                this.$store.commit('eventHandHide')
                this.initEvent();
            },
            save(){
                let vm=this;
                if(vm.event.number==""){
                    alert("请输入案件登记号");
                    return;
                }
                vm.eventArr.push(vm.event);
                vm.initEvent();
                vm.$store.commit('eventHandHide') 
                axios.post('/saveEvent',{
                    event:vm.eventArr
                }).then(function(req){
                    
                }).catch(function(err){
                    console.log(err);
                });
                     
            },
            deal(len){
                let vm=this;
                vm.olders.splice(len,1);
                vm.$events.emit('delEvent',len);
            }      
			
		},
        created(){
            
        },
		mounted () {
            var dt=new Date();
            var vm=this;
            vm.date=dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();
            for(var i in vm.olders){
                vm.olders[i].date=vm.date;
            }  
            
            vm.$events.emit('visited',vm.olders);
            axios.post("/events").then(function(req){
                vm.eventArr=JSON.parse(JSON.stringify(req.data.event)).event;                
            }).catch(function(err){
                console.log(err);
            })
        }
			
	}
</script>

<style scoped>
#event{
    width:840px;
    height:450px;
    position:absolute;
    top:100px;
    right:10px;
    overflow:auto;
}
.recordForm{
    appearance:none; 
    border:none;   
    border-bottom:1px solid #bdbdbd;
    width:60%;
    font-size:14px;    
}
label{
    width:37%;
    font-size:14px;
}
</style>