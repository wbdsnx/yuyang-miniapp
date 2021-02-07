



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

<style lang="scss">	
	/*每个页面公共css */
	@import "uview-ui/index.scss";

	* {
		font-family: PingFangSC-Regular, PingFang SC;
	}
	.body{
		margin-left: 32rpx;
		margin-right: 32rpx;
	}
	
	.index-view{
		position: relative;
		.index-head-view {
			background: #FFF;
			position: absolute;
			position: fixed;
			overflow: auto;
			width: 100%;
			z-index: 3;
			top: 0rpx;
		}
		.index-main-view{
			margin-top: 208rpx;
		}
	}


</style>
