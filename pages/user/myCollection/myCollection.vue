<template>
	<view>
		<view class="collectionHead">
			<view>
				全部收藏
			</view>
			<view @click=" radioShow = radioShow ? false : true">
				{{radioShow | getCk(radioShow)}}
			</view>
		</view>
		<view class="goodsList">
			<view class="goods_info">
				<view class="goods_active">
					<radio v-if="radioShow"></radio>
				</view>
				<view class="goods_img">
					<img src="/static/images/我的/u305.png" alt="">
				</view>
				<view class="goods_data">
					<view>SH·H10Mn2  埋弧焊丝  4.0(250kg)mm</view>
					<view class="goods_info_stock">
						<view style="flex: 1 1 0%;color: #CCCCCC;">仓库：</view>
						<view style="flex: 1 1 0%;color: #CCCCCC;">库存：</view>
					</view>
					<view style="color: #CCCCCC;">
						起订量：
					</view>
					<view class="goods_info_stock" style="justify-content: space-between;">
						<view><span style="color:#FF6600;">￥100</span>/箱</view>
						<view>
							<uni-icons type="plus-filled" size="25" color="#2483D9"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radioShow:false
			}
		},
		filters:{
			//管理
			getCk(val){
				if (val) {
				return val = '完成'
				} else {
				return val = '管理'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
view{
	font-size: 14px;
}
.collectionHead{
	display: flex;
	justify-content: space-between;
	padding: 20rpx;
}
.goods_info{
	display: flex;
	height: 200rpx;
	padding: 20rpx;
	background-color: #fff;
}
.goods_active{
	line-height: 160rpx;
	width: 60rpx;
}
.goods_img{
	border:2rpx solid #F2F2F2; 
	height: 160rpx;
	width: 160rpx;
}
.goods_img img{
	height: 100%;
	width: 100%;
}
.goods_data{
	padding:10rpx 20rpx;
}
.goods_info_stock{
	display: flex;
}
</style>
