<template>
	<view class="content">
		<!-- 占位 -->
		<view style="height: 168rpx;background-color: #fff;"></view>
		<!-- 上部固定 -->
		<view class="search_box">
			<uni-nav-bar left-icon="back" right-icon="cart" title="" class="" @clickLeft="onClickLeft" @clickRight="onClickRight">
				<view class="search_l">
					<view class="search_l_icon"><uni-icons type="search" size="24" color="#808080"></uni-icons></view>
					<input type="text" v-model="searchVal" :placeholder="blackInput ? '' : '请输入产品名称'" class="search_l_input" @focus="onFocus" @blur="search"  />
					<view class="blackInput" v-if="blackInput"><text>{{blackInput}}</text><uni-icons type="close" color="#fff" class="closeIcon" @click="blackInput = ''"></uni-icons></view>
				</view>
			</uni-nav-bar>
			<!-- 商品筛选 -->
			<scroll-view class="scroll-view_H" show-scrollbar="false" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H uni-bg-red " :class="defaultActive == 1 ? 'active' : ''" @click="openChooseClass(1)">仓库</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green" :class="defaultActive == 2 ? 'active' : ''" @click="openChooseClass(2)">品牌</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue " :class="defaultActive == 3 ? 'active' : ''" @click="openChooseClass(3)">规格</view>
				<view id="demo4" class="scroll-view-item_H uni-bg-red" :class="defaultActive == 4 ? 'active' : ''" @click="openChooseClass(4)">材质</view>
				<view id="demo5" class="scroll-view-item_H uni-bg-green" :class="defaultActive == 5 ? 'active' : ''" @click="openChooseClass(5)">分类</view>
				<view id="demo6" class="scroll-view-item_H uni-bg-blue" :class="defaultActive == 6 ? 'active' : ''" @click="openChooseClass(6)">型号</view>
				<!-- 选择弹出框 -->
				<view class="chooseClassBox" v-if="isOpenChooseClass" @click.self="closeChooseClass">
					<view class="chooseClass">
						<view class="goodClass" @click="chooseClassType('焊丝',1)">
							<text>不锈钢焊丝</text>
						</view>
						<view class="goodClass" @click="chooseClassType('焊丝',2)">
							<text class="sureClass">碳钢焊丝</text>
						</view>
					</view>
					<!-- Button -->
					<view class="btnBox">
						<view class="resetBtn">
							重置
						</view>
						<view class="confirmBtn">
							确定
						</view>
					</view>
				</view>
			</scroll-view>			
		</view>
		<!-- 商品列表 -->
		<view class="goods_box">
			<!-- good -->
			<view class="goods" >
				<view class="goods_l" @click="goodDetail()">
					<image src="/static/images/首页/u68.png" mode=""></image>
				</view>
				<view class="goods_r">
					<view class="goods_r_item" @click="goodDetail()">
						SH·Y308L 不锈钢药芯焊丝 1.2mmSH·Y308L 不锈钢药芯焊丝 1.2mm		
					</view>
					<view class="goods_r_item" @click="goodDetail()">
						<text>仓库：厦门仓</text>
						<text>库存：89箱</text>
					</view>
					<view class="goods_r_item" @click="goodDetail()">
						<text>起订量：10箱</text>
						<text></text>
					</view>
					<view class="goods_r_item">
						<text v-if="!isLogin" class="price">会员价</text>
						<text v-else><text class="price">￥3600.00</text>&nbsp;/箱</text>
						<text @click="openShopCar">+</text>
					</view>
				</view>
			</view>
			
			
			<!-- j假数据 -->
			<view class="goods">
				<view class="goods_l">
					<image src="/static/images/首页/u68.png" mode=""></image>
				</view>
				<view class="goods_r">
					<view class="goods_r_item">
						SH·Y308L 不锈钢药芯焊丝 1.2mmSH·Y308L 不锈钢药芯焊丝 1.2mm		
					</view>
					<view class="goods_r_item">
						<text>仓库：厦门仓</text>
						<text>库存：89箱</text>
					</view>
					<view class="goods_r_item">
						<text>起订量：10箱</text>
						<text></text>
					</view>
					<view class="goods_r_item">
						<text v-if="!isLogin" class="price">会员价</text>
						<text v-else><text class="price">￥3600.00</text>&nbsp;/箱</text>
						<text>+</text>
					</view>
				</view>
			</view>
			<view class="goods">
				<view class="goods_l">
					<image src="/static/images/首页/u68.png" mode=""></image>
				</view>
				<view class="goods_r">
					<view class="goods_r_item">
						SH·Y308L 不锈钢药芯焊丝 1.2mmSH·Y308L 不锈钢药芯焊丝 1.2mm		
					</view>
					<view class="goods_r_item">
						<text>仓库：厦门仓</text>
						<text>库存：89箱</text>
					</view>
					<view class="goods_r_item">
						<text>起订量：10箱</text>
						<text></text>
					</view>
					<view class="goods_r_item">
						<text v-if="!isLogin" class="price">会员价</text>
						<text v-else><text class="price">￥3600.00</text>&nbsp;/箱</text>
						<text>+</text>
					</view>
				</view>
			</view>
			<view class="goods">
				<view class="goods_l">
					<image src="/static/images/首页/u68.png" mode=""></image>
				</view>
				<view class="goods_r">
					<view class="goods_r_item">
						SH·Y308L 不锈钢药芯焊丝 1.2mmSH·Y308L 不锈钢药芯焊丝 1.2mm		
					</view>
					<view class="goods_r_item">
						<text>仓库：厦门仓</text>
						<text>库存：89箱</text>
					</view>
					<view class="goods_r_item">
						<text>起订量：10箱</text>
						<text></text>
					</view>
					<view class="goods_r_item">
						<text v-if="!isLogin" class="price">会员价</text>
						<text v-else><text class="price">￥3600.00</text>&nbsp;/箱</text>
						<text>+</text>
					</view>
				</view>
			</view>
			<view class="goods">
				<view class="goods_l">
					<image src="/static/images/首页/u68.png" mode=""></image>
				</view>
				<view class="goods_r">
					<view class="goods_r_item">
						SH·Y308L 不锈钢药芯焊丝 1.2mmSH·Y308L 不锈钢药芯焊丝 1.2mm		
					</view>
					<view class="goods_r_item">
						<text>仓库：厦门仓</text>
						<text>库存：89箱</text>
					</view>
					<view class="goods_r_item">
						<text>起订量：10箱</text>
						<text></text>
					</view>
					<view class="goods_r_item">
						<text v-if="!isLogin" class="price">会员价</text>
						<text v-else><text class="price">￥3600.00</text>&nbsp;/箱</text>
						<text @click="openShopCar">+</text>
					</view>
				</view>
			</view>
			
		</view>
		<!-- 登录提示 -->
		<isLoginTip class="isLoginTip"></isLoginTip>
		<!-- 购物弹窗 -->
		<uni-popup ref="shopcar" type="center">
			<view class="shopCarBox">
				<image src="/static/images/分类/u814.png" mode="" @click="closeShopCar"></image>
				<view class="shopCar_t">
					<view class="shopCar_t_l">
						<image src="/static/images/分类/u637.png" mode=""></image>
					</view>
					<view class="shopCar_t_r">
						<view class="shopCar_t_r_item">
							SH·Y308L 不锈钢药芯焊丝 1.2mmSH·Y308L 不锈钢药芯焊丝 1.2mm
						</view>
						<view class="shopCar_t_r_item">
							<text>单价：</text>
							<text>￥3600</text>
						</view>
						<view class="shopCar_t_r_item">
							<text>总价：</text>
							<text>￥18000</text>
						</view>
					</view>
				</view>
				<view class="shopCar_b">
					<view class="shopCar_b_num">
						<view class="shopCar_b_num_l">
							<text>起订量一箱</text>
						</view>
						<view class="shopCar_b_num_r">
							<text @click="changeGoodNum('-')">-</text>
							<view class="shopCar_b_num_r_input">
								<input type="text" :value="goodNum" />
								<text>箱</text>
							</view>
							<text @click="changeGoodNum('+')">+</text>
						</view>
					</view>
					<view class="shopCar_b_btn">
						<view class="closeBtn" @click="closeShopCar">
							取消
						</view>
						<view class="confirmBtn" @click="addShopCar">
							确定
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import isLoginTip from '@/components/isLoginTip/isLogin.vue';
import {isLogin} from '@/common/js/util.js'
export default {
	components: { uniNavBar , isLoginTip },
	data() {
		return {
			// 搜索框
			searchVal: '',
			blackInput:'SH-Y316L',
			// tip
			isLogin:false,
			// 种类选择
			isOpenChooseClass:false,
			defaultActive:0,
			old: {
				scrollTop: 0
			},
			// 商品默认数量
			goodNum:1
			
		};
	},
	methods: {
		// 返回按钮
		onClickLeft() {
			uni.navigateBack({
				delta: 2
			});
		},
		// 右边按钮
		onClickRight() {
			console.log('cart');
		},
		// 搜索
		search() {
			this.blackInput = this.searchVal;
			this.searchVal = '';
		},
		onFocus(){
			this.blackInput = '';
		},
		// 打开选择分类
		openChooseClass(type){
			this.defaultActive = type;
			this.isOpenChooseClass = true;
		},
		// 选择分类中具体的参数 
		chooseClassType(c,classType){
			
		},
		// 关闭选择分类
		closeChooseClass(){
			this.defaultActive = 0;
			this.isOpenChooseClass = false;
		},
		// 查看详情
		goodDetail(){
			uni.navigateTo({
			    url: './goodDetail?id='
			});
		},
		// 打开购物车弹窗
		openShopCar(){
			this.$refs.shopcar.open()
		},
		// 商品数量处理
		changeGoodNum(type){
			if(type == '+'){
				this.goodNum ++;
				return;
			}
			this.goodNum --;
		},
		// 购买
		addShopCar(){
			console.log(this.goodNum);
			this.closeShopCar();
		},
		// 关闭购物车弹窗
		closeShopCar(){
			this.$refs.shopcar.close()
		},
		// 分类滑动
		scroll: function(e) {
			this.old.scrollTop = e.detail.scrollTop;
		}
		
	},
	mounted() {
		
	},
	created() {
		this.isLogin = isLogin();
	},
	watch:{
		goodNum(val){
			if(val <= 1){
				this.goodNum = 1;
			}
		}
	}
};
</script>

