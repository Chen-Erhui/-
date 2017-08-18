<template>
	<div class="container">
		<div class="top">
			<a href="###"></a>
			<p>登录</p>
		</div>
		<div class="center">
			<div class="zhanghao">
				<input type="text" placeholder="请输入您注册的邮箱或手机号"/>
			</div>
			<div class="psw">
				<input type="password" placeholder="请输入密码"/>
				<i :class="{'active':bol}" @click="changeBol()"></i>
			</div>
			<p class="tishi" onblur="yanzheng()">密码应该是6-16位的数字和字母</p>
			<div class="btn">
				<a href="###">登录</a>
			</div>
			<div class="handle">
				<a href="###" class="forget">忘记密码？</a>
				<a href="###" class="register">免费注册</a>
			</div>
		</div>
	</div>
</template>

<script>
//	var psw=document.querySelector(".psw>input")
//	var tishi=document.querySelector("tishi")
//	if(psw.onblur)
//	import '../common/reset.js'
export default{
	data(){
		return {
			bol:false
		}
	},
	methods:{
		changeBol(){
			this.bol=!this.bol
			var showPsw=document.querySelector('.psw>i')
		 	var input=document.querySelector(".psw>input")
			if(this.bol){
			 	input.type='text'
			 }else{
			 	input.type='password'
			 }
		},
		yanzheng(){
			var yanzheng=document.querySelector(".psw>input")
			
		}
	}
}
</script>

<style lang='less' scoped>
@import url("../common/styles/index.less");
	.container{
		width: 100%;
		height: 100%;
		.top{
			width: 100%;
			height: 6rem;
			margin-top: .5rem;
			a{
				display: block;
				width: 4rem;
				height: 4rem;	
				margin: 0 auto;
				background: url(http://static.kaolafm.com/kaolafm/m/images/logo_default_5c2ab0dfb155e9e02a8e61e97981a3e4.png) no-repeat;
				background-size: cover;
			}
			p{
				margin-top: .5rem;
				text-align: center;
				font-size: 1.6rem;
			}
		}
	}
	.center{
		width: 93%;
		height: 14.666rem;
		margin-left: 3.5%;
		margin-top: 2rem;
		.zhanghao{
			width: 100%;
			height: 3.354rem;
			border-bottom: 1px solid #ededed;
			input{
				width: 80%;
				height: 95%;
				border: none;
				outline: none;
			}
		}
		.psw{
			width: 100%;
			height: 3.354rem;
			border-bottom: 1px solid #ededed;
			input{
				width: 80%;
				height: 95%;
				border: none;
				outline: none;
			}
			i{
				display: inline-block;
				float: right;
				width: 18%;
				height: 100%;
				background: url(http://static.kaolafm.com/kaolafm/m/images/eye-close_5114ff932f28b8537fc3c827302800f5.png) no-repeat;
				background-size: 1.458rem 1rem;
				background-position: 2rem 1rem;
			}
			i.active{
				display: inline-block;
				float: right;
				width: 18%;
				height: 100%;
				background: url(http://static.kaolafm.com/kaolafm/m/images/eye-show_d9284c11def1e724619e5098d0f60ed7.png) no-repeat;
				background-size: 1.458rem 1rem;
				background-position: 2rem 1rem;
			}
		}
	}
	.btn{
		width: 100%;
		height: 3.259rem;
		margin-top: 3rem;
		a{
			display: inline-block;
			width: 100%;
			height: 100%;
			background-color: #ddd;
			text-align: center;
			line-height: 3.259rem;
			font-size: 1.5rem;
			color: white;
		}
	}
	.handle{
		margin-top: 1.5rem;
		.forget{
			float: left;
			font-size: 1.2rem;
			color: #e94d4d;
		}
		.register{
			float: right;
			font-size: 1.2rem;
			color: #e94d4d;
		}
	}
	.tishi{
		margin-top: .3rem;
		color: #e94d4d;
		display: none;
	}
</style>