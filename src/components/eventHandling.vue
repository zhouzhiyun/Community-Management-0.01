
<template>
	<div id="event" v-if="disp">
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
                            <a class="dropdown-item" href="#"  data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">案件统计</a>                            
                        </div>
                    </li>
                </ul>
            <div class="card-body">                
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        Home
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
                                    <td>{{older.date}}</td>
                                    <td>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="radio" v-model="older.visited" value="true"> 是
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
                        
                    </div>
                </div>
            </div>            
        </div>        
	</div>
</template>

<script>
	export default {
		data(){
			return {
                disp:true,
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
                ]
                
			}
		},
		methods: {            
			
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
            console.log('emit------------------------'); 
            vm.$events.emit('visited',vm.date);      
        }
			
	}
</script>

<style scoped>
#event{
    width:770px;
    height:450px;
    position:absolute;
    top:100px;
    right:10px;
    overflow:auto;
}
</style>