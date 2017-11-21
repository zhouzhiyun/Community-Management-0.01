
<template>
	<h2 @click="click">LOGIN</h2>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		methods: {
			click(){
				 this.$events.emit('hello', {id: 1});
			}
		}
	}
</script>

<style scoped>
</style>