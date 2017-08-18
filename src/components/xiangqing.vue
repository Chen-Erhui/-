<template>
	<div>
		<top></top>
		<div class="bgpic">
		  <!--<img src="../assets/logo.png"/>-->
		  <img :src="list.result.dataList[0].audioPic"/>
		  <div class="ceng"></div>
		</div>
		<div class="bgpic-content">
			<div class="play">
				<div class="playleft">
					<img :src="list.result.dataList[0].audioPic"/>
					<div class="playpic"></div>
				</div>
				<div class="playright">
					<h1>{{list.result.dataList[0].albumName}}</h1>
					<p>上传者：{{list.result.dataList[0].uploaderName}}</p>
				</div>
			</div>
			<div class="jianjie">
				<p>{{list.result.dataList[0].audioDes}}</p>
			</div>
		</div>
		<div class="program">
			<div class="title">
				<i>|</i>节目
				<span>({{list.result.count}})</span>
			</div>
			<div class="program-lists">
				<div class="program-list" v-for='(item,index) in list.result.dataList'>
					<router-link to="/play">
						<div class="list-left" @click="play(item)">{{item.orderNum}}期：{{item.audioName}}</div>
					</router-link>
					<div class="list-right" @click="play(item)">
						<audio :src="mp3.mp3PlayUrl" controls="controls" preload id="music" hidden></audio>
					</div>
				</div>
			</div>
			
		</div>
		<footer-ad></footer-ad>
	</div>
</template>

<script>
	import footerAd from './footer/footer'
	import top from './top/top2'
	export default{
		data(){
			return{
				i:0,
				mp3:{}
			}
		},
		components:{
			top,
			footerAd
		},
		
		created () {
		    this.$store.dispatch('getlist')
		    var url='http://10.3.157.234:8081/active_play'
		    this.$http.get(url)
		    .then((data)=>{
		    	this.mp3=data.data
		    })
		},
		methods:{
			play(item){
				var audio = document.getElementById('music');
			    if(audio.paused){                 
			        audio.play();//audio.play();// 播放  
			    }
			    else{
			        audio.pause();// 暂停
			    }
				this.$store.dispatch('play', item)
			}
		},
		computed: {
			list:function(){
				return this.$store.state.list
			},
   		}
   		
	}
</script>

<style lang='less' scoped>
@import url("../common/styles/index.less");
.bgpic{
	width: 100%;
	height: 26.66rem;
	overflow: hidden;
	position: relative;
	font-family: "微软雅黑";
	img{
		width:100%;
		filter: blur(20px);
	    -webkit-filter: blur(20px);
	    -moz-filter: blur(20px);
	    -ms-filter: blur(20px);
	}
	.ceng{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.18);
	}
}
.bgpic-content{
	width: 96%;
	height: 17.666rem;
	margin-left: 4%;
	position: absolute;
	top: 4.31rem;
	.jianjie{
			width: 100%;
			height: 9rem;
			margin-top: .6rem;
			p{
				width: 95%;
				padding-right: 5%;
				height: 100%;
				color: white;
				line-height: 1.85rem;
				overflow: scroll;
			}
		}
	.play{
		width: 100%;
		height: 9.194rem;
		position:relative;
		.playleft{
			width: 7.777rem;
			height: 8.083rem;
			margin-top: 1.1rem;
			margin-right: 1.3rem;
			float: left;
			img{
				width: 100%;
				height: 100%;
			}
			.playpic{
				width: 3.333rem;
				height: 3.333rem;
				position: absolute;
				top: 40%;
				left: 8%;
				background: url(http://static.kaolafm.com/kaolafm/m/images/play_b02f321dcbd13df79de665a869baf392.png) no-repeat;
				background-size: 3.333rem;
			}
		}
		.playright{
			width: 10rem;
			height: 6.5365rem;
			float: left;
			h1{
				margin-top: 1.9rem;
				color: #FFFFFF;
				font-size: 1.3rem;
				line-height: 1.7rem;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			p{
				margin-top: 1.8rem;
				height: 1.7rem;
				color: #fff;
				line-height: 1.7rem;
				font-size: 1.2rem;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
}
ul{
	width: 100%;
	height: 120px;
	li{
		width: 100%;
		height: 20px;
	}
}
.program{
	width: 96%;
	margin-left: 4%;
	/*background-color: pink;*/
	margin-top: 1rem;
	.title{
		width: 100%;
		height: 1.416rem;
		font-size: 1.3rem;
		color:#333;
		i{
			display: inline-block;
			width: 1rem;
			color: #f84e4e;
		}
		span{
			color: #f84e4e;
		}
	}
}
.program-lists{
	width: 100%;
	.program-list{
		width: 100%;
		height:3.786rem;
		border-top:1px solid #E7E7E7;
		color:#333;
		.list-left{
			width: 85%;
			height: 100%;
			float: left;
			line-height: 3.786rem;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.list-right{
			width: 15%;
			height: 100%;
			line-height: 3.786rem;
			float: left;
			background: url(http://static.kaolafm.com/kaolafm/m/images/btn_play_faa0b41f408d96b0e733218bc9623285.png) no-repeat;
			background-size: 1.85rem;
			background-position: .8rem 1rem;
		}
	}
}
</style>