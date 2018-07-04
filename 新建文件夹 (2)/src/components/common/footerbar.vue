<template>
  
 	<footer>
 		<ul>
 			<router-link tag="li" to="/movie">
        
 				<i class="iconfont icon-color"></i>
 				<p>电影</p>
        
 			</router-link>
 			<router-link tag="li" to="/cinema">
        
        <i class="iconfont icon-color"></i>
        <p>影院</p>
        
      </router-link>
      <router-link tag="li" to="/login">
              
              <i class="iconfont icon-color"></i>
              <p>我的</p>
              
        </router-link>
 		</ul>
 	</footer>
    
  
</template>

<script>

</script>

<style scoped>

	  ul{
      display:flex;
      list-style:none;
      height: 50px;
      background-color: #ccc;
      
  }
      li{
        float:left;
        flex:1;
        text-align:center;
        

      }

	footer{
		position:fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height:50px;
	}
	
</style>