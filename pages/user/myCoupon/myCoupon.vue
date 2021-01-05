<template>
	<view>
		<view class="couponType">
			<view class="couponTypeList" @click="activeType(1)">
				<view class="list_title">未使用</view>
				<view class="list_title" v-if= "activeShow == 1"><img src="/static/images/我的/u925.png" alt=""></view>
			</view>
			<view class="couponTypeList" @click="activeType(2)">
				<view class="list_title">已使用</view>
				<view class="list_title" v-if= "activeShow == 2"><img src="/static/images/我的/u925.png" alt=""></view>
			</view>
			<view class="couponTypeList" @click="activeType(3)">
				<view class="list_title">已过期</view>
				<view class="list_title" v-if= "activeShow == 3"><img src="/static/images/我的/u925.png" alt=""></view>
			</view>
		</view>
		<view class="item" v-if="list.length > 0">
			<view class="width100 flex_row_c_c marginTop_45rpx" v-for="(item, index) in list" :key="index">
				<QSCoupon>
					<!-- 需要定义宽高，比例最好与遮罩图片相等 -->
					<view class="flex_row coupon"
					:style="{
						'background-color': item.backgroundColor,
						'color': item.color
					}">
					<!-- 根据内部比例设置flex属性 -->
						<view class="padding_15rpx flex_column_between_none fontSize_23rpx" style="flex: 519;">
							<view class="flex_row" style="height: 100px;border-bottom: 1px dashed #fff;">
								<view style="font-size: 20px;line-height: 130px;">￥</view>
								<view class="fontSize_55px flex_row_c_c" style="padding:10px;">
									90
								</view>
								<view style="text-align: center;padding: 10px;">
									<view style="font-size: 30px;">
										优惠券
									</view>
									<view class="">
										单笔满XXX享用
									</view>
								</view>
							</view>
							<view>
								<view style="text-align: end;padding-right: 10px;">
									有效期至 xxxx.xx.xx
								</view>
							</view>
						</view>
						<view class="flex_row_c_c fontSize_21rpx" style="flex: 182;">
							立即使用
						</view>
					</view>
				</QSCoupon>
			</view>
		</view>
		<view v-if="list.length == 0" class="noGoods">
			<view>
				<img src="/static/images/我的/u305.png" alt="">
			</view>
			<view>无更多数据</view>
		</view>
	</view>
</template>

<script>
	import QSCoupon from '@/components/QS-coupon/QS-coupon.vue';
	export default {
		components: {
			QSCoupon
		},
		data() {
			return {
				activeShow:1,
				list: [
					{
						backgroundColor: '#469CE2',
						color: 'white'
					},
					{
						backgroundColor: '#99C043',
						color: 'white'
					}
				]
			}
		},
		methods: {
			activeType(type){
				this.activeShow = type;
			}
		}
	}
</script>

<style scoped>
.item{
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.couponType{
	display: flex;
	height: 50px;
}
.couponTypeList{
	width: 33%;
	text-align: center;
	display: flex;
	flex-direction: column;
	padding: 10px;
}
.list_title{
	width: 50%;
	margin: 0 auto;
	height: 7px;
}
.noGoods{
	text-align: center;
	padding: 20px;
	padding-top:40px;
}
.noGoods view{
	padding: 10px;
	margin: 0 auto;
	font-size: 14px;
}
.displayNone{
	display: none;
}


.bg{
		background: url("http://imgsrc.baidu.com/forum/w%3D580/sign=f992cfd546fbfbeddc59367748f1f78e/6c7667d0f703918f03d163205c3d269758eec4ad.jpg");
		background-repeat: repeat-y;
		background-size: contain;
		background-origin: border-box;
	}
.coupon{
	width: 600rpx;
	height: 234rpx;
}
/*每个页面公共css */
.marginTop_45rpx {
	margin-top: 45rpx;
}
.null_20rpx{
	height: 20rpx;
}
.fontSize_21rpx {
	font-size: 21rpx;
}
.fontSize_55px {
	font-size: 55px;
	font-weight: bold;
}
.fontSize_23rpx {
	font-size: 23rpx;
}
.flex_column_between_none {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.padding_15rpx {
	padding: 15rpx;
}
.flex_row {
	display: flex;
	flex-direction: row;
}
.flex_row_c_c {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.flex_column {
	display: flex;
	flex-direction: column;
}
.width100 {
	width: 100%;
}
</style>
