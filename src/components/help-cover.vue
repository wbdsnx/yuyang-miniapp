<template>
	<view class="help-cover-view">
		<view class="single-question-view" v-for="(question,index) in questions" :style="{'margin-top':index!=0?'16rpx':'0'}">
			<view class="ask-view">
				<view class="ask-image-view">
						<u-image width="42rpx" height="42rpx" src="/static/ask.png"></u-image>
				</view>
				<view class="ask-content">
					{{question.ask}}
				</view>
			</view>
			<view class="answer-view">
				<view class="answer-image-view">
					<u-image width="42rpx" height="42rpx" src="/static/answer.png"></u-image>
				</view>
				<view class="answer-content">
					{{question.answer}}
				</view>
			</view>
			<view class="bottom-view">
					<view class="expert-view">
						<u-image shape="circle" width = "42rpx" height= "42rpx" :src="question.expoertAvatar"></u-image>
						<view class="expert-name">
							{{question.expert}}
						</view>
					</view>
					<view class="time-view">
						{{question.time}}
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "help-cover",
		data() {
			return {
				questions: [{
						ask: "市场上有小鸭通风疫苗吗？",
						answer: "没有，有的话也是骗人的。",
						expert:"张雄专家",
						expoertAvatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg',
						time:"2021-01-17"
					},
					{
						ask: "小麦通风疫苗吗？不知道有用没用，真是伤脑筋，不过没关系，都会好的",
						answer: "没有，有的话也是骗人的。要有信心，相信你一定会努力的！",
						expert:"张雄专家",
						expoertAvatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=413068338,3172512902&fm=26&gp=0.jpg',
						time:"2021-01-17"
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.help-cover-view {
		// padding-bottom: 32rpx;
	}

	.single-question-view {
		// height: 255rpx;
		padding-top: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 24rpx;
		padding-right: 24rpx;
		box-shadow: 0 2rpx 10rpx -1rpx #0000001A;
		border-radius: 12px;
	}

	.ask-view,
	.answer-view {
		display: flex;
		flex-direction: row;
	}

	.answer-view {
		margin-top: 16rpx;
	}
	
	
	.ask-image-view,.answer-image-view{
		align-items:flex-start;
	}

	.ask-content,
	.answer-content {
		margin-left: 12rpx;
		width: 584rpx;
		letter-spacing: -0.29rpx;
	}

	.ask-content {
		font-size: 34rpx;
		font-weight: 500;
		color: #000;
		line-height: 42rpx;
	}

	.answer-content {
		font-size: 34rpx;
		font-weight: 400;
		color: #BBBBBBFF;
		line-height: 48rpx;
		margin-bottom: 24rpx;
	}
	
	.bottom-view{
		height: 88rpx;
		border-top: 1rpx solid #F3F3F3;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: 400;
		color: #B2B2B2;
		line-height: 42rpx;
		.expert-view{
			display: flex;
			flex-direction: row;
			align-items: center;
			.expert-name{
				margin-left: 13rpx;
			}
		}
		.time-view{
			display: flex;
			align-items: center;
		
		}
	}
</style>
