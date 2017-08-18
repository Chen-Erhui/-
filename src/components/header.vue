<template>
	<div class="header" :class="{'fixed': fixedBol}">
		<ul>
			<li><router-link to="/">首页</router-link></li>
			<li v-for="(item,index) in fenlei" @click="change(item.categoryId)"><router-link to="/zhineng" class="home" >{{item.categoryName}}</router-link></li>
		</ul>
  	</div>
</template>

<script>
	export default{
	  data () {
	    return {
	      fenlei: {},
	      activeCategoryId:0,
	      fixedBol: false
	    }
	  },
	  mounted(){
	  	var _this = this
	  	window.onscroll=function(){
	        var topScroll =document.body.scrollTop;//滚动的距离,距离顶部的距离
	        if(topScroll > 50){ //当滚动距离大于250px时执行下面的东西
	          _this.fixedBol = true
	        }else{
	          _this.fixedBol = false
	        }
	     } 
	  },
	  destroyed (){
	  	window.onscroll = null
	  },
	  created(){
		  let url='http://m.kaolafm.com/webapi/category/list?fid='+this.activeCategoryId
		  this.$http.get(url)
			 .then((data)=>{
		        this.fenlei = data.data.result.dataList
		      })
		},
	  computed:{
	  	
	  },
	  methods:{
	  	change(categoryId){
	  		this.$root.eventHub.$emit("cid",categoryId)
			this.activeCategoryId=categoryId
			let url='http://m.kaolafm.com/webapi/category/list?fid='+this.activeCategoryId
			  this.$http.get(url)
				 .then((data)=>{
				 	if(data.data.result){
				 		this.fenlei = data.data.result.dataList
				 	}else{
				 		this.fenlei=[{'categoryName':'全部'}]
				 	}
			      })
	  	},
	  }
	}
</script>

<style lang='less' scoped>
	.fixed{
		position: fixed;
		top: 0;
		z-index: 9999;
	}
	.header{
		width: 100%;
		height: 3.175rem;
		border-bottom: 1px solid #e7e7e7;
		white-space: nowrap;
		overflow:hidden;
		background-color: white;
		ul{
			padding: 0 0.83rem;
			white-space: nowrap;
			overflow-x: scroll;
			li{
				display: inline-block;
				&:nth-child(n){
					margin-left: 2rem;
				}
				&:nth-child(1){
					margin-left: 0rem;
				}
				a{
					text-decoration: none;
					color: #333;
					line-height: 3.175rem;
					font-size: 1.422rem;
				}
			}
		}
		
	}
</style>