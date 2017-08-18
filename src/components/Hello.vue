<template>
  <div class="hello-content">
  	<top></top>
  	<header-ad></header-ad>
  	<div class="swp">
	    <mt-swipe :auto="4000">
			  <mt-swipe-item><img src='http://img.kaolafm.net/mz/images/201707/487f2289-d9d3-4c7d-8de8-34de044cc9f4/percent_100.jpg'></mt-swipe-item>
			  <mt-swipe-item><img src='http://img.kaolafm.net/mz/images/201707/01dcd9ad-d981-4b63-bc95-661d97816779/percent_100.jpg'/></mt-swipe-item>
			  <mt-swipe-item><img src='http://img.kaolafm.net/mz/images/201707/fe5c07de-83ec-45b9-b0d3-541eef4b3e6e/percent_100.jpg'/></mt-swipe-item>
			  <mt-swipe-item><img src='http://img.kaolafm.net/mz/images/201707/888b06c5-5513-4c5a-b1a3-96973629668e/percent_100.jpg'/></mt-swipe-item>
			  <mt-swipe-item><img src='http://img.kaolafm.net/mz/images/201707/90671889-8228-443b-86cc-18717091aaa6/percent_100.jpg'/></mt-swipe-item>
			  <mt-swipe-item><img src='http://img.kaolafm.net/mz/images/201707/bd73d2b6-e493-4643-8f5f-733eaa101deb/percent_100.jpg'/></mt-swipe-item>
			</mt-swipe>
  	</div>
		<div class="container">
		<!--特别推荐-->
			<div class="title">
				<a href="###">特别推荐</a>
			</div>
			<div class="main">
				<ul>
					<li @click="toxq(1100000476073)">
						<router-link to="/xiangqing">
							<div><img src="http://img.kaolafm.net/mz/images/201703/ab36a1cb-abb2-447f-ba12-0d1c276982a8/default.jpg"/></div>
							<p>污力萱萱</p>
					  </router-link>
					</li>
					<li @click="toxq(1100000421282)">
						<router-link to="/xiangqing">
							<div><img src="http://img.kaolafm.net/mz/images/201608/085c8810-8c35-443f-a822-e4fee4088af1/250_250.jpg"/></div>
							<p>小明的嗨皮日记！</p>
						</router-link>
					</li>
					<li @click="toxq(1100000013301)">
						<router-link to="/xiangqing">
							<div><img src="http://img.kaolafm.net/mz/images/201608/e18f4507-95db-4908-ab74-44a12a2f3140/250_250.jpg"/></div>
							<p>空空道人谈股市</p>
						</router-link>
					</li>
				</ul>
			</div>
			<!--音乐-->
			<div class="title">
				<a href="###">音乐</a>
				<span>更多></span>
			</div>
			<div class="main">
				<ul>
					<li v-for="(item,index) in music" @click="toxq(item)">
						<router-link to="/xiangqing">
							<div><img :src='item.pic'></div>
							<p>{{item.albumName}}</p>
						</router-link>
					</li>	
				</ul>
			</div>
		<!--新闻-->
			<div class="title">
				<a href="">新闻</a>
				<span>更多></span>
			</div>
			<div class="main">
				<ul>
						<li v-for="(item,index) in news" @click="toxq(item)">
							<router-link to="/xiangqing">
								<div><img :src="item.pic"/></div>
								<p>{{item.albumName}}</p>
							</router-link>
					</li>
				</ul>
			</div>
		<!--广播剧-->
			<div class="title">
				<a href="">广播剧</a>
				<span>更多></span>
			</div>
			<div class="main">
				<ul>
					<li v-for='(item,index) in guangbo' @click="toxq(item)">
						<router-link to="/xiangqing">
								<div><img :src="item.pic"/></div>
								<p>{{item.albumName}}</p>
						</router-link>
					</li>
					
				</ul>
			</div>
		<!--脱口秀-->
			<div class="title">
				<a href="">脱口秀</a>
				<span>更多></span>
			</div>
			<div class="main">
				<ul>
					<li v-for='(item,index) in tuokouxiu' @click="toxq(item)">
						<router-link to="/xiangqing">
								<div><img :src="item.pic"/></div>
								<p>{{item.albumName}}</p>
						</router-link>
					</li>
					
				</ul>
			</div>
		<!--情感-->
			<div class="title">
				<a href="">情感</a>
				<span>更多></span>
			</div>
			<div class="main">
				<ul>
					<li v-for='(item,index) in qinggan' @click="toxq(item)">
						<router-link to="/xiangqing">
								<div><img :src="item.pic"/></div>
								<p>{{item.albumName}}</p>
						</router-link>
					</li>
					
				</ul>
			</div>
		<!--小说-->
			<div class="title">
				<a href="">小说</a>
				<span>更多></span>
			</div>
			<div class="main">
				<ul>
					<li v-for='(item,index) in xiaoshuo' @click="toxq(item)">
						<router-link to="/xiangqing">
								<div><img :src="item.pic"/></div>
								<p>{{item.albumName}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		<!--曲艺-->
			<div class="title">
				<a href="">曲艺</a>
				<span>更多></span>
			</div>
			<div class="main">
				<ul>
					<li v-for='(item,index) in quyi' @click="toxq(item)">
						<router-link to="/xiangqing">
								<div><img :src="item.pic"/></div>
								<p>{{item.albumName}}</p>
						</router-link>
					</li>
				</ul>
			</div>			
		</div>
    <footer-load></footer-load>
  </div>
</template>

<script>
import top from './top/top'
import footerLoad from './footer/footer'
import headerAd from './header'
export default {
	components:{
  	top,
  	footerLoad,
  	headerAd,
 },
	data () {
	    return {
	      music: {},
	 			news:{},
	 			guangbo:{},
	 			tuokouxiu:{},
	 			qinggan:{},
	 			xiaoshuo:{},
	 			quyi:{}
	    }
	 },
	 methods:{
	 	toxq(item){
	 		this.$store.dispatch('toxq', item)
	 	}
	 },
	 created(){
		  let url='http://m.kaolafm.com/webapi/resource/search?cid=201&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=3&pagenum=1'
		  let url2='http://m.kaolafm.com/webapi/resource/search?cid=1393&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=3&pagenum=1'
		  let url3='http://m.kaolafm.com/webapi/resource/search?cid=819&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=3&pagenum=1'
		  let url4='http://m.kaolafm.com/webapi/resource/search?cid=74&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=3&pagenum=1'
		  let url5='http://m.kaolafm.com/webapi/resource/search?cid=32&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=3&pagenum=1'
		  let url6='http://m.kaolafm.com/webapi/resource/search?cid=655&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=3&pagenum=1'
		  let url7='http://m.kaolafm.com/webapi/resource/search?cid=114&rtype=20000&sorttype=VALID_START_DATE_DESC&pagesize=3&pagenum=1'
		  this.$http.get(url)
			 .then((data)=>{
		        this.music = data.data.result.dataList
		      })
			this.$http.get(url2)
			 .then((data)=>{
		        this.news = data.data.result.dataList
		      })
			 this.$http.get(url3)
			 .then((data)=>{
		        this.guangbo = data.data.result.dataList
		      })
			 this.$http.get(url4)
			 .then((data)=>{
		        this.tuokouxiu = data.data.result.dataList
		      })
			 this.$http.get(url5)
			 .then((data)=>{
		        this.qinggan = data.data.result.dataList
		      })
			 this.$http.get(url6)
			 .then((data)=>{
		        this.xiaoshuo = data.data.result.dataList
		      })
			 this.$http.get(url7)
			 .then((data)=>{
		        this.quyi = data.data.result.dataList
		      })
		},
		name: 'hello', 
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import url("../common/styles/index.less");
.hello-content{
	width: 100%;
	height: 121rem;
	.swp{
		width: 100%;
		height: 11.85rem;
			position: absolute;
			 top: 7.75rem;
			.mint-swipe{
				height: 100%;	
			}
	}	
	img{
				width: 100%;
			}
}

.container{
	position: absolute;
	top: 20.5rem;
	left: 0.889rem;
	bottom: 0;
	right: 0.889rem;
	/*height: 200px;*/
	/*margin: 1.333rem 0.889rem;*/
	/*height: 200px;*/
	/*background-color: pink*/
}
.title{
	width: 100%;
	margin-bottom: 0.7408rem;
	margin-top: 1rem;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid #e7e7e7;
	span{
		float: right;
		color: #999;
	}
	a{
		display: inline-block;
		text-decoration: none;
		color: #333;
		font-size: 1.2rem;
		line-height: 1.11rem;
		text-indent: 1rem;
		font-weight: 400;
		border-left: .2rem solid #f84e4e;
	}
}
.main{
	width: 100%;
	height: 9.25rem;
	margin-bottom: .5rem;
	ul{
		width: 100%;
		height: 100%;
		font-size: 0;
		margin-bottom: .8rem;
		li{
			font-size: 1.1rem;
			display: inline-block;
			width: 32%;
			/*height: 100%;*/
			text-align: center;
			&:nth-child(n+2){
				margin-left: 2%;
			}
			a{
				width: 100%;
				height: 100%;
				p{
						margin-top: .6rem;
						font-size: 1rem;
						.no-wrap;
					};
					div{
					width: 100%;
					height: 7.6158rem;
						img{
							width: 7.6158rem;
						}
					}
					
			}
			
		}
	}
}
.footer{
	position: absolute;
	top: 123rem;
}
</style>
