<template>
<div>
    <div class="card" style="width:340px; height:540px; position:absolute;left: 0;top:0; right: 0; margin: auto;background:white;">
        <h5 style="text-align: center;padding:10px;">新增房客</h5>
        <div>
            <div class="list">
                <label class="ownerinfo" for="name">房客姓名</label>
                <input type="text" id="name" v-model="lodger.name" class="owneript">
            </div>
            <div class="list">
                <label class="ownerinfo" for="sex">性别</label>
                <input type="text" id="sex" v-model="lodger.sex" class="owneript">
            </div>
            <div class="list">
                <label class="ownerinfo" for="ethnic">民族</label>
                <input type="text" id="ethnic" v-model="lodger.nation" class="owneript">
            </div>
            <div class="list">
                <label class="ownerinfo" for="census">户籍地址</label>
                <input type="text" id="census" v-model="lodger.address" class="owneript">
            </div>
            <div class="list">
                <label class="ownerinfo" for="card">身份证号码</label>
                <input type="text" id="card" v-model="lodger.IDcard" class="owneript">
            </div>
            <div class="list">
                <label class="ownerinfo" for="phone">联系电话</label>
                <input type="text" id="phone" v-model="lodger.phone" class="owneript">
            </div>
            <div class="list">
                <label class="ownerinfo" for="phone">截止日期</label>
                <el-date-picker
                    id="date"
                    style="width:150px;"
                    v-model="lodger.deadline"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </div >
            <div class="list">
                <span class="ownerinfo">婚姻状况</span>
                <select id="marital" v-model="lodger.marriage" class="ownersel">
                    <option value="已婚">已婚</option>
                    <option value="未婚">未婚</option>
                    <option value="离异">离异</option>
                </select>
            </div>
            <div class="list">
                <span class="ownerinfo">户籍性质</span>
                <select id="" v-model="lodger.houseHold" class="ownersel">
                    <option value="本地">本地</option>
                    <option value="外地">外地</option>
                </select>
            </div>
            <div class="list">
                <span class="ownerinfo">政治面貌</span>
                <select name="" id="" v-model="lodger.politicalStatus" class="ownersel">
                    <option value="群众">群众</option>
                    <option value="党员">党员</option>
                </select>
            </div>
            <div class="list">
                <span class="ownerinfo">独居老人</span>
                <select name="" id="" v-model="lodger.livingAlone" class="ownersel">
                    <option value="true">是</option>
                    <option value="false">否</option>
                </select>
            </div>
            <div class="list">
                <span class="ownerinfo">志愿者</span>
                <select name="" id="" v-model="lodger.volunteer" class="ownersel">
                    <option value="true">是</option>
                    <option value="false">否</option>
                    
                </select>
            </div>
            <div class="list">
                <span class="ownerinfo">低保户</span>
                <select name="" id="" v-model="lodger.lowsecurity" class="ownersel">
                    <option value="true">是</option>
                    <option value="false">否</option>
                    
                </select>
            </div> 
            <div class="d-flex justify-content-around list">
                <button @click="saveAdd">保存</button>
                <button @click="closeAdd">取消</button>
            </div>
        </div>
        
    </div>
</div>

</template>
<script>
import $ from 'jquery'
export default {
  data(){
      return {
          json: [],
          lodger:{
              name:'',
              sex: '',
              nation: '',
              address:'',
              IDcard: '',
              phone: '',
              marriage: '',
              houseHold: '',
              politicalStatus: '',
              livingAlone: '',
              volunteer: '',
              lowsecurity: '',
              deadline: ''
          }
      }
  },
  methods:{
      saveAdd(){
            let vm = this;
            vm.$store.commit('changeAddTenant');
            vm.$store.state.tenants[0].tenantInfo.push(vm.lodger);
            let building = vm.$store.state.roomInfo.building;
			let roomId = vm.$store.state.roomInfo.roomId;	
            vm.json.forEach(function(e,i){
                if(e.roomInfo.building == building && e.roomInfo.roomId == roomId){
                    e.tenants[0].tenantInfo.push(vm.lodger)
                }
            })
          $.ajax({
            method: 'POST',
            url: '/home',
            contentType: 'application/json',
            data: JSON.stringify(vm.json),
            success(res){
            },
            error(err){
                console.log(err)
            }
          })
      },
      closeAdd(){
          let vm = this;
          vm.$store.commit('changeAddTenant')
      }
  },
  mounted () {
        let vm = this;
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
  }
}
</script>
<style scoped>
.list{
    margin: 5px;
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
#date{
    width: 150px;
}
</style>

