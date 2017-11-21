<template>	
	<div id="accordion" role="tablist">
        <div class="card">
            <div class="card-header py-1" role="tab"> 
                           
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="搜索内容">
                    <span class="input-group-addon" data-toggle="collapse" href="#collapse1">
                        <i class="material-icons">search</i>
                    </span>
                </div>           

                <div id="collapse1" class="collapse in" role="tabpanel" data-parent="#accordion">
                    <div class="card-body">
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson 
                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher 
                            vice lomo.
                    </div>
                </div>

            </div>
        </div>	
	</div>	
	
</template>

<script>
	
	export default{
		data(){
			return {
			}
		},
		mounted(){
		
		},
		components: {
			
		}
	}
	
</script>

<style scoped>
	#accordion{
		width:360px;
		position:absolute;
		top:20px; 
		margin:0; 
		right:20px; 
		z-index:9999;
	}
</style>