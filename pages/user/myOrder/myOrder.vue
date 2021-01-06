<template>
	<view>
		<view class="orderType">
			<view class="TypeList" @click="orderType = 1">
				<view class="list_title">全部</view>
				<view class="list_title" v-if="orderType == 1"><img src="/static/images/我的/u925.png" alt="" /></view>
			</view>
			<view class="TypeList" @click="orderType = 2">
				<view class="list_title">待付款</view>
				<view class="list_title" v-if="orderType == 2"><img src="/static/images/我的/u925.png" alt="" /></view>
			</view>
			<view class="TypeList" @click="orderType = 4">
				<view class="list_title">待收货</view>
				<view class="list_title" v-if="orderType == 4"><img src="/static/images/我的/u925.png" alt="" /></view>
			</view>
			<view class="TypeList" @click="orderType = 5">
				<view class="list_title">已完成</view>
				<view class="list_title" v-if="orderType == 5"><img src="/static/images/我的/u925.png" alt="" /></view>
			</view>
		</view>
		<view class="orderList">
			<view class="orderTail">
				<view class="orderHead" @tap="toOrderDetail()">
					<view>订单号：234651635</view>
					<view>待付款</view>
				</view>
				<view class="goodsList">
					<view class="goodsBox">
						<view class="waresList" :style="'margin-left:' + marginLeft + 'px'">
							<view class="goodsInfo" v-for="items in goodsList">
								<view class="goodsImg"><img src="/static/images/我的/u50.png" alt="" /></view>
								<view class="goodsDetail">
									<view>SH·H10Mn2</view>
									<view>埋弧焊丝</view>
									<view>4.0(250kg)mm</view>
								</view>
							</view>
						</view>
					</view>
					<view class="goodsSee">
						<view v-if="goodsList.length > 3" @click="marginLeft -= 20" class="positon_ab" style="bottom: 47%;left: 54%;"><uni-icons type="forward"></uni-icons></view>
						<view class="positon_ab" style="bottom: 25%;left: 40%;">共{{ goodsList.length }}件</view>
					</view>
				</view>
				<view class="orderDetail" @tap="toOrderDetail()">
					<view>共{{ goodsList.length }}件</view>
					<view>￥1111</view>
				</view>
				<view class="orderOperate flex-end">
					<view style="color: #666666;border: 1px solid #666666;margin-right: 20rpx;" @click="delOrder(1)">删除订单</view>
					<view style="background-color: #2483D9;color: #fff;">去付款</view>
				</view>
			</view>
			<view class="orderTail">
				<view class="orderHead">
					<view>订单号：234651635</view>
					<view>交易成功</view>
				</view>
				<view class="goodsList">
					<view class="goodsBox">
						<view class="waresList" :style="'margin-left:' + marginLeft + 'px'">
							<view class="goodsInfo" v-for="items in goodsList">
								<view class="goodsImg"><img src="/static/images/我的/u50.png" alt="" /></view>
								<view class="goodsDetail">
									<view>SH·H10Mn2</view>
									<view>埋弧焊丝</view>
									<view>4.0(250kg)mm</view>
								</view>
							</view>
						</view>
					</view>
					<view class="goodsSee">
						<view v-if="goodsList.length > 13" @click="marginLeft -= 20" class="positon_ab" style="bottom: 47%;left: 54%;"><uni-icons type="forward"></uni-icons></view>
						<view class="positon_ab" style="bottom: 25%;left: 40%;">共{{ goodsList.length }}件</view>
					</view>
				</view>
				<view class="orderDetail">
					<view>共{{ goodsList.length }}件</view>
					<view>￥1111</view>
				</view>
				<view class="orderOperate ">
					<view style="flex:1;font-size: 26rpx;">
						2020-12-29 10：40：26
					</view>
					<view style="flex:1;display: flex;" class="flex-end">
						<view style="color: #666666;border: 1px solid #666666;margin-right: 20rpx;width: 50%;">再次购买</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="orderPage">
				<view style="text-align: center;padding: 40rpx;">
					确认删除
				</view>
				<view class="goodsOperation">
					<view style="background-color: #E4E4E4;border-radius: 0 0 0 5px;" @tap="close">取消</view>
					<view style="background-color: #E4E4E4;border-radius: 0 0 5px;">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderType: 1,
			goodsList: [1, 2, 3, 1],
			marginLeft: 0
		};
	},
	onLoad(options) {
		this.orderType = options.orderType;
	},
	methods: {
		//删除订单
		delOrder(id) {
			this.$refs.popup.open();
		},
		close(){
			this.$refs.popup.close();
		},
		toOrderDetail(){
			uni.navigateTo({
			    url: '../orderDetail/orderDetail'
			});
		}
	}
};
</script>

<style>
page {
	background: #f2f2f2;
}
.orderTail {
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.orderType {
	display: flex;
	height: 50px;
}
.TypeList {
	width: 25%;
	text-align: center;
	display: flex;
	flex-direction: column;
	padding: 10px;
}
.orderHead {
	padding: 18rpx 22rpx;
	display: flex;
	justify-content: space-between;
}
.goodsList {
	display: flex;
	background-color: #fbfbfb;
	padding: 10rpx 20rpx;
}
.goodsBox {
	overflow: hidden;
	flex: 1;
}
.waresList {
	display: flex;
	margin-left: 1rpx;
	width: 100%;
}
.goodsInfo {
	width: 33%;
	padding: 16rpx;
}
.goodsImg {
	width: 120rpx;
	height: 120rpx;
	margin: 0 auto;
}
.goodsImg img {
	height: 100%;
	width: 100%;
}
.goodsDetail {
	text-align: center;
}
.goodsDetail view {
	font-size: 13px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.goodsSee {
	text-align: center;
	width: 25%;
	position: relative;
}
.positon_ab {
	position: absolute;
}
.orderDetail {
	display: flex;
	justify-content: flex-end;
	border: 1px solid #fbfbfb;
	padding: 10rpx 20rpx;
}
.orderDetail view {
	width: 25%;
}
.orderOperate {
	display: flex;
	padding: 16rpx 20rpx;
	height: 80rpx;
}
.flex-end {
	justify-content: flex-end;
}
.orderOperate view {
	width: 25%;
	text-align: center;
	border-radius: 20px;
	line-height: 50rpx;
}
.orderPage{
	border-radius: 5px;
	background-color: #fff;
	width: 700rpx;
}
.goodsOperation{
	display: flex;
	text-align: center;
	height: 70rpx;
	line-height: 70rpx;
}
.goodsOperation view{
	flex:1;
}
</style>
