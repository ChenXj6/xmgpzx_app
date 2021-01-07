<template>
	<view class="content">
		<uni-nav-bar left-icon="back" title="" class="" @clickLeft="onClickLeft"></uni-nav-bar>
		<view class="goodDetailBox">
			<view class="bannerBox">
				<!-- :autoplay="true" -->
				<swiper :indicator-dots="true" :interval="5000" :duration="2000" class="banner">
					<swiper-item v-for="(item, key) in banner" :key="key">
						<navigator class="swiper-item" style="height: 100%;" :url="item.url"><image :src="item.path" mode="" class="banner_img radio"></image></navigator>
					</swiper-item>
				</swiper>
			</view>
			<!-- 商品参数 -->
			<view class="goodDetail">
				<view class="goodDetail_item">
					￥
					<text>3600</text>
					.00/箱
				</view>
				<view class="goodDetail_item">SH·Y308L 不锈钢药芯焊丝 1.2mm</view>
				<view class="goodDetail_item">
					<view class="goodDetail_item_tag">不可退换</view>
					<view class="goodDetail_item_tag">发货&售后</view>
					<view class="goodDetail_item_tag">可预付</view>
				</view>
				<view class="goodDetail_item">
					<view class="goodDetail_item_detail">
						<text>品名</text>
						<text>不锈钢药芯焊丝</text>
					</view>
					<text></text>
					<view class="goodDetail_item_detail">
						<text>品牌</text>
						<text>东风</text>
					</view>
					<text></text>
					<view class="goodDetail_item_detail">
						<text>尺寸</text>
						<text>1.2mm</text>
					</view>
					<text></text>
					<view class="goodDetail_item_detail" @click="openGoodSpecs">
						全部
						<br />
						规格
					</view>
				</view>
			</view>
			<!-- 购买单位&num -->
			<view class="payNum">
				<view class="payNum_t">
					<view class="payNum_t_title">购买单位</view>
					<radio-group @change="radioChange" class="radioList">
						<label class="uni-list-cell radio_item uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<radio :value="item.value" :checked="index === current" style="transform:scale(0.7)" />
							<text>{{ item.name }}</text>
						</label>
					</radio-group>
				</view>
				<view class="payNum_b">
					<text>数量：</text>
					<view class="payNum_b_r">
						<text @click="changeGoodNum('-')">-</text>
						<view class="payNum_b_r_input"><input type="text" :value="goodNum" /></view>
						<text @click="changeGoodNum('+')">+</text>
					</view>
					<text>箱</text>
				</view>
			</view>
			<!-- 商品介绍 -->
			<view class="goodContent">
				<view class="goodContent_title"><text>产品展示</text></view>
				<view class="goodContent_main"></view>
			</view>
		</view>
		<!-- 购物车 -->
		<view class="shopCarNav"><uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick"/></view>
		<view class="dianZi"></view>
		<!-- 规格弹窗 -->
		<uni-popup ref="goodSpecs" type="bottom">
			<view class="goodSpecsBox">
				<image src="/static/images/分类/u814.png" mode="" @click="closeGoodSpecs"></image>
				<view class="goodSpecs_t"><text>产品规格</text></view>
				<view class="goodSpecs_b">
					<view class="goodSpecs_b_item">
						<text>品名</text>
						<text>不锈钢药芯焊丝</text>
					</view>
					<view class="goodSpecs_b_item">
						<text>品牌</text>
						<text>东风</text>
					</view>
					<view class="goodSpecs_b_item">
						<text>尺寸</text>
						<text>1.2mm</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';
