
<template>
	<div>
		<div id="login" class="position-relative">
			
			<div id="info" class="card position-absolute d-flex flex-column justify-content-around align-items-center">
				<h1 class="text-center">迈皋桥社区综合管理系统</h1>
				<h4 class="text-center">登录</h4>
				<div class="inp d-flex justify-content-center" style="width: 100%;">
					<input class="input" type="text" name="username" placeholder="请输入用户名">
				</div>
				<div class="inp d-flex justify-content-center" style="width: 100%;">
					<input class="input" type="passworld" name="pwd" placeholder="请输入用密码">
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
	export default{
		data(){
			return {
			}
		},
		methods: {
			login(){
				 this.$router.push('/home');
			}
		},
		mounted () {
			this.$events.emit('hello' , {id:1})
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