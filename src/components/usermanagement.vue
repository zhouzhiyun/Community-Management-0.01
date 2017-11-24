<template>
  <div>
      <div class="card position-absolute" style="width:800px; height:500px; margin:auto;top:0;right:30px;bottom:0;overflow-y: scroll;">
            <table class="table">
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
                            <el-select v-model="area" class="area" disabled multiple placeholder="请选择">
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
          options: [
              {
                  value: "1",
                  label: "全部区域"
              },{
                  value: "2",
                  label: "1#"
              },{
                  value: "3",
                  label: "2#"
              },{
                  value: "4",
                  label: "3#"
              },{
                  value: "5",
                  label: "4#"
              },{
                  value: "6",
                  label: "5#"
              },{
                  value: "7",
                  label: "6#"
              },{
                  value: "8",
                  label: "7#"
              },{
                  value: "9",
                  label: "8#"
              },{
                  value: "10",
                  label: "9#"
              },{
                  value: "11",
                  label: "10#"
              },{
                  value: "12",
                  label: "11#"
              },{
                  value: "13",
                  label: "12#"
              },{
                  value: "14",
                  label: "13#"
              },{
                  value: "15",
                  label: "14#"
              },{
                  value: "16",
                  label: "15#"
              },{
                  value: "17",
                  label: "16#"
              },{
                  value: "18",
                  label: "17#"
              },{
                  value: "19",
                  label: "18#"
              },
          ],
          area:[]
      }
  },
  methods: {
      edit(index){
          $('.editInfo').eq(index).children('td').children('input').attr({readonly: false})
          $('.editInfo').eq(index).children('td').children('select').attr({disabled: false})
          $('.area').eq(index).children('div').children('input').removeAttr("disabled");
      },
      save(index){
          $('.editInfo').eq(index).children('td').children('input').attr({readonly: true})
          $('.editInfo').eq(index).children('td').children('select').attr({disabled: true})
          $('.area').eq(index).children('div').children('input').attr({disabled:"true"});
          
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
            console.log(res)
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

