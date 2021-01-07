<template>
	<view class="noLoginTip" v-if="!isLogin">
		<text>登录开启更好体验</text>
		<text @click="goLogin()">立即登录</text>
	</view>
</template>

<script>
import {isLogin} from '@/common/js/util.js'
export default{
	data(){
		return{
			isLogin:false
		}
	},
	methods:{
		goLogin(){
			uni.navigateTo({
				url: '/pages/user/myCoupon/myCoupon'
			});
		},
	},
	mounted(){
		this.isLogin = isLogin();
	}
}
</script>

<style lang="less" scoped>
.noLoginTip{
	width: 608rpx;
	height: 64rpx;
	background:rgba(#333,0.9);
	z-index: 9999;
	position: fixed;
	bottom: 98rpx;
	left: 50%;
	transform: translateX(-50%);
	margin: 0 auto;
	border-radius: 50rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10rpx 0 20rpx;
	font-size: 26rpx;
	color: #FFFFFF;
	text-align: center;
	>text:nth-child(2){
		display: block;
		width: 150rpx;
		height: 50rpx;
		line-height: 50rpx;
		background-color: #2483d9;
		border-radius: 50rpx;
	}
}
</style>
