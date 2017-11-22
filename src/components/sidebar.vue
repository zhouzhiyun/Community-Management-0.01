<template>
    <div class="sidebar fixed-top h-100 bg-dark" :class="{'sidebar-short':flag}">
        <nav class="navbar navbar-dark ">
            <button class="navbar-toggler btn-sm" type="button" @click="show">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
                
        <ul class="navbar-nav flex-column navbar-dark bg-dark">
            <li class="nav-item active">
                <a class="nav-link text-white" href="#">
                    <i class="material-icons">&#xE254;</i>
                    <span>信息录入</span>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                    <i class="material-icons">&#xE1AB;</i>
                    <span>统计分析</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">
                    <i class="material-icons">&#xE8CF;</i>
                    <span>事件处理</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">
                    <i class="material-icons">&#xE04B;</i>
                    <span>视频通话</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#">
                    <i class="material-icons">&#xE8F7;</i>
                    <span>行政事务</span>
                </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                    <i class="material-icons">&#xE851;</i>
                    <span>用户管理</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
	
	export default {
		data(){
			return {
                short:'sidebar-short',
                flag:false,
                dis: false
			}
		},
		methods: {
            show(){
                if(this.flag){
                    this.flag=false;
                }else{
                    this.flag=true;
                }
                
            }
		},
		mounted(){		
		
		},
		components: {
		}
	}
	
</script>

<style scoped>
.sidebar{
    width:200px;
    transition:all .5s; 
}
.sidebar-short{
    width:80px;
    transition:all .5s;
}
.sidebar-short a>span{
    display:none;
}
ul li{
    height:40px;
    line-height:40px;
    overflow:hidden;
}
a.nav-link{
    font-size:14px;
}
a.nav-link:hover{
    color:rgba(255,255,255,0.8)!important;
}
a.nav-link i{
    font-size:14px;
    display:inline-block;
    width:60px;
    text-align:center;
}
</style>