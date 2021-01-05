<template>
	<view>
		<view class="collectionHead">
			<view>全部收藏</view>
			<view @click="radioShow = radioShow ? false : true">{{ radioShow | getCk(radioShow) }}</view>
		</view>
		<view class="goodsList">
			<view class="goods_info" v-for="items in list">
				<view class="goods_active"><radio v-if="radioShow"></radio></view>
				<view class="goods_img"><img src="/static/images/我的/u305.png" alt="" /></view>
				<view class="goods_data">
					<view>SH·H10Mn2 埋弧焊丝 4.0(250kg)mm</view>
					<view class="goods_info_stock">
						<view>仓库：</view>
						<view>库存：</view>
					</view>
					<view style="color: #CCCCCC;">起订量：</view>
					<view class="reservePip" style="justify-content: space-between;">
						<view>
							<span style="color:#FF6600;">￥100</span>
							/箱
						</view>
						<view><uni-icons type="plus-filled" size="25" color="#2483D9" @click="open"></uni-icons></view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="orderPage">
				<view class="close_popup" @tap="close">
					<uni-icons type="closeempty" size="20"></uni-icons>
				</view>
				<view class="popup_content">
					<view class="orderTop">
						<view class="goods_img">
							<img src="/static/images/我的/u305.png" alt="">
						</view>
						<view class="goodsDetail">
							<view>SH·H10Mn2 埋弧焊丝 4.0(250kg)mm</view>
							<view>单价：<span style="color: red;">￥111</span></view>
							<view style="color: #797979;font-size: 13px;">总价：￥111</view>
						</view>
					</view>
					<view class="orderBottom">
						<view style="line-height: 27px;">起订量X箱</view>
						<view style="display: flex;color: #000000;">
							<view class="delBtn">-</view>
							<view style="border:1px solid rgb(228, 228, 228);padding: 3px 8px;display: flex;"><input type="number" v-model="orderNum" style="font-size: 14px;"></input><span>箱</span></view>
							<view class="addBtn">+</view>
						</view>
					</view>
					<view class="goodsOperation">
						<view style="background-color: #F2F2F2;border-radius: 0 0 0 5px;" @tap="close">取消</view>
						<view style="background-color: #2483D9;border-radius: 0 0 5px;color: #fff;">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<view class="rootNav" v-if="radioShow">
			<view><radio>全选</radio></view>
			<view><view class="delGoods">删除</view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			radioShow: false,
			orderNum:1,
			list: [1, 2, 3]
		};
	},
	filters: {
		//管理
		getCk(val) {
			if (val) {
				return (val = '完成');
			} else {
				return (val = '管理');
			}
		}
	},
	methods: {
		open() {
			this.$refs.popup.open();
		},
		close(){
			this.$refs.popup.close();
		}
	}
};
</script>

<style scoped lang="scss">
view {
	font-size: 14px;
}
.collectionHead {
	display: flex;
	justify-content: space-between;
	padding: 20rpx;
}
.goods_info {
	display: flex;
	height: 200rpx;
	padding: 20rpx;
	background-color: #fff;
}
.goods_active {
	line-height: 160rpx;
	width: 60rpx;
}
.goods_img {
	border: 2rpx solid #f2f2f2;
	height: 160rpx;
	width: 160rpx;
}
.goods_img img {
	height: 100%;
	width: 100%;
}
.goods_data {
	padding: 10rpx 20rpx;
}
.goods_info_stock {
	display: flex;
}
.reservePip {
	display: flex;
}
.goods_info_stock view {
	flex: 1 1 0%;
	color: #cccccc;
}
.rootNav {
	position: fixed;
	width: 100%;
	height: 80rpx;
	line-height: 60rpx;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	padding: 12rpx 20rpx;
	background-color: #fff;
	border: 2rpx solid #e4e4e4;
}
.delGoods {
	background-color: #2483d9;
	color: #fff;
	width: 120rpx;
	text-align: center;
	border-radius: 20px;
	height: 100%;
}
.orderPage{
	border-radius: 5px;
	background-color: #fff;
}
.close_popup{
	justify-content: flex-end;
	display: flex;
	padding: 10rpx 20rpx;
}
.orderTop{
	border-bottom: 1px solid rgb(228, 228, 228);
	display: flex;
	padding: 15px 10px;
}
.goodsDetail{
    padding: 5px 10px;
}
.goodsDetail view{
	margin-top: 10rpx;
	margin-bottom: 10rpx;
}
.orderBottom{
	height: 150rpx;
	text-align: center;
	display: flex;
	padding: 50rpx 100rpx;
	justify-content: center;
}
.orderBottom >view{
	color: #797979;
	font-size: 13px;
	flex: 1;
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
.delBtn{
	border:1px solid rgb(228, 228, 228);
	border-right:0;
	border-radius: 5px 0 0 5px;
	padding: 3px 8px;
	font-weight: bold;
}
.addBtn{
	border:1px solid rgb(228, 228, 228);
	border-radius: 0 5px 5px 0;
	padding: 3px 8px;
	font-weight: bold;
}
</style>
