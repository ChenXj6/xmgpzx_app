<template>
	<view>
		<view style="height: 200rpx;background-color: #2483d9 ;">
			<view class="logoImg"><img src="/static/images/我的/u754.png" alt=""></view>
		</view>
		<view class="backGc">
			<view>
				<view class="registerBox">
					<view class="item">
						<view class="width_36">用户名</view>
						<view class="flex_1"><input type="text" class="uni-input" v-model='username' maxlength="20" placeholder="4-20位数字与字母" placeholder-style="font-size:26rpx"></view>
					</view>
					<view class="item">
						<view class="width_36">请输入手机号</view>
						<view class="flex_1"><input type="number" class="uni-input" v-model="mobile" maxlength="11"></view>
					</view>
					<view class="item">
						<view class="phoneNum">
							<view style="width: 360rpx;">请输入验证码</view>
							<view><input type="number" class="uni-input" maxlength="6" v-model="code"></view>
						</view>
						<view class="getCode">获取验证码</view>
					</view>
					<view class="item">
						<view class="width_36">请输入设置密码</view>
						<view class="flex_1"><input type="password" class="uni-input" v-model="password" placeholder="4-20位数字与字母" maxlength="20" placeholder-style="font-size:26rpx"></view>
					</view>
					<view class="registerBtn" @click="registerBtn()">
						<view>注册</view>
					</view>
					<view class="treatyBox">
						<label class="radio">
							<radio style="transform:scale(0.7)" value="1" :checked="radioChecked" @click=" radioChecked = !radioChecked"></radio>
						</label>
						<text>我已阅读<span style="color:#3a95e6" @click="GVRP()">《工品易达用户注册协议》</span></text>
					</view>
				</view>
			</view>
			<view class="touchService" @click="open">
				联系客服
			</view>
		</view>
		<!-- 客服电话 -->
		<uni-popup ref="telPop" type="bottom">
			<view class="telPop">
				<view class="telPop-t radio" @click="telphone">
					<uni-icons type="phone-filled" size="35" color="#6a696a"></uni-icons>
					&nbsp;
					<text>呼叫&nbsp;18757815753</text>
				</view>
				<view class="telPop-b radio" @click="close()"><text>取消</text></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radioChecked:false,
				timestamp:0,
				username:'',
				password:'',
				mobile:'',
				code:'',
				//验证规则
				rules: {
					username: {
						rule:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/,
						msg: "账号为4到20位数字与字母组合"
					},
					password: {
						rule: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
						msg: "密码应该为6-20位数字与字母组合"
					},
					mobile: {
						rule: /^1[3|4|5|7|8][0-9]\d{8}$/,
						msg: "手机号格式错误"
					},
					code: {
						rule: /^[0-9]{6}$/,
						msg: "请输入验证码"
					}
				}
			}
		},
		onLoad() {
			this.timestamp = Date.parse(new Date()) / 1000;
			this.getServicePhone();
		},
		methods: {
			GVRP() {
				uni.showModal({
				    title: '注册协议',
					showCancel:false,
				    content: '厦门工品易达商城用户注册协议本协议是您与厦门工品易达商城（以后简称工品易达）所有者之间就工品易达螺丝商城服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击"同意并继续"按钮后，本协议即构成对双方有约束力的法律文件。',
				    success: function (res) {
				    }
				});
			},
			open() {
				this.$refs.telPop.open();
				console.log(this.$md5('18757815753'));
			},
			close() {
				this.$refs.telPop.close();
			},
			telphone() {
				uni.makePhoneCall({
					phoneNumber: '18757815753'
				});
			},
			registerBtn(){
				if(!this.radioChecked){
					uni.showToast({
						title: '请同意用户注册协议',
						duration: 2000,
						image: '/static/images/cart1.png',
						icon:"success",
						mask:true
					});
					return
				}
				if(!this.validate('username')) return;
				if(!this.validate("password"))  return;
				if(!this.validate("mobile"))  return;
				if(!this.validate("code"))  return;
			},
			//判断验证是否符合要求，合法性校验
			validate(key){
				let bool=true;
				if(!this.rules[key].rule.test(this[key])){
					//提示信息
					uni.showToast({
						title:this.rules[key].msg,
						icon:"none"
					})
					//取反
					bool=false;
					return false;
				}
				return bool;
			},
			//获取客服电话
			getServicePhone(){
				let that = this ;
				let params = "timestamp=" + that.timestamp +"&platform=3";
				let urlStr = params.split("&").sort().join("&");
				let signMd5 = this.$md5(urlStr);
				this.axios.request({
					url:'/appapi/index/customer',
					method:'POST',
					data:{
						sign:signMd5,
						platform:3,
						timestamp:that.timestamp
					}
				}).then(function({data}){
					console.log(data)
				}).catch(err => {
					console.log(err)
				})
			},
		}
	}
</script>

<style scoped lang="less">
.backGc {
	height: 288rpx;
	width: 100%;
	background-color: #2483d9;
	border-radius: 0 0 30% 30%;
}
.logoImg{
	height: 110rpx;
	width: 330rpx;
	margin: 0 auto;
}
.logoImg img{
	height: 100%;
	width: 100%;
	margin-top: 20px;
}
.registerBox{
	height: 800rpx;
	width: 90%;
	border-radius: 10px;
	padding: 12rpx 18rpx;
	background-color: #fff;
	margin: 0 auto;
}
.item{
	display: flex;
	border: 1px solid #C9C9C9;
	padding: 14rpx 30rpx;
	border-radius: 50rpx;
	margin-top: 40rpx;
	margin-bottom: 40rpx;
	font-size: 26rpx;
	color: #999999;
	line-height: 46rpx;
}
.uni-input{
	font-size: 26rpx;
}
.phoneNum{
	display: flex;
	width: 65%;
	border-right: 1px solid #999999;
}
.getCode{
	color: #000000;
	margin: 0 auto;
}
.width_36{
	width: 36%;
}
.flex_1{
	flex:1;
}
.registerBtn{
	border-radius: 50rpx;
	margin-top: 80rpx;
	margin-bottom: 20rpx;
	color: #fff;
	background-color: #2483D9;
	text-align: center;
	padding: 20rpx 30rpx;
}
.treatyBox{
	font-size: 26rpx;
	text-align: center;
	margin-top: 40rpx;
	margin-bottom: 40rpx;
}
.touchService{
	margin-top: 30rpx;
	margin-bottom: 40rpx;
	text-align: center;
	font-size: 26rpx;
	color: #2483D9;
}
.telPop {
	width: 100%;
	height: 200rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 100rpx;
	z-index: 999;
	> .telPop-t,
	.telPop-b {
		width: 88%;
		height: 90rpx;
		background-color: #ffffff;
		margin: 0 auto;
		text-align: center;
		line-height: 92rpx;
		> text {
			color: #3366cc;
			font-size: 40rpx;
		}
	}
	> .telPop-t {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
		> .icon_box {
			margin: 20rpx 10rpx 0 0;
		}
	}
	> .telPop-b {
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 15px;
	}
}
</style>
