<template>
	<view>
		<view class="head-title">
			选择擅长的内容吧
		</view>
		<view class="body">
			<view v-for="option in options" :key="option">
				<view class="tag-group">{{option.name}}</view>
				<view class="tags">
					<nongji-class-tag v-for="(item,index) in option.items" :text="item" width="162rpx" :margin="(index+1)%4 === 0?'24rpx 13rpx 0 0':'24rpx 0 0 0'"
					 padding="15rpx 0 0 0" :hightlight="tagSelected(item)" @click="tagClicked(item)"></nongji-class-tag>
				</view>
			</view>
		</view>
		<view class="bottom-area">
			<u-button :custom-style='okBtnStyle' @click="onLoginButtonClick()">
				选好了
			</u-button>
			<view class="ignore-text">直接跳过</view>
		</view>
	</view>
</template>

<script>
	import NongjiClassTag from '../../components/nongji-class-tag'
	export default {
		data() {
			return {
				okBtnStyle: {
					marginLeft:"32rpx",
					marginRight:"32rpx",
					marginTop: '24rpx',
					height: '88rpx',
					backgroundColor: '#20BF8E',
					color: '#FFFFFF',
					fontSize: '34rpx'
				},
				selected: ["蜜蜂", "猪", "鹌鹑", "春梢老熟期", "早熟期", "除草技术", "猪饲养"],
				options: [{
						"name": "品种",
						items: ["蜜蜂", "鸭", "鸽子", "鹌鹑","鸽子", "鹌鹑", "鹅","蜜蜂", "鸭", "鸽子", "鹌鹑", "鹅", "猪", "鸟"]
					},
					{
						"name": "物候期",
						items: ["春梢老熟期", "结果期", "结果期", "春梢期", "早熟期", "坐果期"]
					},
					{
						"name": "技术",
						items: ["发芽", "除草技术…", "鸽子", "鹌鹑", "鹌鹑养直…", "猪饲养", "鹅", "鸽子", "鸽子"]
					},
				]
			}
		},
		components: {
			NongjiClassTag
		},
		methods: {
			tagSelected: function(val) {
				return this.selected.indexOf(val) !== -1
			},
			tagClicked: function(val) {
				const index = this.selected.indexOf(val)
				if (index === -1) {
					this.selected.push(val)
				} else {
					this.selected.splice(index, 1)
				}
			}
		}

	}
</script>

<style lang="scss">
	.head-title {
		margin: 0 auto;
		margin-top: 24rpx;
		text-align: center;
		padding-bottom: 25rpx;
		border-bottom: 1rpx solid #E5E5E5;
		width: 100%;
		height: 97rpx;
		font-size: 34rpx;
		font-weight: 400;
		color: #000;
		line-height: 48rpx;
	}

	.tag-group {
		font-size: 28rpx;
		font-weight: 400;
		color: #8C8C8C;
		margin-top: 24rpx;
	}

	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.bottom-area{
		border-top: 1rpx solid #E5E5E5;
		margin-top: 24rpx;
	}
	.ignore-text{
		margin: 16rpx auto;
		text-align: center;
		font-size: 28rpx;
		color: #666666FF;
	}
	
</style>
