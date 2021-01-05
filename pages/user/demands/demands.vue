<template>
	<view>
		<view class="content">
			<view>
				<view class="logoImg"><img src="/static/images/我的/u754.png" alt=""></view>
				<h3 style="color: #fff;text-align: center;">您想要的，就是我们最关心的</h3>
			</view>
			<view class="user_data">
				<view class="install_list space_between">
					<view>*产品名称：</view>
					<view class="right_color"><input type="text"></view>
				</view>
				<view class="install_list space_between">
					<view>*产品型号：</view>
					<view class="right_color"><input type="text"></view>
				</view>
				<view class="install_list space_between">
					<view>*产品规格：</view>
					<view class="right_color"><input type="text"></view>
				</view>
				<view class="install_list space_between">
					<view>*厂家名称：</view>
					<view class="right_color"><input type="text"></view>
				</view>
				<view class="goodsImg">
					<view>*产品图片：</view>
					<view class="imgList">
						<g-upload ref='gUpload' :mode="imgList" @chooseFile='chooseFile' @imgDelete='imgDelete' :control='control' :columnNum="columnNum"></g-upload>
					</view>
				</view>
			</view>
			<view class="subList">
				<view class="subBtn">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	import gUpload from "@/components/g-upload/g-upload.vue"
	export default {
		components: {
		  gUpload
		},
		data() {
			return {
				control: true,
				columnNum: 3,
				imgList: []
			}
		},
		methods: {
			activeImg(){
				uni.chooseImage({
					// count:  允许上传的照片数量
					count:3,
					// sizeType:  original 原图，compressed 压缩图，默认二者都有
					sizeType: "original",
					success(res){
						console.log(res)
						uni.previewImage({
							// 对选中的图片进行预览
							urls: res.tempFilePaths,
							// urls:['','']  图片的地址 是数组形式
						})
					} 
				});
			},
			//点击上传控件上传
			uploadImg() {
			  this.$refs.gUpload.uploadImg()
			},
			
			
			/*
			上传后返回的值：
			list：上传后图片数组
			v：返回当前上传图片的临时路径
			*/
			chooseFile(list, v) {
			  console.log("上传图片_list：", list)
			  console.log("上传图片_v：", v);
			  this.uploadFileToServe(v)
			},
			
			
			/*
			删除图片：
			list：删除返回删除后剩余的图片数组
			eq：返回删除的数组
			*/
			imgDelete(list, eq) {
			  console.log("删除图片_list：", list)
			  console.log("删除图片_eq：", eq)
			},
			
			
			//控件内外部切换
			switch1Change(e) {
			  this.control = !this.control
			},
			
			
			//图片行个数切换
			switch2Change(e) {
			  this.columnNum = this.columnNum == 3 ? '4' : '3'
			},
			
			/*
			执行上传服务：
			urlList：要上传的图片：数组类型
			*/
			uploadFileToServe(urlList) {
			  if (!urlList || urlList.length <= 0) {
			    return
			  };
			  for (let i = 0; i < urlList.length; i++) {
			    uni.uploadFile({
			      url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
			      filePath: urlList[i],
			      name: 'file',
			      formData: {
			        'user': 'test'
			      },
			      success: (uploadFileRes) => {
			        console.log(uploadFileRes.data);
			      }
			    });
			  }
			}
		}
	}
</script>

<style>
page {
	background: #f2f2f2;
}
.user_data {
	padding: 10px 16px;
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
}
.install_list{
	border-bottom: 1px solid #F2F2F2;
	height: 35px;
	padding: 5px;
	display: flex;
}
.space_between{
	justify-content: space-between;
}
.right_color{
	color: #C4C4C4;
}
.content{
	background-image: url(/static/images/我的/u726.png);
	background-repeat: no-repeat;
	background-attachment:fixed;
	background-size:100% 30%;
}
.logoImg{
	width: 40%;
	margin: 0 auto;
}
.logoImg img{
	height: 100%;
	width: 100%;
	margin-top: 20px;
}
.goodsImg{
	padding: 5px ;
	display: flex;
}
.imgList{
	display: flex;
	flex:1;
	padding: 10rpx;
}
.imgList g-upload{
	width: 33%;
}
/* 上传控件 */
.uploadControl {
	border: 1rpx solid #eee;
	border-radius: 10rpx;
	width: 130rpx;
	display: block;
	height: 130rpx;
	text-align: center;
	line-height: 130rpx;
	font-size: 30rpx;
	color: #888;
	background-color: #EEEEEE;
}
.subList{
	text-align: center;
	padding: 130rpx 60rpx;
}
.subBtn{
	border-radius: 26px;
	padding: 10px;
	background-color: #2483D9;
	color: #fff;
}
</style>
