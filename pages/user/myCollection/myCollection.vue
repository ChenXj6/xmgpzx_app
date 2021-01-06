<template>
	<view>
		<view class="collectionHead">
			<view>全部收藏</view>
			<view @click="radioShow = radioShow ? false : true">{{ radioShow | getCk(radioShow) }}</view>
		</view>
		<view class="goodsList">
			<view class="goods_info" v-for="(items,key) in list">
				<view class="info_left">
					<view class="goods_active">
						<!-- <radio v-if="radioShow" :value="items"  :checked="InvoiceId ==''" @click="radio(items)"></radio> -->
						<checkbox-group v-if="radioShow" @change="changeCheck($event,items.value)">
							<label>
								<checkbox :value="items.value" :checked="items.checked">
								</checkbox>
							</label>
						</checkbox-group>
					</view>
					<view class="goodsImg"><img src="/static/images/我的/u305.png" alt="" /></view>
				</view>
				<view class="goods_data">
					<view class="overHidden">SH·H10Mn2 埋弧焊丝 4.0(250kg)mm</view>
					<view class="goods_info_stock">
						<view>仓库：</view>
						<view>库存：</view>
					</view>
					<view style="color: #CCCCCC;">起订量：</view>
					<view class="reservePip" style="justify-content: space-between;">
						<view>
							<span style="color:#FF6600;">￥100</span>
							/箱
						</view>
						<view><uni-icons type="plus-filled" size="25" color="#2483D9" @click="open"></uni-icons></view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="orderPage">
				<view class="close_popup" @tap="close">
					<uni-icons type="closeempty" size="20"></uni-icons>
				</view>
				<view class="popup_content">
					<view class="orderTop">
						<view class="goods_img">
							<img src="/static/images/我的/u305.png" alt="">
						</view>
						<view class="goodsDetail">
							<view>SH·H10Mn2 埋弧焊丝 4.0(250kg)mm</view>
							<view>单价：<span style="color: red;">￥111</span></view>
							<view style="color: #797979;font-size: 13px;">总价：￥111</view>
						</view>
					</view>
					<view class="orderBottom">
						<view style="line-height: 27px;">起订量X箱</view>
						<view style="display: flex;color: #000000;">
							<view class="delBtn">-</view>
							<view style="border:1px solid rgb(228, 228, 228);padding: 3px 8px;display: flex;"><input type="number" v-model="orderNum" style="font-size: 14px;"></input><span>箱</span></view>
							<view class="addBtn">+</view>
						</view>
					</view>
					<view class="goodsOperation">
						<view style="background-color: #F2F2F2;border-radius: 0 0 0 5px;" @tap="close">取消</view>
						<view style="background-color: #2483D9;border-radius: 0 0 5px;color: #fff;">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<view class="rootNav" v-if="radioShow">
			<view>
				<!-- <radio value="allRadio" checked = false>全选</radio> -->
				<checkbox-group @change="changeAll" name="allCheck">
					<label>
						<checkbox :value="allCheck.value" :checked="allCheck.checked">
							全选
						</checkbox>
					</label>
				</checkbox-group>
			</view>
			<view><view class="delGoods">删除</view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			radioShow: false,
			orderNum:1,
			list: [
				{
					name : '《某天成为公主》',
					value : '《某天成为公主》',
					id : '1',
					whether  : true
				},
				{
					name : '《当神不让》',
					value : '《当神不让》',
					id : '2',
					whether  : true
				},
				{
					name : '《海贼王》',
					value : '《海贼王》',
					id : '3',
					whether  : true
				}
			],
			radioList:[],
			allCheck : {
				name : '全选',
				value : 'all',
				checked : false	
			},
		};
	},
	filters: {
		//管理
		getCk(val) {
			if (val) {
				return (val = '完成');
			} else {
				return (val = '管理');
			}
		}
	},
	methods: {
		changeAll(e){
			let that = this;
			if(e.detail.value.length == 0) {
				that.list.map(item => this.$set(item, 'checked', false));
				this.$set(this.allCheck, 'checked', false);
			}else{
				that.list.map(item => this.$set(item, 'checked', true));
				this.$set(this.allCheck, 'checked', true);
			}
		},
		// 多选
		changeCheck : function(e,val) {
			let that = this;
			var items = this.list;
			var len = this.list.length;
			var values = e.detail.value;
			for(var i = 0; i < len; i++) {
				var item = items[i];
				if(val == item.value){
					if(values == item.value){
						this.$set(item, 'checked', true);
					}else{
						this.$set(item, 'checked', false);
					}
				}
				
			}
			
			let arr = [];
			// 判断选中状态
			this.list.forEach(item => item.whether  == true ? arr.push(item) : '');
			var isAll = arr.every(item => item.checked == true);
			isAll ? this.$set(this.allCheck, 'checked', true) : this.$set(this.allCheck, 'checked', false)
		},
		open() {
			this.$refs.popup.open();
		},
		close(){
			this.$refs.popup.close();
		}
	}
};
</script>

