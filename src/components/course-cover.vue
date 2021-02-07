<template>
	<view class="essence-course-cover-view">
		<view class="single-essence-course-cover-view" v-for="(course,index) in courses" :style="{'margin-top':index !=0?'16rpx':'0'}">
			<view class="left-view">
				<u-image width="192rpx" height="192rpx" border-radius="12rpx" :src="course.image"></u-image>
				<view class="play-view">
					<u-image width="60rpx"
					height="60rpx"
					src="/static/play.png"></u-image>
				</view>
			</view>
			
			<view class="right-view">
				<view class="right-top-view">
					{{course.title}}
				</view>
				<view class="right-bottom-view">
					<view class="type-view">
						{{course.type}}
					</view>
					<view class="period-view">
						{{course.period}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		el: "#essence-course-cover",
		data() {
			return {
				courses: [{
						image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg",
						title: "大田作物病虫害防治四大方法！",
						type: "免费",
						period: "共3期"
					},
					{
						image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=290338037,444452807&fm=26&gp=0.jpg",
						title: "牛病临床诊断技术",
						type: "免费",
						period: "共3期"
					}
				],
			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.essence-course-cover-view {
		display: flex;
		flex-direction: column;
		height: 432rpx;
	}

	.single-essence-course-cover-view {
		display: flex;
		flex-direction: row;
	}
	
	
	.left-view{
		position: relative;
		.play-view{
			position: absolute;
			top: 66rpx;
			left: 66rpx;
		}
	}
	.right-view{
		margin-left: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.right-top-view{
		padding-top: 0;
		font-size: 34rpx;
		font-weight: 500;
		color: #000000D9;
		line-height: 50rpx;
	}
	.right-bottom-view{
		display: flex;
		flex-direction: row;
		justify-content: end;
	}
	.type-view{
		width: 52rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.45);
	}
	.period-view{
		margin-left: 16rpx;
		font-size: 26rpx;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.45);
	}
</style>
