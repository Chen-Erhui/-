<template>
	<div class="top">
		<div class="logo" @click="back()"><</div>
		<div class="top_right">
			<div class="menu" @click="show()">
				<i></i>
				<span>菜单</span>
			</div>
			<div class="login">
				<router-link to="/login">
					<i></i>
					<span>登录</span>
				</router-link>
			</div>
		</div>
		<div class="xiala" v-show="isShow">
			<ul>
				<li><router-link href="/">首页</router-link></li>
				<li v-for="(item,index) in fenlei"><router-link to='/zhineng'></router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				fenlei:{},
				isShow:false
			}
		},
		created(){
		  let url='http://m.kaolafm.com/webapi/category/list?fid=0'
		  this.$http.get(url)
			 .then((data)=>{
		        this.fenlei = data.data.result.dataList
		      })
		},
		methods:{
			show(){
				this.isShow=!this.isShow
			},
			back(){
				history.back()
			}
		}
	}
</script>

<style lang='less' scoped>
	.top{
		width: 100%;
		height: 2.83rem;
		padding: 0.74rem 0 0.74rem 0rem;
		border-bottom: 1px solid #e7e7e7;
		position: relative;
	}
	.logo{
		width: 7rem;
		height: 2.38rem;
		float: left;
		font-size: 2.8rem;
		line-height: 2.38rem;
		margin-left: 1rem;
		color: #999;
	}
	.top_right{
		width: 7.55rem;
		height: 2.83rem;
		float: right;
		color: #999;
	}
	.menu{
		width: 2rem;
		height: 2.83rem;
		float: left;
		padding: 0 0.8rem;
	}
	.menu>i{
		display: inline-block;
		width: 1.185rem;
		height: 1.185rem;
		background: url(http://static.kaolafm.com/kaolafm/m/images/menu_800b70251ca8594a325ed91456b8beb9.png) no-repeat;
		background-size: 1.185rem;
		margin-top: .3rem;
		margin-left: .4rem;
	}
	.login{
		width: 2rem;
		height: 2.83rem;
		float: left;
		padding: 0 0.8rem;
		a{
			display: block;
			width: 100%;
			height: 100%;
			color: #999;
			i{
				display: inline-block;
				margin-top: .3rem;
				margin-left: .4rem;
				width: 1.185rem;
				height: 1.185rem;
				background: url(http://static.kaolafm.com/kaolafm/m/images/uimg_100_9e4711d4bfbbbb5e90ca2324c533d157.png) no-repeat;
				background-size: 1.185rem;
			}
		}
	}
	.xiala{
		width: 100%;
		/*height: 50px;*/
		background-color: white;
		position: absolute;
		top: 3.57rem;
		z-index: 9999;
		border-top: 1px solid #e7e7e7;
		ul{
			width: 100%;
			padding: 0;
			margin: 0;
			li{
				margin: 0;
				display: inline-block;
				width: 25%;
				padding: 1.5558rem 0;
				text-align: center;
				border-right: 1px solid #e7e7e7;
				border-bottom: 1px solid #e7e7e7;
				box-sizing:border-box;
				float: left;
				a{
					font-size: 1.3rem;
				    color: #333;
				}
			}
		}
	}
</style>