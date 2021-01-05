<template>
	<view class="content">
		<view class="brandListBox">
			<p>推荐品牌</p>
			<view class="brandList">
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				<view class="brand radio">
					<image src="/static/images/首页/u234.png" mode=""></image>
					<p>东风</p>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.radio{
		border-radius: 10rpx;
	}
	.brandListBox{
		width: 100%;
		padding: 20rpx;
		height: 600rpx;
		color: #333333;
		box-sizing: border-box;
		>p{
			font-weight: 400;
			font-size: 26rpx;
			height: 32rpx;
			line-height: 32rpx;
			margin:20rpx 10rpx ;
			font-family: 'Arial Normal','Arial';
			font-style: normal;
		}
		>.brandList{
			width: 100%;
			height: 100%;
			padding: 0 10rpx;
			box-sizing: border-box;
			display: flex;
			// justify-content: space-around;
			flex-wrap: wrap;
			align-content: flex-start;
			>.brand{
				width: 192rpx;
				height: 140rpx;
				padding-top: 20rpx;
				margin: 10rpx 15rpx;
				background-color: #FFFFFF;
				font-size: 26rpx;
				text-align: center;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: space-around;
				>image{
					width: 114rpx;
					height: 68rpx;
				}
			}
		}
	}
</style>
