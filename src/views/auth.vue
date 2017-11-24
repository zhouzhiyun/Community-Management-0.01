
<template>
	<div>
		<div id="login" class="position-relative">
			
			<div id="info" class="card position-absolute d-flex flex-column justify-content-around align-items-center">
				<h1 class="text-center">迈皋桥社区综合管理系统</h1>
				<h4 class="text-center">登录</h4>
				<div class="inp d-flex justify-content-center" style="width: 100%;">
					<input class="input" v-model="username" type="text" name="username" id="username" placeholder="请输入用户名">
				</div>
				<div class="inp d-flex justify-content-center" style="width: 100%;">
					<input class="input" v-model="passworld" type="password" name="pwd" id="passworld" placeholder="请输入用密码">
				</div>
				<div class="inp d-flex justify-content-center">
					<input type="text" class="verification" style="padding-left: 7px; margin-right: 3px">
					<span class="verification border border-danger d-inline-block"></span>
				</div>
				<div class="d-flex justify-content-center">
					<button type="submit" class="btn btn-primary btn-lg" @click="login">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
	export default {
		data(){
			return {
				username: '',
				passworld: '',
				userinfo: [],
				log: false
			}
		},
		methods: {
			login(){
				let vm = this;
				vm.userinfo.forEach(function(e){
					if(e.username == vm.username && e.passworld == vm.passworld){
						vm.$router.push('/home');
						vm.$store.commit('recordUserinfo', e);
						vm.log = true;
					}
				});
				if(vm.log == false){
					alert("账号或密码错误");
				}
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
					vm.userinfo = res;
				},
				error: function(err){
					console.log(err)
				}
			})
		}
	}
</script>

<style scoped>
#login{
	width: 100%;
	height: 100%;
}
#info{
	width: 500px;
	height: 400px;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
h1{
	color: red;
}
.inp{
	width: 75%;
	font-size: 16px
}
.input{
	width: 45%;
	padding-left: 7px;
}
.verification{
	width: 30%;
}

</style>