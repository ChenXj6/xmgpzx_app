<template>
	<view class="app">
		<view class="head_img"><img src="/static/images/我的/u196.png" alt="" /></view>
		<view class="user_data">
			<view class="data_list">
				<view class="data_title">用户名：</view>
				<view class="title_info">张三</view>
				<text style="width: 16px;"></text>
			</view>
			<view class="data_list">
				<view class="data_title">手机号：</view>
				<view class="title_info">1555555555</view>
				<text class="mix-icon icon-you"></text>
			</view>
			<view class="data_list">
				<view class="data_title">真实姓名：</view>
				<view class="title_info">张老三</view>
				<text style="width: 16px;"></text>
			</view>
			<view class="data_list">
				<view class="data_title">邮箱:</view>
				<view class="title_info">15555555555@qq.com</view>
				<text style="width: 16px;"></text>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
// import tabbarMixin from './mixin/tabbar'
export default {
	// mixins: [tabbarMixin],
	data() {
		return {
			historyList: [],
			hasLogin: true
		};
	}
};
</script>

<style scoped lang="scss">
page {
	background: #f2f2f2;
}
.head_img {
	height: 134px;
	text-align: center;
	padding: 10px;
}
.head_img img {
	width: 30%;
	height: 80%;
	margin-top: 5px;
}
.user_data {
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.data_list {
	display: flex;
	padding: 8px 5px;
}
.data_title {
	font-size: 14px;
	width: 80px;
}
.title_info {
	border-bottom: 1px solid #f2f2f2;
	flex: 1;
	text-align: right;
	font-size: 14px;
}
</style>
