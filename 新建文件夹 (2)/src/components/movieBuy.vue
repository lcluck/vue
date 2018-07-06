<template>
	<div>
		<div class="evaluation" style="background: black">
			<img :src="datalist.img">
			<div class="right">		
				<p class="name">{{datalist.nm}}</p>			
				<p class="englishName">{{datalist.enm}}</p>
				<p class="score">{{datalist.sc}}<span>({{datalist.snum}}人评)</span></p>
				<p class="type">{{datalist.cat}}</p>
				<p class="time">{{datalist.src}}/{{datalist.dur}}分钟</p>
				<p class="publish">{{datalist.pubDesc}}</p>
			</div>		
		</div>
		<ul class="data">
			<li><a @click>2018-07-05</a></li>
			<li><a @click>2018-07-06</a></li>
			<li><a @click>2018-07-07</a></li>
		</ul>		
		<ul class="city">
			<li><a href="">全城</a></li>
			<li><a href="">品牌</a></li>
			<li><a href="">特色</a></li>
		</ul>
		<ul class="cinema">
			<li v-for="data in datacinema">
				<p class="cinemaName">{{data.nm}}<span>{{data.sellPrice}}元起</span></p>
				<p class="cinemaAddr"><span class="left">{{data.addr}}</span><span class="right">{{data.distance}}</span></p>
				<p class="cinemaPromotion">{{data.promotion.cardPromotionTag}}</p>
				<p class="cinemaTime">近期场次：{{data.showTimes}}</p>
			</li>
		</ul> 
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default{

		data(){
			return {
				datalist:[],
				datacinema:[],
			}
		},
		
		mounted(){
			console.log(this.$route.params.id);//ajax 做请求数据，数据驱动页面更新

			axios.get(`/ajax/detailmovie?movieId=${this.$route.params.id}`).then(res=>{
				this.datalist =  res.data.detailMovie;
				this.datalist.img = this.datalist.img.replace("w.h","148.208");
			}),

			console.log((new Date()).valueOf());

			axios.post(`/ajax/movie?forceUpdate=${(new Date()).valueOf()}`,`movieId=${this.$route.params.id}&day=2018-07-05&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1530773391823&cityId=65`).then(res=>{
				console.log(res.data.coming);
				this.datacinema =  res.data.cinemas;

			})
		},

	};

</script>

<style type="text/css"  scoped>
	*{
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none;
	}
	.evaluation{
		height:150px;
		width: 100%;
		padding: 19px 30px 19px 15px;
	}
	.evaluation img{
		height: 150px;
		width: 110px;
		float: left;
	}
	.evaluation .right{
		height: 150px;
		width: 210px;
		float: right;
	}
	.evaluation p{
	    overflow: hidden;
	    text-overflow: ellipsis;
   		white-space: nowrap;
   		color: #fff;
	}
	.evaluation .right .name{
		font-size: 20px;
	    margin-top: 2px;
	    font-weight: 700;
	}	
	.evaluation .right .englishName{
		margin-top: 10px;
    	font-size: 12px;
    	opacity: .8;
	}	
	.evaluation .right .score{
		font-size: 18px;
    	font-weight: 700;
    	color: #fc0;
    	margin-top: 11px;
	}	
	.evaluation .right .score span{
		margin-top: 10px;
	    font-size: 12px;
	    opacity: .8;
	}
	.evaluation .right .type{
		font-size: 12px;
		opacity: .8;
	}
	.evaluation .right .time{
		font-size: 12px;
		opacity: .8;
	}
	.evaluation .right .publish{
		font-size: 12px;
		opacity: .8;
	}
	.data{
		height:45px;
		width: 100%;
	}
	.data li{
		float: left;
		width: 33%;
		text-align: center;		
	}	
	.data li button{
		width: 100%;
		line-height: 45px;
	}
	.city{
		height:40px;
		width: 100%;
	}
	.city li{
		float: left;
		width: 33%;
		text-align: center;		
	}	
	.city li a{
		line-height: 40px;
	}	
	.cinema li{
		width: 100%;
		height: 116px;
		padding: 13px 15px;
		border-bottom: 1px solid #ddd;
	}
	.cinema .cinemaName{
		height:23px;
		line-height: 23px;
		font-size: 16px;
	}
	.cinema .cinemaName span{
		float: right;
		color: red;
	}
	.cinema .cinemaAddr {
		width: 250px;
	}
	.cinema .cinemaAddr .left{
		width: 200px;
		font-size: 13px;
		overflow: hidden;
	    text-overflow: ellipsis;
   		white-space: nowrap;
	}
	.cinema .cinemaAddr  .right{
		float: right;
	}
	.cinema .cinemaPromotion{
		width: 100%;
		font-size: 13px;
	}	
	.cinema .cinemaTime{
		width: 100%;
		font-size: 13px;
	}

	/*dfas*/
</style>