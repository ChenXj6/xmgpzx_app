<template>
	<view>
		<view class="item">
			<view class="user_address">
				<view style="width: 50rpx;" class="padding_10r_26r">
					<uni-icons type="location-filled"></uni-icons>
				</view>
				<view style="flex: 1;">
					<view class="addresseeInfo padding_10r_26r">
						<view>收货人：一二</view>
						<view>11045678911</view>
					</view>
					<view class="addresseeAddress user_address">联合大厦</view>
				</view>
			</view>
		</view>
		<view class="item">
			<view class="orderHead">
				<view>订单编号：1345665</view>
				<view>待付款</view>
			</view>
			<view class="goodsList">
				<view class="goodsDetail">
					<view class="goodsImg">
						<img src="/static/images/u22.png" alt="">
					</view>
					<view style="padding: 5px;flex: 1;">
						<view>SH·Y308L</view>
						<view>碳钢药芯焊条1.2mm</view>
						<view>25000.00/箱</view>
					</view>
					<view style="width: 10%;text-align: center;line-height: 134rpx;">
						*1
					</view>
				</view>
				
			</view>
			<view style="height: 10rpx;"></view>
		</view>
		<view class="item">
			<view class="itemList padding_10r_26r">
				<view>运费</view>
				<view>￥236.00</view>
			</view>
			<view class="itemList padding_10r_26r">
				<view>工品券</view>
				<view>￥-50.00</view>
			</view>
			<view class="itemList padding_10r_26r">
				<view>总计</view>
				<view>80186.00</view>
			</view>
		</view>
		<view class="item">
			<view class="padding_10r_26r">订单号：0000000000</view>
			<view class="padding_10r_26r">下单时间：2020-12-29 12：26：30</view>
			<view class="padding_10r_26r">支付方式：线下支付</view>
			<view class="padding_10r_26r">备注：</view>
		</view>
		<view class="item">
			<view class="padding_10r_26r">发货仓：厦门仓</view>
			<view class="padding_10r_26r">配送方式：货运</view>
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
page {
	background: #f2f2f2;
}
view{
	font-size: 14px;
}
.item {
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.user_address{
	display: flex;
	padding: 10rpx 26rpx ;
}
.addresseeInfo{
	display: flex;
	flex: 1 1 0%;
}
.addresseeInfo view{
	flex: 1 1 0%;
}
.orderHead {
	padding: 18rpx 22rpx;
	display: flex;
	justify-content: space-between;
}
.goodsDetail{
	display: flex;
	background-color: #FBFBFB;
	padding: 10px;
	margin-bottom: 10rpx;
}
.goodsImg{
	height: 100%;
	width: 20%;
	padding: 5px;
}
.goodsImg img{
	height: 100%;
	width: 100%;
}
.itemList{
	display:flex;
	justify-content: space-between;
}
.padding_10r_26r{
	padding: 10rpx 26rpx;
}
</style>
