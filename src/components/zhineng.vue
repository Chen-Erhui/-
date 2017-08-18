<template>
	<div>
		<top></top>
		<header-ad></header-ad>
		<!--<div v-for="(item,index) in znlist.result.dataList"><img :src="item.pic"/></div>-->
		<div class="content">
			<ul>
				<li v-for="(item,index) in znlist.result.dataList">
					<img :src="item.pic"/>
					<p>{{item.albumName}}</p>
				</li>
				
			</ul>
		</div>
		<div class="load-more">加载更多专辑</div>
		<footer-ad></footer-ad>
	</div>
	
</template>

<script>
	import headerAd from './header'
	import top from './top/top'
	import footerAd from './footer/footer'
	export default{
	  components:{
	  	headerAd,
	  	top,
	  	footerAd
	  },
	  data(){
			return{
				cid:'',
				znlist:{}
			}
	  },
	  created(){
	  	this.$root.eventHub.$on('cid',(data)=>{
	  		this.cid=data
	  	})
	  },
	  methods:{
	  	getdata(){
	  		var url="http://m.kaolafm.com/webapi/resource/search?cid="+this.cid+"&pagesize=18&pagenum=1";
	  		 this.$http.get(url)
		    .then((data)=>{
		    	this.znlist=data.data
		    })
	  	}
	  },
	  watch:{
	  	cid:'getdata'
	  }
	}
</script>

<style lang='less' scoped>
@import url("../common/styles/index.less");
	.load-more{
		width: 80%;
		height: 2.88rem;
		border: 1px solid #F84E4E;
		border-radius: .5rem;
		text-align: center;
		line-height: 2.88rem;
		font-size: 1.3rem;
		color: #F84E4E;
		margin: 5% 10%;
	}
	.content{
		width: 96%;
		margin-left: 2%;
		ul{
			width: 100%;
			font-size: 0;
			/*display: flex;
			justify-content: space-between;*/
			li{
				width: 23%;
				display: inline-block;
				height: 9.08rem;
				margin-top: 1rem;
				&:nth-child(n){
					margin-left: .6rem;
				}
				&:nth-child(4n+1){
					margin-left: 0;
				}
				img{
					width: 100%;
					height: 80%;
				}
				p{
					font-size: 1rem;
					line-height: 1.8rem;
					text-align: center;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					height: 20%;
					color: #333;
				}
			}
		}
	}
</style>