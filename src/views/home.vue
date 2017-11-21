
<template>
	<div>
		<my-sidebar></my-sidebar>
		<my-search></my-search>
		<my-details></my-details>
	</div>
</template>

<script>
	import mySidebar from '../components/sidebar.vue';
	import mySearch from '../components/search.vue';
	import myDetails from '../components/details.vue';
	export default {
		data(){
			return {
			
			}
		},
		methods: {
		},
		mounted(){
		
		
		},
		components: {
			mySidebar,
			mySearch,
			myDetails
		}
	}
	
</script>

<style scoped>
</style>