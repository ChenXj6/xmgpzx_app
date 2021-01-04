<template>
	<view class="user_data">
		<navigator url="./loginPasswordRule/loginPasswordRule" class="install_list">
			<view class="list_title">登录密码管理</view>
			<view class="list_icon"><text class="mix-icon icon-you"></text></view>
		</navigator>
		<navigator url="./payPasswordRule/payPasswordRule" class="install_list">
			<view class="list_title">支付密码管理</view>
			<view class="list_icon"><text class="mix-icon icon-you"></text></view>
		</navigator>
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
</style>
