<template>
	<view class="user_data">
		<view class="item">
			<view class="user_iphone"><input type="text" placeholder="请输入手机号" style="min-height: 25px;" placeholder-style="font-size:14px;"/></view>
		</view>
		<view class="item">
			<view class="bind_code">
				<input type="text" placeholder="请输入验证码" style="flex: 1 1 0%;min-height: 25px;" placeholder-style="font-size:14px;">
				<view class="Vfcode">获取验证码</view>
			</view>
		</view>
		<view class="item">
			<view class="defineBtn">
				<view>
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped lang="scss">
page {
	background: #f2f2f2;
}
.user_data {
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.item{
	margin-top: 5px;
	margin-bottom: 10px;
}
.user_iphone {
	margin: 5px 8px;
	border: 1px solid #e0e0e0;
	padding: 5px 20px;
	border-radius: 37px;
	height: 40px;
}
.bind_code {
	margin: 5px 8px;
	border: 1px solid #e0e0e0;
	padding: 5px 20px;
	border-radius: 37px;
	display: flex;
	height: 40px;
}
.Vfcode{
	border-left: 1px solid #E0E0E0;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 14px;
	line-height: 27px;
}
.defineBtn{
	text-align: center;
	padding: 15px 10px;
}
.defineBtn view{
	width: 90%;
    height: 34px;
    background-color: #2483D9;
    color: #fff;
    border-radius: 18px;
    line-height: 32px;
    margin: 0 auto;
}
</style>
