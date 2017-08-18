<template>
	<!--底部下载框-->
	<div class="footer">
		<div class="left">
			<i></i>
		</div>
		<div class="right">
			<a href="###">客户端收听</a>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.footer{
		width: 100%;
		height: 4rem;
		background-color: #f8f8f8;
		padding: .85rem 0;
		border-top: 1px solid #e7e7e7;
		.left{
			width: 12.85rem;
			height: 4rem;
			float: left;
			margin-left: .8rem;
			i{
				display: inline-block;
				width: 100%;
				height: 100%;
				background: url('http://static.kaolafm.com/kaolafm/m/images/footer_48f53f9ad7319352e832e6a615163344.png') no-repeat;
				background-size: 12.85rem;
			}
		}
		.right{
			height: 1.33rem;
			display: inline-block;
			padding: 0.5rem 0.8rem;
			border: 1px solid #f84e4e;
			border-radius: 0.333rem;
			margin-top: 0.8rem;
			margin-left: 5.5rem;
			a{
				display: inline-block;
				color: #f84e4e;
				text-decoration: none;
				font-size: 1.2rem;
			}
		}
	}
</style>