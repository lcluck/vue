<template>
	<div>
	<ul class="one">
       
         <router-link tag="li" to="">大连</router-link>
         <router-link tag="li" to="/movie/nowplaying" activeClass="active">正在热映</router-link>	
         <router-link tag="li" to="/movie/commingsoon" activeClass="active">即将上映</router-link>
         <router-link tag="li" to="/search"><i class="iconfont icon-search"></i></router-link>
     	 
       </ul>
	<router-view></router-view>
	</div>
</template>

<script type="text/javascript">

</script>



<style type="text/css"  scoped>
	
	ul{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #ccc;
		position: fixed;
		top:50px;
		background-color:#fff;
	}
	li{
		float: left;
		line-height: 50px;
		height: 50px;
		width: 25%;
		text-align: center;
	}
	.active{
		border-bottom: 2px solid #f60;
	}
	
</style>