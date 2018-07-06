<template>
	<div>
		<ul class="menuBar">      
	        <li>大连</li>
	        <li> <a href="/movie/nowplaying">正在热映</a></li>
	        <li> <a href="/movie/commingsoon">即将上映</a></li>
	     	<li><a href="/search"><i class="iconfont icon-search"></i></a></li>
       </ul>
		<ul class="introduce">
			<li v-for="data in datalist" @click="handleClick(data.id)" :key="data.id">
				<img :src="data.img">
				<div class="evaluation">
					<h3>{{data.nm}}</h3>
					<p class="first">观众评<span>{{data.sc}}</span></p>
					<p class="second">主演：{{data.star}}</p>
					<p class="third">{{data.showInfo}}</p>
				</div>
				<div class="buy">
					<button>购票</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
import kerwinrouter from "../router"; //默认找的是router 文件夹 下的index.js 
	export default{

		data(){
			return {
				datalist:[],
			}
		},
		
		mounted(){

			axios.get("/ajax/movieOnInfoList?token=").then(res=>{
				console.log(res.data.coming);
				this.datalist =  res.data.movieList;

				for(var i = 0 ;i<this.datalist.length;i++){

					this.datalist[i].img = this.datalist[i].img.replace("w.h","128.180")
				}	
			})
		},

		methods:{
			handleClick(id){
				console.log(id);
				kerwinrouter.push(`/movieBuy/${id}`) ; 
			}
		}
	};
</script>



<style type="text/css"  scoped>
	.menuBar{
		width: 100%;
		height: 50px;
	}
	.menuBar li{
		width: 25%;
		float: left;
		line-height: 50px;
		text-align: center;
	}
	.introduce{
		width: 100%;
		overflow: hidden;
		padding:10px 0;
	}
	.introduce li{
		width: 100%;
		height: 90px;
		padding: 12px 5px 12px 15px;
		border-top: 1px solid #666;
	}	
	.introduce li img{
		float: left;
		height: 90px;
	}
	.introduce .evaluation{
		width: 50%;
		float: left;
		height:85px;
		text-indent: 15px;
		
	}	
	.introduce .evaluation h3{
		overflow: hidden;
		width:80%;
		text-overflow:ellipsis;
		white-space: nowrap;
		height:30px;
		font-size: 17px;
	}
	.introduce .evaluation .first{
		height:25px;
		font-size: 13px;
    	color: #666;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
	}
	.introduce .evaluation .first span{
		color: #f60;
		font-size: 20px;
	}
	.introduce .evaluation .second{
		height:15px;
		font-size: 13px;
    	color: #666;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
	}
	.introduce .evaluation .third{
		height:15px;
		font-size: 13px;
    	color: #666;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
	}

	.buy{
		float:right;
		height: 90px;
		line-height: 90px;
		width: 20%;
		text-align: center;
	}
</style>