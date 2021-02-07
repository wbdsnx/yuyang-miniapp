<template>
	<view class="train-cover-view">
		<view class="single-train-cover-view" v-for="train in trains">
			<view class="train-image-view">
				<u-image width="686rpx" height="385.99rpx" border-radius="12rpx 12rpx 0 0" :src="train.img"></u-image>
				<view class="signUp-tag">
					已报名：{{train.signUpNum}}人
				</view>
			</view>
			<view class="train-main-view">
				<view class="title-view">
					主题：{{train.title}}
				</view>
				<view class="time-view">
					时间：{{train.time}}开始
				</view>
				<view class="address-view">
					地点：{{train.address}}
				</view>.
				<view class="expert-view">
					专家：{{train.expert}}
					<u-image class="expert-avatar" shape="circle" width="48rpx" height="47.53rpx" :src="train.expertAvatar"></u-image>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'train-cover',
		data() {
			return {
				trains: [{
						title: '土豆培育方法',
						signUpNum: '1234',
						img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg',
						time: '2020-11-20 13:00',
						address: '国际会展中心',
						expert: '张雄',
						expertAvatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg'
					},
					{
						title: '土豆培育方法',
						signUpNum: '1234人',
						img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg',
						time: '2020-11-20 13:00',
						address: '国际会展中心',
						expert: '张雄',
						expertAvatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg'
					},
					{
						title: '土豆培育方法',
						signUpNum: '1234人',
						img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg',
						time: '2020-11-20 13:00',
						address: '国际会展中心',
						expert: '张雄',
						expertAvatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg'
					}
				],
			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.train-cover-view {
		.single-train-cover-view {
			margin-bottom: 16rpx;
			.train-image-view {
				position: relative;
				.signUp-tag {
					position: absolute;
					padding: 8rpx 30rpx;
					background-color: #EBEBEB80;
					border-radius: 26rpx;
					top: 24rpx;
					left: 24rpx;
					font-size: 26rpx;
					font-weight: 400;
					color: #FFF;
					line-height: 34rpx;
				}
			}

			.train-main-view {
				position: relative;
				height: 168rpx;
				padding: 16rpx 0 16rpx 32rpx;
				box-shadow: 0 2rpx 10rpx -1rpx rgba(0, 0, 0, 0.1);
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.title-view {
					font-size: 34rpx;
					color: rgba(0, 0, 0, 0.85);
					line-height: 50rpx;
				}

				.time-view,
				.address-view {
					font-size: 26rpx;
					font-weight: 400;
					color: #A4A4A4;
					// line-height: 39px;
				}

				.expert-view {
					display: flex;
					flex-direction: row;
					justify-content: center;
					position: absolute;
					right: 22rpx;
					bottom: 22rpx;

					.expert-avatar {
						margin-left: 8rpx;
					}
				}

			}
		}
	}
</style>
