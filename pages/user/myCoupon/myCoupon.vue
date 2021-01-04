<template>
	<view>
		<view class="couponType">
			<view class="couponTypeList">
				<view class="list_title">未使用</view>
				<view class="list_title"><img src="/static/images/我的/u925.png" alt=""></view>
			</view>
			<view class="couponTypeList">已使用</view>
			<view class="couponTypeList">已过期</view>
		</view>
		<view class="couponList">
			
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
.couponType{
	display: flex;
	height: 50px;
}
.couponTypeList{
	width: 33%;
	text-align: center;
	display: flex;
	flex-direction: column;
}
.list_title{
	width: 50%;
	margin: 0 auto;
}
</style>
