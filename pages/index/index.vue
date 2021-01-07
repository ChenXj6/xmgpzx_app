<template>
	<view class="content">
		<view style="height: 88rpx;"></view>
		<view class="search_box">
			<view class="search_l">
				<view class="search_l_icon"><uni-icons type="search" size="26" color="#808080"></uni-icons></view>
				<input type="text" v-model="searchVal" placeholder="请输入产品名称" class="search_l_input" @blur="search" />
			</view>
			<view class="search_r">
				<uni-icons type="headphones" size="26" color="#f5f5f5" @click="open('open')"></uni-icons>
				<!-- <image src="/static/images/首页/u146.png" mode=""></image> -->
			</view>
		</view>
		<view class="main">
			<!-- 蓝色背景 -->
			<view class="backGc"></view>
			<!-- banner -->
			<view class="bannerBox">
				<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000" class="banner">
					<swiper-item v-for="(item, key) in banner" :key="key">
						<navigator class="swiper-item" style="height: 100%;" :url="item.url"><image :src="item.path" mode="" class="banner_img radio"></image></navigator>
					</swiper-item>
				</swiper>
			</view>
			<!-- 四个板块 -->
			<view class="mtBox">
				<view class="mt">
					<navigator url="../goodsClass/goodClass" hover-class="none" class="mt_item">
						<image src="/static/images/首页/u106.png" mode=""></image>
						<p>分类</p>
					</navigator>
					<navigator url="#" hover-class="none" class="mt_item">
						<image src="/static/images/首页/u104.png" mode=""></image>
						<p>领券</p>
					</navigator>
					<navigator url="./brandList/brandList" hover-class="none" class="mt_item">
						<image src="/static/images/首页/u110.png" mode=""></image>
						<p>品牌</p>
					</navigator>
					<navigator url="#" class="mt_item">
						<image src="/static/images/首页/u108.png" mode=""></image>
						<p>常购清单</p>
					</navigator>
				</view>
			</view>
			<!-- 商品类型 -->
			<view class="goodTypes_box">
				<!-- <view class=""> -->
				<navigator url="#" hover-class="none" class="goodTypes_l radio"><p class="fontColor">焊丝</p></navigator>
				<!-- </view> -->
				<view class="goodTypes_r">
					<view class="goodTypes_r_t">
						<navigator url="#" hover-class="none" class="goodTypes_r_t_item radio"><p>焊剂</p></navigator>
						<navigator url="#" hover-class="none" class="goodTypes_r_t_item goodTypes_r_t_item2 radio"><p>配件</p></navigator>
					</view>
					<navigator url="#" hover-class="none" class="goodTypes_r_b radio"><p>焊条</p></navigator>
				</view>
			</view>
			<!-- 商品 -->
			<view class="goodsBox">
				<view class="goodsList">
					<view class="goodsList_t">
						<view class="goodsList_tilte"><text>不锈钢焊丝</text></view>
						<view class="goodsList_tag">精选</view>
					</view>
					<view class="goodsList_centent">
						<view class="goods_box radio">
							<view class="goods">
								<view class="goods_item_t"><image src="/static/images/首页/u22.png" mode=""></image></view>
								<view class="goods_item_b">
									<text>SH·S321</text>
									<text>不锈钢自动焊丝（MIG）</text>
								</view>
							</view>
						</view>
						<view class="goods_box radio">
							<view class="goods">
								<view class="goods_item_t"><image src="/static/images/首页/u22.png" mode=""></image></view>
								<view class="goods_item_b">
									<text>SH·S321</text>
									<text>不锈钢自动焊丝（MIG）</text>
								</view>
							</view>
						</view>
						<view class="goods_box radio">
							<view class="goods">
								<view class="goods_item_t"><image src="/static/images/首页/u22.png" mode=""></image></view>
								<view class="goods_item_b">
									<text>SH·S321</text>
									<text>不锈钢自动焊丝（MIG）</text>
								</view>
							</view>
						</view>
						<view class="goods_box radio">
							<view class="goods">
								<view class="goods_item_t"><image src="/static/images/首页/u22.png" mode=""></image></view>
								<view class="goods_item_b">
									<text>SH·S321</text>
									<text>不锈钢自动焊丝（MIG）</text>
								</view>
							</view>
						</view>
						<view class="goods_box radio">
							<view class="goods">
								<view class="goods_item_t"><image src="/static/images/首页/u22.png" mode=""></image></view>
								<view class="goods_item_b">
									<text>SH·S321</text>
									<text>不锈钢自动焊丝（MIG）</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 客服电话 -->
		<uni-popup ref="telPop" type="bottom">
			<view class="telPop">
				<view class="telPop-t radio" @click="telphone">
					<view class="icon_box">
						<uni-icons type="phone-filled" size="35" color="#6a696a"></uni-icons> &nbsp;
					</view>
					<text>呼叫&nbsp;18757815753</text>
				</view>
				<view class="telPop-b radio" @click="open('')">
					<text>取消</text>
				</view>
			</view>
		</uni-popup>
		<!-- 是否登录提示 -->
		<isLoginTip></isLoginTip>
	</view>
</template>

