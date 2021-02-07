<template>
	<view class="live-cover-view" :style="{'height':height}">
		<view class="image-view">
			<u-image width="686rpx" height="385.99rpx" border-radius="12rpx 12rpx 0 0 " src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg">
			</u-image>
			<view class="mask"></view>
			<view class="live-tag" :class="open?'open':''">
				{{open?'直播中':'待开播'}}
			</view>
			<view class="play-button">
				<u-image width="102rpx" height="102rpx" src="/static/play.png"  @click="play"></u-image>
			</view>
		</view>
		<view class="bottom-area">
			<view class="expert-view">
				<u-image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg" shape="circle"
				 width="72rpx" height="72rpx"></u-image>
				<view class="expert-name-desc-view">
					<view class="expert-name">周润发</view>
					<view class="expert-desc">教你如何演电影</view>
				</view>
			</view>
			<view class="number-view" v-if="open">
				<u-image src="/static/eye.png" width="48rpx" height="48rpx"></u-image>
				<view class="number-text">1.2万</view>
			</view>
			<view class="wait-view" v-if="!open">
				距离开播时间还有 8 小时
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "live-cover",
		props: {
			open: {
				type: Boolean,
				default: true
			},
			height:{
				type:String,
				default:'544rpx'
			}
		},
		data() {
			return {}
		},
		methods: {
			play:function(){
				console.log("123123213")
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.live-cover-view {
		position: relative;
		background-color: #FFF;
	}

	.image-view {
		position: relative;

		.live-tag {
			position: absolute;
			top: 24rpx;
			left: 24rpx;
			padding: 11rpx 27rpx;
			border-radius: 26rpx;
			text-align: center;
			background-color: #EBEBEB80;
			color: #FFF;
			z-index: 2;
			width: 132rpx;
			font-size: 26rpx;
			font-weight: 400;
		}
		.open {
			background-color: #20BF8E;
		}
		.play-button {
			position: absolute;
			left: 292rpx;
			z-index: 2;
			top: 142rpx;
		}

		.mask {
			position: absolute;
			z-index: 3;
			left: 0;
			top: 0;
			z-index: 1;
			right: 0;
			bottom: 0;
			background: #000;
			opacity: 0.5;
		}
	}





	.bottom-area {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 32rpx;
		height: 126rpx;
		border-radius: 0 0 12rpx 12rpx;
		box-shadow: 0 2rpx 10rpx -1rpx #0000001A;
	}

	.expert-view {
		display: flex;
		flex-direction: row;
	}

	.expert-name-desc-view {
		align-items: center;
		margin-left: 16rpx;
	}

	.expert-name {
		font-size: 34rpx;
		font-weight: 500;
	}

	.expert-desc {
		font-size: 28rpx;
		line-height: 26rpx;
		font-weight: 400;
	}

	.number-view,.wait-view {
		display: flex;
		flex-direction: row;
		font-size: 26rpx;
		font-weight: 400;
		color: #CCCCCC;
		line-height: 26px;
	}

	.number-text {
		margin-left: 9rpx;
	}
</style>
