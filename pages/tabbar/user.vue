<template>
	<view class="app">
		<view class="top">
			<image class="u-bg" src="/static/images/我的/u2.png"></image>
			<view class="user-wrapper">
				<view style="display: flex;">
					<image class="avatar" src="/static/images/我的/u42.png"></image>
					<view class="cen column" v-if="hasLogin" style="padding: 10px;">
						<text class="username f-m">阿三</text>
						<!-- <text class="user-group">手机号码</text> -->
						<text class="user-iphone">12345678110</text>
					</view>
					<view class="login-box" v-else><text>请登录</text></view>
				</view>

				<view style="display: flex;">
					<navigator url="/pages/user/Profile/Profile" style="margin-right: 10px;">
						<!-- <img src="/static/images/我的/u46.png" alt="" /> -->
						<uni-icons type="person" size="25" color="#ED7748"></uni-icons>
					</navigator>
					<navigator url="/pages/user/install/install">
						<!-- <img src="/static/images/我的/u48.png" alt="" /> -->
						<uni-icons type="gear" size="25" color="#ED7748"></uni-icons>
					</navigator>
				</view>
			</view>
			<image class="arc-line" src="/static/icon/arc.png" mode="aspectFill"></image>
		</view>

		<!-- 	<view class="money-wrap">
			<view class="item center" hover-class="hover-gray" :hover-stay-time="50" >
				<text class="num">
					0
				</text>
				<text>余额</text>
			</view>
			<view class="item center" hover-class="hover-gray" :hover-stay-time="50">
				<text class="num"> 0 </text>
				<text>优惠券</text>
			</view> -->
		<!--  hover-class="hover-gray" :hover-stay-time="50" -->
		<!-- <view class="item center">
				<text class="num">0</text>
				<text>积分</text>
			</view>
		</view> -->
		<!-- 订单 -->
		<view class="order-wrap">
			<view class="o-header row">
				<text class="tit">我的订单</text>
				<view class="more">
					<navigator url="../user/myOrder/myOrder?orderType=1">
						查看全部订单
						<text class="mix-icon icon-you"></text>
					</navigator>
				</view>
			</view>
			<view class="o-list">
				<navigator url="../user/myOrder/myOrder?orderType=2" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daifukuan"></text> -->
					<img src="/static/images/我的/u56.png" alt="" />
					<text>待付款</text>
					<text class="number">0</text>
				</navigator>
				<navigator url="../user/myOrder/myOrder?orderType=3" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daifahuo"></text> -->
					<img src="/static/images/我的/u54.png" alt="" />
					<text>待发货</text>
					<text class="number">0</text>
				</navigator>
				<navigator url="../user/myOrder/myOrder?orderType=4" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-yishouhuo"></text> -->
					<img src="/static/images/我的/u52.png" alt="" />
					<text>待收货</text>
					<text class="number">0</text>
				</navigator>
				<navigator url="../user/myOrder/myOrder?orderType=6" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u50.png" alt="" />
					<text>售后</text>
					<text class="number">0</text>
				</navigator>
			</view>
		</view>
		<view class="order-wrap">
			<view class="o-list">
				<navigator url="../user/myBalance/myBalance" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u74.png" alt="" />
					<text>我的余额</text>
				</navigator>
				<navigator url="../user/myCollection/myCollection" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u72.png" alt="" />
					<text>我的收藏</text>
				</navigator>
				<navigator url="../user/myCoupon/myCoupon" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u70.png" alt="" />
					<text>工品券</text>
				</navigator>
				<navigator class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u68.png" alt="" />
					<text>常购清单</text>
				</navigator>
			</view>
			<view class="o-list">
				<navigator class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u76.png" alt="" />
					<text>发票管理</text>
				</navigator>
				<navigator url="../address/addressManage/addressManage" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u78.png" alt="" />
					<text>收货地址</text>
				</navigator>
				<navigator url="../user/demands/demands" class="item center" hover-class="hover-gray" :hover-stay-time="50">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u378.png" alt="" />
					<text>产品需求</text>
				</navigator>
				<view class="item center" hover-class="hover-gray" @click="open">
					<!-- <text class="mix-icon icon-daipingjia"></text> -->
					<img src="/static/images/我的/u80.png" alt="" />
					<text>客服热线</text>
				</view>
			</view>
		</view>
		<!-- 客服电话 -->
		<uni-popup ref="telPop" type="bottom">
			<view class="telPop">
				<view class="telPop-t radio" @click="telphone">
					<uni-icons type="phone-filled" size="35" color="#6a696a"></uni-icons>
					&nbsp;
					<text>呼叫&nbsp;18757815753</text>
				</view>
				<view class="telPop-b radio" @click="close()"><text>取消</text></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import tabbarMixin from './mixin/tabbar';