<script>
import isLoginTip from '@/components/isLoginTip/isLogin.vue'
export default {
	components:{isLoginTip},
	data() {
		return {
			searchVal: '',
			banner: [
				{ path: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2033921778,648007645&fm=26&gp=0.jpg', url: '#' },
				{
					path: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2131725628,796491501&fm=26&gp=0.jpg',
					url: '#'
				},
				{
					path:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180912%2F6e295e5cc30f4dd89558d5572f08c072.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612402052&t=5fdc9d2b51368de304436b1be1881eeb',
					url: '#'
				},
				{ path: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3914662575,1742900108&fm=26&gp=0.jpg', url: '#' }
			]
		};
	},
	onLoad() {
		
	},
	mounted(){
	},
	methods: {
		open(type) {
			console.log(this.$refs)
			if(type == 'open'){
				this.$refs.telPop.open();
			}else{
				this.$refs.telPop.close();
			}
		},
		telphone() {
			uni.makePhoneCall({
				phoneNumber: '18752225255'
			});
		},
		search(){
			console.log(this.searchVal)
		}
	}
};
</script>

<style lang="less" >
.content {
	width: 100%;
	position: relative;
}
.radio {
	border-radius: 10rpx;
}
.search_box {
	width: 100%;
	height: 88rpx;
	padding: 10rpx;
	background-color: #2483d9;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	> .search_l {
		width: 80%;
		height: 64rpx;
		background-color: #f2f2f2;
		border-radius: 40rpx;
		display: flex;
		align-content: center;
		justify-content: left;
		padding: 0 20rpx;
		font-size: 20rpx;
		> .search_l_icon {
			height: 100%;
			display: flex;
			align-items: center;
			margin-right: 10rpx;
		}
		> .search_l_input {
			height: 100%;
			width: 100%;
			color: #999999;
		}
	}
	> .search_r {
		width: 10%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		> image {
			width: 100%;
			height: 100%;
		}
	}
}


.main {
	height: auto;
	width: 100%;
	position: relative;
	background-color: #f2f2f2;
}
.backGc {
	height: 288rpx;
	width: 100%;
	position: absolute;
	background-color: #2483d9;
	border-radius: 0 0 50% 50%;
}
.bannerBox {
	width: 100%;
	height: 288rpx;
	padding: 20rpx 10rpx 0;
	box-sizing: border-box;
}
.banner {
	width: 95%;
	height: 100%;
	margin: 0 auto;
}
.banner_img {
	height: 100%;
	width: 100%;
}
.mtBox {
	width: 100%;
	height: 128rpx;
	/* margin-top: 10rpx; */
	padding: 10rpx;
	box-sizing: border-box;
	> .mt {
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		> .mt_item {
			width: 20%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			font-family: 'Arial Normal', 'Arial';
			font-weight: 400;
			font-style: normal;
			font-size: 13px;
			color: #333333;
			text-align: left;
			line-height: normal;
			> image {
				width: 54rpx;
				height: 54rpx;
			}
		}
	}
}

.goodTypes_box {
	width: 100%;
	height: 320rpx;
	padding: 0 10rpx;
	display: flex;
	justify-content: space-around;
	text-align: center;
	p {
		position: absolute;
		top: 50%;
		left: 50%;
		color: #333333;
		font-size: 30rpx;
		transform: translate(-50%, -50%);
	}
	.fontColor {
		color: #ffffff;
	}
	> .goodTypes_l {
		width: 49%;
		background-color: #003466;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	> .goodTypes_r {
		width: 49%;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		> .goodTypes_r_t {
			height: 49%;
			display: flex;
			justify-content: space-around;
			> .goodTypes_r_t_item {
				width: 49%;
				height: 100%;
				background-color: #99cdff;
				position: relative;
			}
			> .goodTypes_r_t_item2 {
				background-color: #99cc33;
			}
		}
		> .goodTypes_r_b {
			height: 49%;
			background-color: #cccccc;
			position: relative;
		}
	}
}

.goodsBox {
	width: 100%;
	padding: 10rpx;
	margin-top: 10rpx;
	> .goodsList {
		font-size: 36rpx;
		color: #333333;
		> .goodsList_t {
			height: 60rpx;
			position: relative;
			> .goodsList_tilte::before {
				position: absolute;
				content: '';
				background-color: #2483d9;
				width: 6rpx;
				height: 50rpx;
				top: 0;
				left: 0;
			}
			> .goodsList_tilte {
				display: inline-block;
				margin: 0 20rpx;
				> span {
					display: block;
					line-height: normal;
				}
			}
			> .goodsList_tag {
				display: inline-block;
				font-size: 28rpx;
				color: #ff6600;
				line-height: normal;
			}
		}
		> .goodsList_centent {
			// background-color: #333;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-content: flex-start;

			> .goods_box {
				width: 360rpx;
				height: 300rpx;
				background-color: #fff;
				margin-top: 10rpx;
				> .goods {
					padding: 20rpx;
					> .goods_item_t {
						height: 160rpx;
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						> image {
							height: 140rpx;
							width: 140rpx;
							// display: inline-block;
							// margin: 0 auto;
						}
					}
					> .goods_item_b {
						width: 100%;
						padding: 10rpx 0;
						box-sizing: border-box;
						font-size: 26rpx;
						color: #999999;
						text-align: center;
						> text:nth-child(1) {
							color: #333;
							font-weight: 700;
							display: block;
							margin: 10rpx 0;
						}
					}
				}
			}
		}
	}
}


.telPop{
	width: 100%;
	height: 200rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 100rpx;
	z-index: 999;
	>.telPop-t,.telPop-b{
		width: 88%;
		height: 90rpx;
		background-color: #FFFFFF;
		margin: 0 auto;
		text-align: center;
		line-height: 92rpx;
		>text{
			color: #3366CC;
			font-size: 40rpx;
		}
		
		
	}
	>.telPop-t{
		display: flex;
		justify-content: center;
		align-items: center;
		>.icon_box{
			margin: 20rpx 10rpx 0 0;
		}
	}
	>.telPop-b{
		height: 80rpx;
		line-height: 80rpx;
	}
}
</style>
