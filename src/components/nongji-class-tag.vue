<template>
	<view class="tag" :class="hightlight?'highlight-tag':''" 
	:style="{'width':width,'margin':margin,'padding':padding}">
		{{text}}
	</view>
</template>

<script>
	export default {
		el: '#nongji-class-tag',
		props: {
			text: {
				type: [String, Number],
				default: '',
			},
			hightlight: {
				type: Boolean,
				default: false,
			},
			width: {
				type: String,
				default: ''
			},
			margin: {
				type: String,
				default: '24rpx 0 0rpx 0',
			},
			padding: {
				type: String,
				default: '15rpx 0'
			}
		},
		methods: {}
	}
</script>
<style lang="scss" scoped>
	.tag {
		color: #00000073;
		height: 52rpx;
		text-align: center;
		justify-content: center;
		font-weight: 400;
		font-size: 26rpx;
		line-height: 21rpx;
		border: 1rpx solid #D9D9D9;
		border-radius: 26rpx;
	}

	.highlight-tag {
		color: #20BF8E;
		background-color: #20BF8E0D;
		border-color: #20BF8E;
	}
</style>
