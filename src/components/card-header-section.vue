<template>
	<view class="header-view"> 
		<view class="pre-view">
			<view class="pre-image">
				<u-image width="8rpx" height="34rpx" src="/static/card-title-pre.png"
				></u-image>
			</view>
			<view class="title-text">
				{{title}} 
			</view> 
		</view>
		<view class="suf-view" @tap="onclick()">
			<view class="more-text">更多</view>
			<view class="more-image">
				<u-image width="14.27rpx" height="48rpx" src="/static/arrow-right.png" @click="onclick()"></u-image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "card-header-section",
		data() {},
		props: { 
			title: {
				type: String,
				default: '',
				required: true
			},
		},
		methods: {
			onclick:function(){
				this.$emit('click')
			}
		},
	}

</script>

<style lang="scss">
	.header-view {
		background-color: #FFF;
		height: 88rpx;
		display: flex;
		justify-content: space-between;
	}

	.pre-view,
	.suf-view {
		display: flex;
		align-items: center;
	}


	.title-text {
		margin-left: 22rpx;
		font-weight: 500;
		height: 25rpx;
		line-height: 25rpx;
		font-size: 34rpx;
		color: #000000D9;
	}

	.more-text {
		font-size: 26rpx;
		color: #00000073;
		font-weight: 400;
		line-height: 21px;
	}

	.more-image {
		margin-left: 19rpx;
	}
</style>
