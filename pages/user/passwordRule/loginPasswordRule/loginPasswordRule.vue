<template>
	<view class="items">
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
			<view class="user_iphone"><input type="text" placeholder="请输入新密码" style="min-height: 25px;" placeholder-style="font-size:14px;"/></view>
		</view>
		<view class="item">
			<view class="user_iphone"><input type="text" placeholder="确认新密码" style="min-height: 25px;" placeholder-style="font-size:14px;"/></view>
		</view>
		<view class="items">
			<view class="defineBtn">
				<view>
					重置密码
				</view>
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
.items {
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
.defineBtn{
	text-align: center;
	/* padding: 15px 10px; */
}
.defineBtn view{
	width: 100%;
	height: 40px;
	background-color: #2483D9;
	color: #fff;
	-webkit-border-radius: 18px;
	border-radius: 18px;
	line-height: 40px;
	margin: 0 auto;
}
</style>