<style lang="less" scoped>
page {
	background-color: #fff;
}
.content {
	width: 100%;
	height: auto;
	position: relative;
}
.search_box {
	position: fixed;
	top: 0;
	left: 0;
	height: 168rpx;
	z-index: 9999;
}
.search_l {
	width: 100%;
	height: 64rpx;
	background-color: #f2f2f2;
	border-radius: 40rpx;
	display: flex;
	align-content: center;
	justify-content: left;
	padding: 0 20rpx;
	position: relative;
	> .search_l_icon {
		height: 100%;
		display: flex;
		align-items: center;
	}
	> .search_l_input {
		height: 100%;
		width: 100%;
		color: #999999;
	}
	.uni-navbar__header-btns-left[data-v-4afea59e] {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		/* width: 75px; */
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		justify-content: flex-start;
	}
	>.blackInput{
		max-width:80%;
		text-align: center;
		height: 80%;
		padding: 0 60rpx 0 20rpx;
		background-color: #666666;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 40rpx;
		position: absolute;
		top: 50%;
		left: 74rpx;
		transform: translateY(-50%);
		>text{
			width: 100%;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			color: #F2F2F2;
			font-size: 26rpx;
		}
		>.closeIcon{
			display: block;
			position: absolute;
			top: 50%;
			right: 20rpx;
			transform: translateY(-50%);
			width: 40rpx;
			height: 40rpx;
			line-height: 40rpx;
		}
	}
}
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
	margin: 0 auto;
	// height: 80rpx;
	padding: 15rpx 20rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #FFFFFF;
	.active{
		// background: rgba(#2483D9 ,.2);
		color: #2483D9;
		height: 65rpx;
		border-radius: 30rpx 30rpx 0 0;
		z-index: 9999;
	}
}