export default {
	components: { uniNavBar, uniGoodsNav },
	data() {
		return {
			// 规格弹窗
			isOpenGoodSpecs: true,
			banner: [
				{
					path: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2131725628,796491501&fm=26&gp=0.jpg',
					url: '#'
				},
				{ path: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2033921778,648007645&fm=26&gp=0.jpg', url: '#' },
				{
					path:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180912%2F6e295e5cc30f4dd89558d5572f08c072.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612402052&t=5fdc9d2b51368de304436b1be1881eeb',
					url: '#'
				},
				{ path: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3914662575,1742900108&fm=26&gp=0.jpg', url: '#' }
			],
			// 单位选择default
			current: 0,
			items: [
				{
					value: 'USA',
					name: '箱',
					checked: 'true'
				},
				{
					value: 'CHN',
					name: '拖（15箱）'
				}
			],
			// 商品购买数量
			goodNum: 1,
			// 购物车
			options: [
				{
					icon: 'chatboxes',
					text: '客服'
				},
				{
					icon: 'star',
					text: '收藏',
					// infoBackgroundColor: '#007aff',
				},
				{
					icon: 'cart',
					text: '购物车',
					info:0
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#2483d9',
					color: '#fff'
				},
			]
		};
	},
	methods: {
		// 单位选择
		radioChange(e) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === e.target.value) {
					this.current = i;
					break;
				}
			}
		},
		// 商品数量处理
		changeGoodNum(type) {
			if (type == '+') {
				this.goodNum++;
				return;
			}
			this.goodNum--;
		},
		// 购物车模板事件
		onClick (e) {
			console.log(e.index)
			uni.showToast({
			  title: `点击${e.content.text}`,
			  icon: 'none'
			})
		 },
		buttonClick (e) {
			console.log(e)
			this.options[2].info++
		 },
		// 返回按钮
		onClickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 规格
		openGoodSpecs() {
			this.$refs.goodSpecs.open();
		},
		closeGoodSpecs() {
			this.$refs.goodSpecs.close();
		}
	},
	mounted() {},
	created() {
		this.options[2].info = 23;
	},
	watch: {
		goodNum(val) {
			if (val <= 1) {
				this.goodNum = 1;
			}
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	height: auto;
	position: relative;
	font-size: 26rpx;
	color: #333333;
}
.banner {
	width: 100%;
	height: 100%;
	margin: 0 auto;
}
.banner_img {
	height: 100%;
	width: 100%;
}
.goodDetailBox {
	width: 100%;
	height: 1000rpx;
	// background-color: #007aff;
	> .bannerBox {
		width: 100%;
		height: 470rpx;
		margin-bottom: 16rpx;
		background-color: #ffffff;
	}
	> .goodDetail {
		width: 100%;
		height: 320rpx;
		background-color: #ffffff;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 16rpx;
		justify-content: space-between;
		> .goodDetail_item {
			text-align: left;
			font-size: 26rpx;
			color: #333333;
			line-height: normal;
			font-weight: 400;
			width: 100%;
		}
		> .goodDetail_item:nth-child(1) {
			color: #ff6600;
			> text {
				font-size: 36rpx;
			}
		}
		> .goodDetail_item:nth-child(2) {
			font-size: 30rpx;
			font-weight: 700;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		> .goodDetail_item:nth-child(3) {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			text-align: center;
			> .goodDetail_item_tag {
				font-size: 20rpx;
				color: #2483d9;
				border-radius: 10rpx;
				border: 2rpx solid #2483d9;
				margin-right: 20rpx;
				line-height: 28rpx;
				padding: 5rpx 10rpx;
			}
		}
		> .goodDetail_item:nth-child(4) {
			width: 100%;
			height: 120rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			> .goodDetail_item_detail {
				width: 20%;
				height: 100%;
				display: flex;
				text-align: center;
				flex-direction: column;
				align-content: center;
				justify-content: space-evenly;
				> text:nth-child(1) {
					color: #a1a1a1;
				}
				> text:nth-child(2) {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			> text {
				width: 5rpx;
				height: 50%;
				background-color: #f2f2f2;
			}
		}
	}
	> .payNum {
		width: 100%;
		height: 250rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: #ffffff;
		padding: 20rpx;
		> .payNum_t {
			width: 100%;
			height: 150rpx;
			> .payNum_t_title {
				width: 100%;
				display: block;
				margin-bottom: 20rpx;
			}
			> .radioList {
				width: 100%;
				height: 50rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				> .radio_item {
					width: 200rpx;
					// height: 1rpx;
				}
			}
		}
		> .payNum_b {
			width: 100%;
			display: flex;
			height: 100rpx;
			align-items: center;
			justify-content: flex-start;
			> text {
				display: block;
				margin-right: 40rpx;
			}
			> .payNum_b_r {
				width: 312rpx;
				height: 66rpx;
				// background-color: #07C160;
				border: 2rpx solid #cccccc;
				border-radius: 66rpx;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 0 5rpx;
				align-items: center;
				line-height: 66rpx;
				margin-right: 40rpx;
				> text {
					width: 20%;
					height: 100%;
					text-align: center;
					font-size: 50rpx;
					font-weight: 700;
					margin: 0 10rpx;
				}
				> .payNum_b_r_input {
					width: 100%;
					border-left: 2rpx solid #cccccc;
					border-right: 2rpx solid #cccccc;
					display: flex;
					> input {
						// width: 60%;
						text-align: center;
						font-size: 26rpx;
					}
				}
			}
		}
	}
}
.goodContent {
	width: 100%;
	height: 200rpx;
	background-color: #ffffff;
	> .goodContent_title {
		width: 100%;
		height: 40rpx;
		border-bottom: 2rpx solid #2483d9;
		box-sizing: border-box;
		font-size: 20rpx;
		overflow: hidden;
		> text {
			display: block;
			color: #ffffff;
			// background-color: #2483d9;
			width: 130rpx;
			height: 40rpx;
			border-bottom: 130rpx solid #2483d9;
			border-right: 30rpx solid transparent;
			text-align: center;
			line-height: 40rpx;
		}
	}
}
// 购物车
.shopCarNav {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #ffffff;
	height: 100rpx;
	border-top: 2rpx solid #cccccc;
}
.dianZi {
	width: 100%;
	height: 100rpx;
}

// 规格弹窗
.goodSpecsBox {
	width: 100%;
	min-height: 500rpx;
	background-color: #ffffff;
	border-radius: 40rpx 40rpx 0 0;
	position: relative;
	padding: 80rpx 50rpx 20rpx;
	box-sizing: border-box;
	> image {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		width: 60rpx;
		height: 60rpx;
	}
	> .goodSpecs_t {
		color: #333333;
		font-size: 36rpx;
		font-weight: 500;
		height: 100rpx;
	}
	> .goodSpecs_b {
		min-height: 300rpx;
		height: auto;
		max-height: 1000rpx;
		overflow: scroll;
		font-size: 26rpx;
		> .goodSpecs_b_item {
			width: 100%;
			color: #333;
			display: flex;
			align-items: center;
			height: 60rpx;
			margin: 20rpx 0;
			> text:nth-child(1) {
				display: block;
				margin-right: 40rpx;
				color: #999999;
			}
		}
	}
}
</style>
