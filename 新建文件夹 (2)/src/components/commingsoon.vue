
<template>
	<div>

		<el-carousel :interval="5000" arrow="always">
		    <el-carousel-item v-for="item in looplist" :key="item">
		      <h4>{{ item }}</h4>
		    </el-carousel-item>
		  </el-carousel>
		
		<ul class="two">
			<li v-for="data in datalist" @click="addRouter(data.id)">
				
				<img :src="data.img">
				<div class="zj">
					<h3>{{data.nm}}</h3>
					<p>点映评{{data.sc}}</p>
					<p><span>{{data.wish}}</span>人想看</p>
					<p>主演:{{data.star}}</p>
					<p>{{data.rt}}上映</p>
					
				</div>
				<div class="goupiao">
					<button>购票</button>
				</div>
			
		</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from "axios";
import router from "../router"
	export default{

		data(){
			return {
				datalist:[],
				looplist:["11111","22222","33333","444444","5555","66666","7777","8888","9999"],

			}
		},
		components:{
			"el-carousel":Swipe,
			"el-carousel-item":SwipeItem
		},
		methods:{

			addRouter(id){

				router.push(`/detail/${id}`);

			}

		},
		
		mounted(){

			
			// http://m.maoyan.com/ajax/mostExpected?ci=65&limit=10&offset=0&token=

			
			

			axios.get("/ajax/comingList?ci=65&token=&limit=10").then(res=>{

				this.datalist =  res.data.coming
				// this.imglist = res.data.coming.img
				for(var i = 0 ;i<this.datalist.length;i++){

					this.datalist[i].img = this.datalist[i].img.replace("w.h","128.180")
					console.log(this.datalist)
				}	
				
			})
			// axios.get("/ajax/mostExpected?ci=65&limit=10&offset=0&token=").then(res=>{
			// 	console.log(res.data.coming.img)
			// 	this.looplist = res.data.coming
			// 	for(var i = 0 ;i<this.looplist.length;i++){

			// 		this.looplist[i].img = this.looplist[i].img.replace("w.h","128.180")
			// 	}	
			// })

}
}
</script>



<style type="text/css"  scoped>
	
	
	.two{
		width: 100%;
		overflow: hidden;
		
	}
	.two li{
		width: 100%;
		height: 180px;
		padding-top: 10px;
	}
	.two h3{
		overflow: hidden;
		width:80%;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.two .zj{
		width: 50%;
		float: left;
		height: 180px;
		text-indent: 15px;
		
	}
	.two .zj p{
		padding-top: 10px;
	}
	.two .zj p span{
		color: #f60;
	}
	.two li img{
		float: left;
		width: 30%;
		height: 180px;

	}
	.goupiao{
		float:left;
		height: 180px;
		line-height: 180px;
		width: 20%;
		text-align: center;
	}
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	    margin-top: 100px;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>