.scroll-view-item {
	// height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	font-size: 36rpx;
}

.scroll-view-item_H {
	display: inline-block;
	width: 10%;
	min-width: 90rpx;
	height: 50rpx;
	line-height: 50rpx;
	background-color: #f2f2f2;
	border-radius: 30rpx ;
	margin: 0 15rpx;
	text-align: center;
	font-size: 26rpx;
	color: #333333;
}

.goods_box {
	width: 100%;
	padding: 10rpx 20rpx;
	.price{
		color: #ff6600;
	}
	>.goods{
		width: 100%;
		height: 250rpx;
		border-bottom:1rpx solid #f2f2f2 ;
		// background-color: #333;
		padding: 10rpx 0;
		display: flex;
		justify-content: space-around;
		>.goods_l{
			width: 30%;
			display: flex;
			align-items: center;
			// background-color: #007AFF;
			>image{
				display: block;
				margin: 0 auto;
				width: 180rpx;
				height: 180rpx;
			}
		}
		>.goods_r{
			width: 65%;
			padding: 15rpx;
			// background-color: #07C160;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-size: 26rpx;
			color: #868686;
			>.goods_r_item:nth-child(1){
				color: #333333;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			>.goods_r_item:nth-child(2){
				display: flex;
				justify-content: flex-start;
				>text:first-child{
					margin-right: 30rpx;
				}
			}
			>.goods_r_item:nth-child(4){
				display: flex;
				justify-content: space-between;
				height: 40rpx;
				line-height: 40rpx;
				>text:last-child{
					display: block;
					background-color: #007AFF;
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					color: #FFFFFF;
					text-align: center;
					line-height: 40rpx;
					margin-right: 5%;
				}
			}
		}
	}
}
.isLoginTip{
	position: fixed;
	bottom: 20rpx;
}

