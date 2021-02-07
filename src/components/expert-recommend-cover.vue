<template>
	<view class="expert-recommend-cover-view">
		<view class="single-expert-recommend-cover-view" v-for="expert in experts">
			<u-image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg" shape="circle"
			 width="96rpx" height="96rpx"></u-image>
			<view class="expert-name">
				{{expert.name}}
			</view>
			<view class="expert-desc">
				{{expert.desc}}
			</view>
			<u-button :custom-style="consultBtnStyle" :hair-line="false" @click="consult()">去咨询</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "expert-recommend-cover",
		data() {
			return {
				consultBtnStyle: {
					marginTop: "15rpx",
					marginBottom: "28rpx",
					width: "132rpx",
					height: "44rpx",
					fontSize: "24rpx",
					lineHeight: "21rpx",
					color: "#FFF",
					backgroundColor: '#20BF8E'
				},
				experts: [{
						name: "周润发",
						desc: '畜牧专家'
					},
					{
						name: "周润发",
						desc: '土壤专家'
					},
					{
						name: "周润发",
						desc: '种植专家'
					},
				]
			}
		},
		methods: {
			consult: function() {
				console.log("11111111")
			}
		}
	}
</script>

<style scoped lang="scss">
	.expert-recommend-cover-view {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.single-expert-recommend-cover-view {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 32rpx;
			padding-bottom: 29rpx;
			width: 216rpx;
			height: 306rpx;
			justify-content: center;
			align-content: center;
			box-shadow: 0 2rpx 10rpx -1rpx #0000001A;
			border-radius: 12px;

			.expert-name {
				margin-top: 4rpx;
				font-size: 34rpx;
				line-height: 48rpx;
			}

			.expert-desc {
				height: 40rpx;
				color: #939393FF;
				font-size: 28rpx;
			}
		}

	}
</style>