export default {
	mixins: [tabbarMixin],
	data() {
		return {
			historyList: [],
			hasLogin: true
		};
	},
	methods: {
		open() {
			this.$refs.telPop.open();
			console.log(this.$md5('18757815753'));
		},
		close() {
			this.$refs.telPop.close();
		},
		telphone() {
			uni.makePhoneCall({
				phoneNumber: '18757815753'
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
</style>
<style scoped lang="scss">
.row {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
}
.center {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
}
.app {
	padding-bottom: 20rpx;
}
.top {
	position: relative;
	overflow: hidden;
	padding-top: calc(var(--status-bar-height) + 52rpx);
	padding-bottom: 6rpx;

	.u-bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 330rpx;
	}
	.user-wrapper {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		flex-direction: row;
		align-items: center;
		position: relative;
		z-index: 5;
		padding: 20rpx 30rpx 60rpx;
	}
	.login-box {
		font-size: 36rpx;
		color: #fff;
	}
	.avatar {
		flex-shrink: 0;
		width: 130rpx;
		height: 130rpx;
		// border-radius: 100px;
		margin-right: 24rpx;
		// border: 4rpx solid #fff;
		// background-color: #fff;
	}
	.username {
		font-size: 34rpx;
		color: #fff;
	}
	.user-iphone {
		font-size: 24rpx;
		color: #fff;
		margin-top: 16rpx;
		padding-top: 16rpx;
	}
	.user-group {
		align-self: flex-start;
		padding: 10rpx 16rpx;
		margin-top: 16rpx;
		font-size: 20rpx;
		color: #fff;
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 100rpx;
	}
	.arc-line {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 9;
		width: 100%;
		height: 32rpx;
	}
}
.money-wrap {
	display: flex;
	justify-content: space-around;
	width: 700rpx;
	margin: 6rpx auto 0;
	padding: 14rpx 0;
	background: #fff;
	border-radius: 10rpx;

	.item {
		flex-direction: column;
		width: 130rpx;
		height: 120rpx;
		border-radius: 8rpx;
		font-size: 24rpx;
		color: #606266;
	}
	.num {
		margin-bottom: 20rpx;
		font-size: 32rpx;
		color: #333;
		font-weight: 700;
	}
}
.order-wrap {
	width: 700rpx;
	margin: 20rpx auto 0;
	background: #fff;
	border-radius: 10rpx;

	.o-header {
		padding: 28rpx 20rpx 6rpx 26rpx;

		.tit {
			flex: 1;
			font-size: 32rpx;
			color: #333;
			font-weight: 700;
		}
		.more {
			font-size: 24rpx;
			color: #999;
		}
		.icon-you {
			margin-left: 4rpx;
			font-size: 20rpx;
			color: #999;
		}
	}
	.o-list {
		display: flex;
		justify-content: space-around;
		padding: 20rpx 0;
	}
	.item {
		flex-direction: column;
		width: 130rpx;
		height: 130rpx;
		border-radius: 8rpx;
		font-size: 24rpx;
		color: #606266;
		position: relative;

		.mix-icon {
			font-size: 50rpx;
			margin-bottom: 20rpx;
			color: #2483d9;
		}
		.icon-shouhoutuikuan {
			font-size: 44rpx;
		}
	}
	.number {
		position: absolute;
		right: 22rpx;
		top: 6rpx;
		min-width: 34rpx;
		height: 34rpx;
		line-height: 30rpx;
		text-align: center;
		padding: 0 8rpx;
		font-size: 18rpx;
		color: #fff;
		border: 2rpx solid #fff;
		background-color: #fff;
		border-radius: 100rpx;
	}
}
.option-wrap {
	width: 700rpx;
	margin: 20rpx auto 0;
	margin-top: 20rpx;
	background: #fff;
	border-radius: 10rpx;

	.sec-header {
		padding: 26rpx 14rpx 0 24rpx;
		font-size: 28rpx;
		color: #333;

		.icon-lishijilu {
			font-size: 46rpx;
			color: #50bf8b;
			margin-right: 16rpx;
			line-height: 40rpx;
		}
		.icon-lajitong {
			padding: 4rpx 10rpx;
			font-size: 36rpx;
			color: #999;
		}
	}
	.pro-list {
		flex-wrap: nowrap;
		padding: 20rpx 0 12rpx;

		&:before,
		&:after {
			content: '';
			min-width: 30rpx;
			height: 30rpx;
		}
		&:after {
			min-width: 20rpx;
		}
		image {
			flex-shrink: 0;
			width: 144rpx;
			height: 144rpx;
			margin-right: 16rpx;
			border-radius: 8rpx;
		}
	}
}
.telPop {
	width: 100%;
	height: 200rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 100rpx;
	z-index: 999;
	> .telPop-t,
	.telPop-b {
		width: 88%;
		height: 90rpx;
		background-color: #ffffff;
		margin: 0 auto;
		text-align: center;
		line-height: 92rpx;
		> text {
			color: #3366cc;
			font-size: 40rpx;
		}
	}
	> .telPop-t {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
		> .icon_box {
			margin: 20rpx 10rpx 0 0;
		}
	}
	> .telPop-b {
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 15px;
	}
}
</style>
