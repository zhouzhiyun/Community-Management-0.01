<template>
  <div>
      <div class="card position-absolute" style="width:800px; height:500px; margin:auto;top:0;right:30px;bottom:0;overflow-y: scroll;">
            <div>
                <h5  style="text-align:center;padding-top: 20px;">用户管理</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: absolute;top: 5px;right: 10px;">
                    <span aria-hidden="true" @click="close">&times;</span>
                </button>
            </div>
            <table class="table" style="margin-top:">
                <thead>
                    <tr>
                    <th scope="col">姓名</th>
                    <th scope="col">用户名</th>
                    <th scope="col">密码</th>
                    <th scope="col">权限</th>
                    <th scope="col">管理范围</th>
                    <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(info, index) in userInfo" class="editInfo">
                        <td><input readonly="true" type="text" v-model="info.name"></td>
                        <td><input readonly="true" type="text" v-model="info.username"></td>
                        <td><input readonly="true" type="password" v-model="info.passworld"></td>
                        <td>
                            <select disabled="true" v-model="info.permissions">
                                <option value="1">一级</option>
                                <option value="2">二级</option>
                                <option value="3">三级</option>
                            </select>
                        </td>
                        <td class="d-flex flex-row">
                            <el-select v-model="info.area" disabled class="area" multiple placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <span @click="edit(index)"><b style="color:blue;">编辑</b></span> /
                            <span @click="save(index)"><b style="color:green;">保存</b></span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="7" style="text-align:center"><b style="color:green;">添加</b></td>
                    </tr>
                </tbody>
            </table>


                
      </div>
    
  </div>
</template>
<script>
import $ from "jquery"
export default {
  data(){
      return {
          userInfo: [],
          options:[
              {label:"整个社区",value:"0"},
              {label:"一栋",value:"1"},
              {label:"二栋",value:"2"},
              {label:"三栋",value:"3"},
              {label:"四栋",value:"4"},
              {label:"五栋",value:"5"},
              {label:"六栋",value:"6"},
              {label:"七栋",value:"7"},
              {label:"八栋",value:"8"},
              {label:"九栋",value:"9"},
              {label:"十栋",value:"10"},
              {label:"十一栋",value:"11"},
              {label:"十二栋",value:"12"},
              {label:"十三栋",value:"13"},
              {label:"十四栋",value:"14"},
              {label:"十五栋",value:"15"},
              {label:"十六栋",value:"16"},
              {label:"十七栋",value:"17"},
              {label:"十八栋",value:"18"}
          ]
      }
  },
  methods: {
      edit(index){
          $('.editInfo').eq(index).children('td').children('input').attr({readonly: false});
          $('.editInfo').eq(index).children('td').children('select').attr({disabled: false});
          $('.area').eq(index).children('div').children('input').removeAttr("disabled")
      },
      save(index){
          $('.editInfo').eq(index).children('td').children('input').attr({readonly: true})
          $('.editInfo').eq(index).children('td').children('select').attr({disabled: true})
          $('.area').eq(index).children('div').children('input').attr({disabled: "true"})
      },
      close(){
          this.$store.commit('usermanageShow');
      }
  },
  mounted () {
    let vm = this;
    $.ajax({
        method: 'POST', 
        url: '/getUserInfo',
        dataType: 'json',
        async: true,
        success: function(res){
            vm.userInfo = res;
        },
        error: function(err){
            console.log(err)
        }
    })
    }
  }
</script>
<style scoped>
    b{
        cursor: pointer;
        
    }
    input{
        width: 95px;
        border: none;
        outline: none;
    }
    select{
        widows: 50px;
        border: none;
        outline: none;
    }
   tr{
       height: 50px;
   }
</style>

