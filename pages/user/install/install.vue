<template>
	<view :style="'height:'+ScreenHigh+'px;position:relative;'">
		<view class="user_data">
			<navigator class="install_list">
				<view class="list_title">《工品易达服务条款》</view>
				<view class="list_icon"><text class="mix-icon icon-you"></text></view>
			</navigator>
			<view class="install_list">
				<view class="list_title clearCache" @click="open">
					<view>清除缓存</view>
					<view>111MB</view>
				</view>
				<view class="list_icon"><text class="mix-icon icon-you"></text></view>
				
			</view>
			<navigator url="../passwordRule/passwordRule" class="install_list" style="border: 0;">
				<view class="list_title">密码管理</view>
				<view class="list_icon">
					<text class="mix-icon icon-you"></text>
				</view>
			</navigator>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="clearCacheBox">
				<view style="padding: 40rpx 70rpx;">
					确认清除缓存？
				</view>
				<view class="clearBtn">
					<view @click="close()" class="qxBtn">取消</view>
					<view class="qdBtn">确定</view>
				</view>
			</view>
		</uni-popup>
		<view class="logout">
			<view class="logoutBtn">退出登录</view>
		</view>
	</view>
	
</template>

<script>
	import { mapState, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				ScreenHigh:""
			}
		},
		onLoad(){
			let _this = this;
			uni.getSystemInfo({
				success: function (res) {
					_this.ScreenHigh = res.windowHeight;
				}
			});
		},
		methods: {
			open() {
				this.$refs.popup.open();
			},
			close(){
				this.$refs.popup.close();
			}
		}
	}
</script>

<style scoped lang="scss">
.user_data {
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.install_list{
	border-bottom: 1px solid #F2F2F2;
	height: 35px;
	padding: 5px;
	display: flex;
}
.list_title{
	flex: 1;
	font-size: 14px;
}
.clearCache{
	display: flex;
	justify-content: space-between;
}
.logout{
	position: absolute;
	height: 50px;
	text-align: center;
	line-height: 50px;
	width: 100%;
	bottom: 40px;
	padding: 10px;
}
.logoutBtn{
	width: 90%;
	border: 1px solid #E0E0E0;
	background-color: #fff;
	border-radius: 27px;
	margin: auto;
}
.clearCacheBox{
	// width: 90%;
	background-color: #fff;
	border-radius: 10px;
	text-align: center;
}
.clearBtn{
	display: flex;
	text-align: center;
}
.clearBtn view{
	flex: 1 1 0%;
	background-color: #E4E4E4;
	padding: 20rpx;
}
.qxBtn{
	border-bottom-left-radius: 10px;
	border-right:1rpx solid #C0C0C0;
}
.qdBtn{
	border-bottom-right-radius: 10px;
	color: #2483D9;
	border-left:1rpx solid #C0C0C0;
}
</style>
