<template>
	<view>
		<view style="height: 200rpx;background-color: #2483d9 ;">
			<view class="logoImg"><img src="/static/images/我的/u754.png" alt=""></view>
		</view>
		<view class="backGc">
			<view>
				<view class="loginBox">
					<view class="loginHead">
						<view style="border-right: 1px solid #999999;" :class="loginType == 2 ?  'activeType' : ''" @click="loginType = 2">
							<view>验证码登录</view>
							<view class="Underline" v-if= "loginType == 2"><img src="/static/images/我的/u925.png" alt=""></view>
						</view>
						<view :class="loginType == 1 ?  'activeType' : ''" @click="loginType = 1">
							<view>密码登录</view>
							<view class="Underline" v-if= "loginType == 1"><img src="/static/images/我的/u925.png" alt=""></view>
						</view>
					</view>
					<view v-if="loginType == 1">
						<view class="item">
							<view><input class="uni-input" type="text" v-model="userAcc" @change="ifLogin" placeholder="请输入您的手机号/用户名" placeholder-style="font-size:26rpx"></view>
						</view>
						<view class="item">
							<view class="flex_1"><input class="uni-input" v-model="userPwd" @change="ifLogin" :password="showPassword" placeholder="请输入登录密码" placeholder-style="font-size:26rpx"></view>
							<view style="width: 60rpx;">
								<text class="uni-icon" style="line-height: 50rpx;font-size: 44rpx;" decode='true' :class="[!showPassword ? 'uni-eye-active' : '']" @click="changePassword">&#xe568;</text>
							</view>
						</view>
						<view style="color: #666666;font-size: 28rpx;padding-left: 20rpx;">
							忘记密码？
						</view>
					</view>
					<view v-if="loginType == 2">
						<view class="item">
							<view><input class="uni-input" type="number" v-model="userAcc" @change="ifLogin" placeholder="请输入您的手机号" placeholder-style="font-size:26rpx"></view>
						</view>
						<view class="item">
							<view class="phoneNum flex_1">
								<input type="number" maxlength="6" placeholder="请输入验证码" placeholder-style="font-size:26rpx">
							</view>
							<view class="getCode flex_1" @click="getCode()">获取验证码</view>
						</view>
					</view>
					<view :class=" isLogin ? 'loginBtn2' :'loginBtn1'" :disable= "isLogin" @click="loginBtn()">
						<view>登录</view>
					</view>
					<view class="registerBtn" @click="alert11()">
						<view>注册</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginType:1,
				userAcc:'',
				userPwd:'',
				isLogin:false,
				showPassword:true
			}
		},
		methods: {
			changePassword: function() {
			    this.showPassword = !this.showPassword;
			},
			ifLogin(){
				let that = this;
				if(that.userAcc != '' && that.userPwd != ''){
					that.isLogin = true;
				}else if(that.userAcc == ''){
					that.isLogin = false;
				}else if(that.userPwd == ''){
					that.isLogin = false;
				}
			},
			loginBtn(){
				uni.showToast({
					icon:"success",
					title:'登录账户或密码错误',
					image:'/static/images/cart1.png'
				})
			},
			getCode(){
				setTimeout(function(){
					console.log(1)
					
				}, 1000)
			}
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
.loginBox{
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
.phoneNum{
	display: flex;
	width: 65%;
	border-right: 1px solid #999999;
}
.getCode{
	color: #666666;
	margin: 0 auto;
	text-align: center;
	font-size: 30rpx;
}
.flex_1{
	flex:1;
}
.registerBtn{
	border-radius: 50rpx;
	margin-top: 40rpx;
	margin-bottom: 20rpx;
	color: #2483D9;
	border: 1px solid #2483D9;
	text-align: center;
	padding: 20rpx 30rpx;
}
.loginBtn1{
	pointer-events: none;
	border-radius: 50rpx;
	margin-top: 60rpx;
	margin-bottom: 20rpx;
	color: #fff;
	background-color: #ADD1F1;
	text-align: center;
	padding: 20rpx 30rpx;
}
.loginBtn2{
	border-radius: 50rpx;
	margin-top: 60rpx;
	margin-bottom: 20rpx;
	color: #fff;
	background-color: #2483D9;
	text-align: center;
	padding: 20rpx 30rpx;
}
.activeType{
	font-weight: bold;
}
.uni-icon {
	font-family: uniicons;
	font-size: 24px;
	font-weight: normal;
	font-style: normal;
	width: 24px;
	height: 24px;
	line-height: 24px;
	color: #999999;
}
.uni-eye-active {
	color: #007AFF;
}
.loginHead{
	display: flex;
	padding-top: 50rpx;
	padding-bottom: 30rpx;
}
.loginHead view{
	flex:1;
	text-align: center;
}
.Underline{
	height: 10rpx;
	line-height: 8rpx;
}
.Underline img{
	height: 100%;
	width: 23%;
}
</style>
