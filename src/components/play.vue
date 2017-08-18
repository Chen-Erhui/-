<template>
	<div class="all">
		<top></top>
		<div class="div_cover">
		  <div class="div_cover_count">
		    <img :src="audiolist.albumPic"/>
		  </div>
		  <div class="cover_shade"></div>
		  <div class="div_cover_detail">
		  	<h1>{{audiolist.audioName}}</h1>
		  	<div class="cover_img">
		  		<img :src="audiolist.albumPic"/>
		  		<div class="play_btn" :class="{'active':playbol}" @click="bofang()">
		  			<audio :src="audiolist.mp3PlayUrl" controls="controls" preload id="activemusic" hidden></audio>
		  		</div>
		  	</div>
		  	<div class="time">
		  		<p class="start">
		  			<i>{{currenttime1}}</i>:<i>{{currenttime2}}</i>
		  		</p>
		  		<p class="end">{{parseInt(audiolist.duration/60000)}}:{{parseInt(audiolist.duration/60000*60-parseInt(audiolist.duration/60000)*60)}}</p>
		  	</div>
		  	<div class="jindu">
		  		<div class="jinduleft"></div>
		  		<div class="jindubtn"></div>
		  		<div class="jinduright"></div>
		  	</div>
		  </div>
		</div>
		<div class="share">
			<div class="share_left">
				<i></i>
				<span>{{audiolist.listenNum}}</span>
			</div>
			<div class="share_right">
				<span class="leftspan">分享至：</span>
				<span class="rightspan">
					<a href="###" class="weibo"></a>
					<a href="###" class="kongjian"></a>
					<a href="###" class="qq"></a>
				</span>
			</div>
		</div>
		<div class="div_special">
			<p>所属专辑</p>
			<div class="div_special_cont">
				<div class="div_sp_cover_left">
					<img :src="audiolist.albumPic"/>
				</div>
				<div class="div_sp_cover_right">
					<p class="p_sp_name">{{audiolist.albumName}}</p>
					<div class="div_author">
						<span class="span_author">
							<span class="span_photo">
								<img :src="audiolist.uploaderImg"/>
							</span>
							<span class="span_name">{{audiolist.uploaderName}}</span>
						</span>
						<div class="div_desc">{{audiolist.audioDes}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="div_siblings">
			<div class="div_siblings_cont_left">
				<a href="###">
					<p>上一期</p>
					<div>上一期的内容名称啦啦啦啊啊啊啊</div>
				</a>
			</div>
			<div class="div_siblings_cont_right">
				<a href="###">
					<p>下一期</p>
					<div>下一期的内容名称哈哈哈哈哈哈</div>
				</a>
			</div>
		</div>
		<footer-ad></footer-ad>
	</div>
</template>

<script>
import http from 'axios'
import top from './top/top2'
import footerAd from './footer/footer'
export default {
	data(){
		return{
			audiolist:{},
			playbol:false,
			currenttime:'',
			currenttime1:'00',
			currenttime2:'00',
			alllist:[]
		}
	},
	components:{
  	  top,
  	  footerAd
  	},
	created(){
		var that=this;
		let url="http://10.3.157.234:8081/active_play"
		let url2="http://10.3.157.234:8081/list"
		this.$http.get(url)
		  .then(function(data){
		  	that.audiolist=data.data
		  })
		this.$http.get(url2)
		  .then(function(data){
		  	that.alllist=data.data.result.dataList
		  })
	},
	methods:{
		bofang(){
			this.playbol=!this.playbol;
			let audio=document.getElementById('activemusic')
			var that=this;
			var id=setInterval(function(){
				that.currenttime=parseInt(audio.currentTime)
//				that.currenttime1=parseInt((audio.currentTime)/60).toString();
//				that.currenttime2=((audio.currentTime)%60).toFixed(0).toString();
				if(parseInt((audio.currentTime)/60)<10){
					that.currenttime1=0+parseInt((audio.currentTime)/60).toString();
				}else{
					that.currenttime1=parseInt((audio.currentTime)/60).toString();
				}
				if(((audio.currentTime)%60).toFixed(0)<10){
					that.currenttime2=0+((audio.currentTime)%60).toFixed(0).toString();
				}else{
					that.currenttime2=((audio.currentTime)%60).toFixed(0).toString();
				}
//				console.log(that.currenttime)
				var jinduleft=document.querySelector(".jinduleft");
				var jinduright=document.querySelector(".jinduright");
				var jdl=((that.currenttime)/(audio.duration)*100)+"%";
				var jdr=(1-((that.currenttime)/(audio.duration)))*100+"%";
				jinduleft.style.width=jdl;
				jinduright.style.width=jdr;
//				console.log(((that.currenttime)/(audio.duration)))
			},1000)
			if(audio.paused){                 
					id=setInterval(2000);
			        audio.play();
			    }
			    else{
//			    	clearInterval(id);
			        audio.pause();
			    }
		},
//		next(num){
//			let url="http://10.3.157.234:8081/active_play"
//			http.get(url)
//			  .then((data)=>{
//			  	if(num==1){
//			  		return
//			  	}else{
//			  		data.data={}
//			  		http.post(url,this.alllist[num-1])
//			  	}
//			  })
//		}
	},
	
//	computed:{
//		audiolist(){
//			let obj={};
//			let url="http://10.3.157.234:8081/active_play"
//			this.$http.get(url)
//			  .then((data)=>{
//			    obj=data.data
//			  })
//			return obj;
//		}
//	}
}
</script>

<style lang='less' scoped>
.all{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #F5F5F5;
}
.div_cover{
	width: 100%;
	height: 26.666rem;
	position:relative;
	.cover_shade{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: rgba(0,0,0,.3);
	}
	.div_cover_detail{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 99;
		h1{
			width: 100%;
			height: 3.666rem;
			text-align: center;
			line-height: 3.666rem;
			color: #FFFFFF;
			font-size: 1.6rem;
			white-space: nowrap;
    		text-overflow: ellipsis;
    		overflow: hidden;
		}
		.cover_img{
			width: 19.25rem;
			height: 19.25rem;
			position: absolute;
			top: 13%;
			left:13.9%;
			overflow: hidden;
			img{
				width: 19.25rem;
			}
			.play_btn{
				width: 3.258rem;
				height: 3.258rem;
				position: absolute;
				right: 1rem;
				bottom: 1rem;
				background: url(http://static.kaolafm.com/kaolafm/m/images/play-new_d838e682b1107059f24cc3addfafd4c6.png);
				background-size: 3.258rem;
			}
			.play_btn.active{
				background: url(http://static.kaolafm.com/kaolafm/m/images/pause-new_33f5e1f1ebe7877ac0bf81f05c270c86.png);
				background-size: 3.258rem;
			}
		}
	}
	.div_cover_count{
		width: 100%;
		height: 100%;
		overflow: hidden;
		img{
			height: 26.666rem;
			filter: blur(10px);
		}
	}
}
.share{
	width: 100%;
	height: 3.7rem;
	background-color: #fff;
	.share_left{
		width: 4.9375rem;
		height: 100%;
		float: left;
		color: #999;
		i{
			display: inline-block;
			width: 0.888rem;
			height: 0.8138rem;
			margin: 1.5rem .5rem 0 .8rem;
			background:url(http://static.kaolafm.com/kaolafm/m/images/listen-new_08d13b04d67feb99e662ce3a2696fac5.png);
			background-size: 100%;
		}
	}
	.share_right{
		float: right;
		width: 14.37rem;
		height: 100%;
		margin-right: .7rem;
		.leftspan{
			display: inline-block;
			width: 4rem;
			height: 100%;
			line-height: 3.7rem;
			float: left;
			color: #999;
		}
		.rightspan{
			display: inline-block;
			width: 10rem;
			height: 100%;
			float: left;
			font-size: 0;
			.weibo{
				background: url(http://static.kaolafm.com/kaolafm/m/images/weibo-new_e3d1e8df8cb41de1cc1ac045c67b20db.png);
				background-size: 100%;
			}
			.kongjian{
				background: url(http://static.kaolafm.com/kaolafm/m/images/qq-zone_eb860f8a5919a78a2c8b264cb86669ff.png);
				background-size: 100%;
			}
			.qq{
				background: url(http://static.kaolafm.com/kaolafm/m/images/qq-new_336122f8faa33df5d32418952f7e8a30.png);
				background-size: 100%;
			}
			.weibo,.kongjian,.qq{
				display: inline-block;
				width: 2.22rem;
				height: 2.22rem;
				margin-top: .6rem;
				margin-right: 1.1rem;
			}
		}
	}
}
.div_special{
	width: 24.52rem;
	height: 9.156rem;
	margin-top: 0.74rem;
	padding: .74rem 1.4rem .74rem .74rem;
	background-color: white;
	p{
		width: 100%;
		height: 1.75rem;
		color: #333;
		line-height: 1.75rem;
		font-size: 1.6rem;
	}
	.div_special_cont{
		width: 100%;
		height: 6.666rem;
		margin-top: 0.74rem;
		.div_sp_cover_left{
			width: 6.666rem;
			height: 6.66rem;
			float: left;
			img{
				width: 6.666rem;
			}
		}
		.div_sp_cover_right{
			width: 16.183rem;
			height: 6.666rem;
			float: left;
			margin-left: 0.74rem;
			p{
				color: #333333;
				font-size: 1.4rem;
			}
			.div_author{
				width: 100%;
				height: 1.916rem;
				margin: .296rem 0;
				color: #333;
				.div_desc{
					width: 100%;
					height: 2.666rem;
					color: #999;
					text-overflow: ellipsis;
					overflow: hidden;
					line-height: 1.333rem;
				}
				.span_author{
					display: inline-block;
					height: 1.916rem;
					.span_photo{
						display: block;
						width: 1.666rem;
						height: 1.666rem;
						float: left;
						img{
							width: 1.666rem;
						}
					}
					.span_name{
						margin-top: .5rem;
						float: left;
						
					}
				}
			}
		}
	}
}
.div_siblings{
	width: 100%;
	height: 12.666rem;
	background-color: white;
	margin-top: .73rem;
	.div_siblings_cont_left,.div_siblings_cont_right{
		width: 13.066rem;
		height: 10rem;
		float: left;
		a{
			display: inline-block;
			width: 11.333rem;
			margin-left: 1.166rem;
			color: #666;
			p{
				width: 100%;
				height: 2.666rem;
				margin: .37rem 0;
				text-align: center;
				color: #F84E4E;
				font-size: 1.4rem;
				line-height: 2.666rem;
			}
			div{
				width: 100%;
				height: 2.666rem;
				padding: 1.666rem 0;
				text-align: center;
				border: 1px solid #e8e8e8;
				line-height: 1.333rem;
			}
		}
	}
	.div_siblings_cont_right{
		float: right;
	}
}
.time{
	width: 80%;
	height: 1.1rem;
	margin-top: 20rem;
	margin-left: 10%;
	.start{
		display: inline-block;
		float: left;
		color: white;
	}
	.end{
		display: inline-block;
		float: right;
		color: white;
	}
}
.jindu{
	width: 80%;
	height: 1.3rem;
	margin-left: 10%;
	margin-top: .4rem;
	.jinduleft{
		width: 0%;
		height: .2rem;
		background-color: #F84E4E;
		float: left;
	}
	.jinduright{
		/*width: 21.333rem;*/
		width: 100%;
		height: .2rem;
		background-color: white;
		float: right;
	}
}
</style>