<style scoped lang="scss">
view {
	font-size: 14px;
}
.collectionHead {
	display: flex;
	justify-content: space-between;
	padding: 20rpx;
}
.goods_info {
	display: flex;
	height: 220rpx;
	padding: 20rpx;
	background-color: #fff;
	border:1px solid #F2F2F2;
}
.goods_active {
	line-height: 150rpx;
	width: 30%;
}
.goodsImg{
	border: 2rpx solid #f2f2f2;
	padding: 10rpx;
	width: 70%;
	height: 90%;
}
.goodsImg img{
	height: 100%;
	width: 100%;
}
.goods_img {
	border: 2rpx solid #f2f2f2;
	padding: 10rpx;
	width: 42%;
}
.goods_img img {
	height: 100%;
	width: 100%;
}
.goods_data {
	padding: 10rpx 20rpx;
	flex: 1;
}
.goods_info_stock {
	display: flex;
}
.reservePip {
	display: flex;
}
.goods_info_stock view {
	flex: 1 1 0%;
	color: #cccccc;
}
.rootNav {
	position: fixed;
	width: 100%;
	height: 80rpx;
	line-height: 60rpx;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	padding: 12rpx 20rpx;
	background-color: #fff;
	border: 2rpx solid #e4e4e4;
}
.delGoods {
	background-color: #2483d9;
	color: #fff;
	width: 120rpx;
	text-align: center;
	border-radius: 20px;
	height: 100%;
}
.orderPage{
	border-radius: 5px;
	background-color: #fff;
	margin:0 auto;
	width: 85%;
}
.close_popup{
	justify-content: flex-end;
	display: flex;
	padding: 10rpx 20rpx;
}
.orderTop{
	border-bottom: 1px solid rgb(228, 228, 228);
	display: flex;
	padding: 15px 10px;
}
.goodsDetail{
    padding: 5px 10px;
}
.goodsDetail view{
	margin-top: 10rpx;
	margin-bottom: 10rpx;
}
.orderBottom{
	height: 150rpx;
	text-align: center;
	display: flex;
	padding: 50rpx 100rpx;
	justify-content: center;
}
.orderBottom >view{
	color: #797979;
	font-size: 13px;
	flex: 1;
}
.goodsOperation{
	display: flex;
	text-align: center;
	height: 70rpx;
	line-height: 70rpx;
}
.goodsOperation view{
	flex:1;
}
.delBtn{
	border:1px solid rgb(228, 228, 228);
	border-right:0;
	border-radius: 5px 0 0 5px;
	padding: 3px 8px;
	font-weight: bold;
}
.addBtn{
	border:1px solid rgb(228, 228, 228);
	border-radius: 0 5px 5px 0;
	padding: 3px 8px;
	font-weight: bold;
}
.overHidden{
	white-space:nowrap;
   overflow:hidden;
   text-overflow:ellipsis;
}
.info_left{
	display: flex;
	padding: 10rpx;
	padding-left: 0;
	width: 27%;
}
</style>
