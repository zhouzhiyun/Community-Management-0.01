
<template>
	<router-view></router-view>
</template>

<script>

	import 'bootstrap-material-design';
	import 'material-design-icons/iconfont/material-icons.css'
	import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

	export default{
		data(){
			return {
				
			}
		},
		 mounted() {
		 
			this.$events.on('hello', function(d){
				console.log('-----------hello------------', d);
			});
			
		 }
	}
</script>

<style scoped>
</style>