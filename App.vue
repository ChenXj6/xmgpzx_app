<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/css/common.css");
	@import url("./common/css/icon.css");
	page{
		background: #f2f2f2;
	}
	uni-checkbox .uni-checkbox-input {
		border-radius: 50%;
	}
	
</style>
