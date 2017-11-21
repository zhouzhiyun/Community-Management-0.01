
<template>
	<div id="details">
		<div class="card" style="width:560px;">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">3305</th>
						<th scope="col">房主姓名</th>
						<th scope="col">周小兰</th>
						<th scope="col">联系电话</th>
						<th scope="col">12345678909</th>
						<th scope="col" rowspan="2">录入者</th>
					</tr>
					<tr>
						<th scope="col">房客姓名</th>
						<th scope="col" colspan="2">身份证号码</th>
						<th scope="col">联系电话</th>
						<th scope="col">租赁截止日期</th>
					</tr>
				</thead>
				<tbody>
					<tr @contextmenu.prevent="menu($event)">
						<td scope="row">1.</td>
						<td colspan="2"></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr @contextmenu.prevent="menu($event)">
						<td scope="row">2.</td>
						<td colspan="2"></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr @contextmenu.prevent="menu($event)">
						<td scope="row">3.</td>
						<td colspan="2"></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr @contextmenu.prevent="menu($event)">
						<td scope="row">4.</td>
						<td colspan="2"></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div class="card-footer bg-transparent">
				<small class="text-muted"><span>△□☆</span></small>	
				<button type="button" class="btn btn-secondary float-right btn-sm mx-2">返回</button>			
				<ul class="pagination float-right" style="margin:0;padding:0;">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE5DC;</span>
							<span class="sr-only">First</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE314;</span>
							<span class="sr-only">Previous</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE315;</span>
							<span class="sr-only">Next</span>
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" class="material-icons">&#xE5DD;</span>
							<span class="sr-only">Last</span>
						</a>
					</li>
				</ul>
				
				
			</div>
		</div>
		<div class="card" v-show="tip" 
		style="width:260px;min-height:200px;position: absolute;right: 600px;top: 0;">起始
		</div>
		<div class="card" style="width:150px;position: absolute;" v-show="menuShow" id="menu" ref="menu">
			<div class="list-group list-group-flush">
				<a class="list-group-item list-group-item-action dropdown-toggle" @click="edit" id="navbarDropdown" 
				role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">编辑</a>
					<div class="dropdown-menu  dropdown-menu-left" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">房屋信息编辑</a>
						<a class="dropdown-item" href="#">房主信息编辑</a>
						<a class="dropdown-item" href="#">房客信息编辑</a>
					</div>
				<a class="list-group-item list-group-item-action">事件处理</a>
				<a class="list-group-item list-group-item-action">历史数据</a>
			</div>
		</div>
	</div>
</template>

<script>
	
	document.oncontextmenu=function(){
		return false;
	}

	export default {
		data(){
			return {
				tip:false,
				menuShow:false
			}
		},
		methods: {
			menu(el){
				var left=el.clientX;
				var top=el.clientY;
				var x=$('body').width();
				var y=$('body').height();
				console.log('x='+x+',y='+y);
				var pos=$('#details').offset();
				if((x-left)<150){
					$('#menu').css({
						left:x-pos.left-150,
						top:top-pos.top
					});
				}else{
					$('#menu').css({
						left:left-pos.left,
						top:top-pos.top
					});
				}
				this.menuShow=true;
			},
			edit(){
				
			},
			getDB(){
				
			}
		},
		mounted(){
			this.menuShow=false;

		},
		watch:{
			menuShow:function(value){
				var vm=this;
				if(value){
					$('body').bind('click',function(){
						vm.menuShow=false;
					})
				}
			}
		},
		components: {
		}
	}
	
</script>

<style scoped>
#details{
	position:absolute;
	right:20px;
	top:100px;
}

</style>