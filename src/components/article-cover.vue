<template>
	<view class="article-cover-view">
		<view class="article-first-view">
			<view class="title-view">
				{{articles[0].title}}
			</view>
			<view class="images-view">
				<u-image width="222rpx" height="222rpx" v-for="(image,imageIndex) in articles[0].images" :src="image"
				 :border-radius="imageIndex==0?'12rpx 0 0 12rpx':imageIndex==2?'0 12rpx 12rpx 0':'0'"></u-image>
			</view>
			<view class="bottom-view">
				<view class="bottom-left-view">
					<view class="tag-view">
						{{articles[0].tag}}
					</view>
					<view class="saw-view">
						{{articles[0].saw}}
					</view>
					<view class="praise-view">
						{{articles[0].praised}}
					</view>
				</view>
				<view class="date-view">
					{{articles[0].date}}
				</view>
			</view>
		</view>
		<view class="article-other-view" v-for="(article,index) in articles" v-if="index>=1">
			<view class="images-view">
				<u-image width="192rpx" height="192rpx" :src="article.images[0]"
				 border-radius="12rpx"></u-image>
			</view>
			<view class="right-view">
				<view class="title-view">
					{{article.title}}
				</view>
				<view class="right-center-view">
					<view class="tag-view">
						{{article.tag}}
					</view>
					<view class="saw-view">
						{{article.saw}}
					</view>
					<view class="praise-view">
						{{article.praised}}
					</view>
				</view>
				<view class="date-view">
					{{articles[0].date}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "article-cover",
		data() {
			return {
				articles: [{
						title: "10种大蒜常见病毒的区别与识别，超过半数的人还不知道",
						images: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg",
							"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg",
							"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg"
						],
						tag: "农技文章",
						saw: "1213人阅读",
						praised: "123人点赞",
						date: "2020-11-26"
					},
					{
						title: "10种大蒜常见病毒的区别与识别，超过半数的人还不知道",
						images: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg"],
						tag: "农技文章",
						saw: "1213人阅读",
						praised: "123人点赞",
						date: "2020-11-26"
					},
					{
						title: "10种大蒜常见病毒的区别与识别，超过半数的人还不知道",
						images: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg"],
						tag: "农技文章",
						saw: "1213人阅读",
						praised: "123人点赞",
						date: "2020-11-26"
					}
				]
			}         
		},
		methods: {}
	}  
</script>

<style lang="scss">
	.article-cover-view {
		display: flex;
		flex-direction: column;
	}

	.article-first-view {
		display: flex;
		flex-direction: column;
		padding-bottom: 32rpx;

		.title-view {
			height: 100rpx;
			font-size: 34rpx;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.85);
			line-height: 50rpx;
			margin-bottom: 16rpx;
		}


		.images-view {
			display: flex;
			flex-direction: row;
			border-radius: 12rpx;
			margin-bottom: 16rpx;
			justify-content: space-between;
		}

		.bottom-view {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.bottom-left-view {
			display: flex;
			flex-direction: row;
		}

		.tag-view,
		.saw-view,
		.praise-view {
			margin-right: 16rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.45);
			line-height: 34px;
		}

		.date-view {
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.45);
			line-height: 34px;
		}
	}

	.article-other-view {
		padding-top: 32rpx;
		border-top: 2rpx solid #0000001A;
		padding-bottom: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.right-view{
			margin-left: 24rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.title-view {
			height: 100rpx;
			font-size: 34rpx;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.85);
			line-height: 50rpx;
			margin-bottom: 16rpx;
		}
		.right-center-view{
			display: flex;
			flex-direction: row;
			.tag-view,
			.saw-view,
			.praise-view {
				margin-right: 16rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.45);
				// line-height: 34px;
			}
		}
		.date-view {
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.45);
			// line-height: 34px;
		}
	}
</style>
