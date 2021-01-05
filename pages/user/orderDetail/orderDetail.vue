<template>
	<view>
		<view class="user_data">
			<view class="user_address">
				<view style="width: 50rpx;">
					<uni-icons type="location-filled"></uni-icons>
				</view>
				<view class="">
					<view class="addresseeInfo">
						<view>收货人：一一</view>
						<view>110</view>
					</view>
					<view class="addresseeAddress">联合大厦</view>
				</view>
			</view>
		</view>
		<view class="user_data"></view>
		<view class="user_data"></view>
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
page {
	background: #f2f2f2;
}
.user_data {
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.user_address{
	display: flex;
}
.addresseeInfo{
	display: flex;
	flex: 1 1 0%;
}
.addresseeInfo view{
	flex: 1 1 0%;
}
</style>
