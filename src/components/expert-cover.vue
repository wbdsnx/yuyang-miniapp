<template>
	<view class="expert-cover-view">
		<view class="single-expert-cover-view" v-for="expert in experts">
			<view class="left-view">
				<u-image shape="circle" width="96rpx" height="96rpx" :src="expert.avatar"></u-image>
			</view>
			<view class="right-view">
				<view class="desc-view">
					{{expert.name}}-{{expert.desc}}
				</view>
				<view class="tags-view">
					<view class="single-tag-view" v-for="tag in expert.tags">
						{{tag}}
					</view>
				</view>
				<view class="data-view">
					<view class="consult-view">
						<view>{{expert.consultNum}}</view>
						<view class="tip">咨询量</view>
					</view>
					<view class="reply-view">
						<view>{{expert.replyNum}}</view>
						<view class="tip">回复量</view>
					</view>
					<view class="reply-rate-view">
						<view>{{expert.replyRate}}</view>
						<view class="tip">回复率</view>
					</view>
				</view>
				<u-button :custom-style="consultBtnStyle">去提问</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "expert-cover",
		data() {
			return {
				experts: [{
						name: "张雄",
						avatar: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg",
						desc: "榆林学院校长助理兼学生助理主任主任",
						tags: ["农业节水研究", "农业节水研究", "种子种植"],
						consultNum: "1121",
						replyNum: "1121",
						replyRate: "78%"
					},
					{
						name: "张雄",
						avatar: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg",
						desc: "榆林学院校长助理兼学生助理主任主任",
						tags: ["农业节水研究", "农业节水研究", "种子种植"],
						consultNum: "1121",
						replyNum: "1121",
						replyRate: "78%"
					},
					{
						name: "张雄",
						avatar: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg",
						desc: "榆林学院校长助理兼学生助理主任主任",
						tags: ["农业节水研究", "农业节水研究", "种子种植"],
						consultNum: "1121",
						replyNum: "1121",
						replyRate: "78%"
					}
				],
				consultBtnStyle: {
					marginTop:"16rpx",
					height: "64rpx",
					width: "572rpx",
					backgroundColor: "rgba(32, 191, 142, 0.05)",
					color: "#20BF8E",
					borderRadius: "4rpx",
					fontSize: '26rpx',
					lineHeight: "34rpx"
				}
			}
		},

	}
</script>

<style lang="scss">
	.single-expert-cover-view {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-bottom: 32rpx;
		.right-view {
			margin-left: 17rpx;
			padding-bottom: 32rpx;
			border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
			.desc-view {
				overflow: hidden;
				width: 573rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 34rpx;
				font-weight: 500;
				color: rgba(0, 0, 0, 0.85);
				line-height: 50rpx;
			}

			.tags-view {
				margin-top: 10rpx;
				display: flex;
				flex-direction: row;

				.single-tag-view {
					background-color: rgba(32, 191, 142, 0.05);
					color: #20BF8E;
					font-size: 24rpx;
					font-weight: 400;
					line-height: 34rpx;
					margin-right: 24rpx;
				}
			}

			.data-view {
				display: flex;
				flex-direction: row;
				margin-top: 20rpx;
				justify-content: space-between;

				.consult-view,
				.reply-view,
				.reply-rate-view {
					text-align: center;
					display: flex;
					flex-direction: column;
					font-size: 26rpx;
					font-weight: 500;
					color: #000;
					line-height: 34rpx;

					.tip {
						color: #B6B6B6;
					}
				}

			}
		}
	}
</style>
