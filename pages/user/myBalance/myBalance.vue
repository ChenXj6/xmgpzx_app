<template>
	<view>
		<view class="user_data" style="text-align: center;">
			<view>可用余额</view>
			<view class="font_bold font_19PX">￥<span>000</span></view>
		</view>
		<view class="user_data">
			<view class="install_list space_between">
				<view>充值余额</view>
				<view class="right_color">￥111</view>
			</view>
			<view class="install_list space_between">
				<view>信用额度</view>
				<view class="right_color">0</view>
			</view>
			<view class="install_list space_between">
				<view>是否逾期</view>
				<view class="right_color">未逾期</view>
			</view>
			<view class="install_list space_between">
				<view>预付款上浮比</view>
				<view class="right_color">0%</view>
			</view>
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
.space_between{
	justify-content: space-between;
}
.right_color{
	color: #C4C4C4;
}
.font_bold{
	font-weight: bold;
}
.font_19PX{
	font-size: 19px;
}
</style>