.chooseClassBox{
	width: 100%;
	height: 100%;
	background: rgba(#333,.3);
	position: fixed;
	top: 165rpx;
	left: 0;
	z-index: 99999;
	>.chooseClass{
		width: 100%;
		height: auto;
		min-height: 200rpx;
		max-height: 800rpx;
		background-color: #F2F2F2;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 40rpx 20rpx 20rpx;
		overflow: scroll;
		>.goodClass{
			width: 30%;
			height: 30rpx;
			margin: 0 0 30rpx;
			// background-color: #FFFFFF;
			text-align: center;
			font-size: 26rpx;
			line-height: 30rpx;
			position: relative;
			>text{
				
			}
			// >.sureClass:before{
			// 	content: url(/static/images/分类/u885.png);
			// 	position: absolute;
			// 	top: 0;
			// 	left: 0;
			// }
		}
		
	}
	>.btnBox{
		width: 100%;
		height: 60rpx;
		display: flex;
		>.resetBtn,.confirmBtn{
			width: 50%;
			background-color: #FFFFFF;
			color: #333333;
			font-size: 28rpx;
			line-height: 60rpx;
			text-align: center;
		}
		>.confirmBtn{
			background-color: #2483d9;
			color: #FFFFFF;
		}
	}
}



// 购物车弹窗
.shopCarBox{
	width: 622rpx;
	height: 436rpx;
	background-color: #fff;
	border-radius: 10rpx;
	position: relative;
	overflow: hidden;
	>image{
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		display: block;
		width: 50rpx;
		height: 50rpx;
	}
	>.shopCar_t{
		width: 100%;
		height: 50%;
		// background-color: #007AFF;
		border-bottom: 2rpx solid #cccccc;
		display: flex;
		justify-content: space-around;
		padding-top: 40rpx;
		>.shopCar_t_l{
			width: 25%;
			height: 100%;
			text-align: center;
			display: flex;
			align-items: center;
			>image{
				display: block;
				margin: 0 auto;
				width: 78rpx;
				height: 78rpx;
			}
		}
		>.shopCar_t_r{
			font-size: 26rpx;
			color: #333333;
			width: 70%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			>.shopCar_t_r_item:nth-child(1){
				color: #333333;
				font-weight: 600;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			>.shopCar_t_r_item:nth-child(2){
				color: #333333;
				font-weight: 500;
				>text:nth-child(2){
					font-size: 32rpx;
					color: #cc0000;
				}
			}
			>.shopCar_t_r_item:nth-child(3){
				color: #999;
			}
		}
	}
	>.shopCar_b{
		position: relative;
		padding-top: 50rpx;
		height: 50%;
		>.shopCar_b_num{
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			box-sizing: border-box;
			color: #333333;
			>.shopCar_b_num_l{
				height: 100%;
				line-height: 50rpx;
				font-size: 26rpx;
				color: #999999;
			}
			>.shopCar_b_num_r{
				width: 256rpx;
				height: 60rpx;
				// background-color: #07C160;
				border: 2rpx solid #cccccc;
				border-radius: 10rpx;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				>text{
					width: 20%;
					height: 100%;
					// background-color: #808080;
					text-align: center;
					line-height: 50rpx;
					font-size: 50rpx;
					font-weight: 700;
				}
				>.shopCar_b_num_r_input{
					width: 60%;
					border-left:2rpx solid #cccccc ;
					border-right:2rpx solid #cccccc ;
					display: flex;
					font-size: 28rpx;
					>input{
						height: 100%;
						width: 60%;
						text-align: center;
						font-size: 28rpx;
					}
					>text{
						display: block;
						text-align: center;
						width: 40%;
						height: 100%;
						line-height: 60rpx;
					}
				}
			}
		}
		>.shopCar_b_btn{
			width: 100%;
			height: 78rpx;
			display: flex;
			position: absolute;
			bottom: 0;
			left: 0;
			>.closeBtn,.confirmBtn{
				width: 50%;
				background-color: #FFFFFF;
				color: #333333;
				font-size: 28rpx;
				line-height: 78rpx;
				text-align: center;
			}
			>.confirmBtn{
				background-color: #2483d9;
				color: #FFFFFF;
			}
		}
	}
}


</style>
