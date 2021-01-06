<template>
	<view>
		<view class="user_data" v-if="addressList.length == 0">
			
		</view>
		<view class="user_data"></view>
		<view class="bottomBtn">
			<view>添加新地址</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user_data {
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.bottomBtn{
	
}
</style>
