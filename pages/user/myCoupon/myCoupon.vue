<template>
	<view>
		<view class="couponType">
			<view class="couponTypeList">
				<view class="list_title">未使用</view>
				<view class="list_title"><img src="/static/images/我的/u925.png" alt=""></view>
			</view>
			<view class="couponTypeList">
				<view class="list_title">已使用</view>
				<view class="list_title"><img src="/static/images/我的/u925.png" alt=""></view>
			</view>
			<view class="couponTypeList">
				<view class="list_title">已过期</view>
				<view class="list_title"><img src="/static/images/我的/u925.png" alt=""></view>
			</view>
		</view>
		<view class="item">
			<view class="coupon">
				<!-- <text class="mix-icon icon-daipingjia"></text> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.item{
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.couponType{
	display: flex;
	height: 50px;
}
.couponTypeList{
	width: 33%;
	text-align: center;
	display: flex;
	flex-direction: column;
	padding: 10px;
}
.list_title{
	width: 50%;
	margin: 0 auto;
	height: 7px;
}
.coupon{
	background-color: #99C043;
	border-radius: 8px;
	height: 100px;
}
</style>
