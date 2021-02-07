<template>
	<view class="filter-view">
		<view class="filter-box" :style="{'height':seen == true?'670rpx':'88rpx',}">
			<u-dropdown ref='uDropdown' menu-icon="arrow-down-fill" active-color='#20BF8E' inactive-color='##CCCCCCFF' height="88rpx"
			 title-size='26rpx' menu-icon-size='16rpx' :close-on-click-mask='true' :close-on-click-self='true' @open='open()'
			 @close='close()'>
				<u-dropdown-item v-for="(option,key) in options" :title='option.name' :key="key">
					<scroll-view :scroll-y="true" style="height: 494rpx; background: #FFF;">
						<u-cell-group :border='false' :title-style="{'background-color':'#F6F6F6','font-size':'30rpx','color':'#000000A6','padding-bottom': '32rpx','padding-top': '32rpx', 'line-height':'23rpx','vertical-align':'middle'}">
							<u-cell-item v-for="item in option.items " :title='item' :arrow='false' :border-bottom='false' :bg-color="itemSelected(item)?'#FFF':'#F6F6F6'"
							 :center='true' :title-style="{'padding-top':'7rpx','padding-bottom':'7rpx','line-height':'23rpx', 'font-size':'30rpx','color':itemSelected(item.value)?'#20BF8E':'#000000A6'}"
							 @click='itemClicked(item)'>
								<u-icon v-show="itemSelected(item)" slot='right-icon' :custom-style="iconStyle" name='checkbox-mark' color='#20BF8E'></u-icon>
							</u-cell-item>
						</u-cell-group>
					</scroll-view>

				</u-dropdown-item>
				<view class="buttons" v-show='seen'>
					<u-button :custom-style='resetButtonStyle' :hair-line='false' @click='resetBtnClicked()'>重置</u-button>
					<u-button :custom-style='confirmButtonStyle' :hair-line='false' @click='confirmBtnClicked()'>确定</u-button>
				</view>
			</u-dropdown>
		</view>
		<view class="mask" v-if="seen"></view>
	</view>
</template>
<script>
	export default {
		name: 'nongji-class-filter',
		data() {
			return {
				seen: false,
				selected: ["蜜蜂", "猪", "鹌鹑", "春梢老熟期", "早熟期", "除草技术", "猪饲养"],
				iconStyle: {
					margin: '0',
					height: '27.8rpx',
					width: '39.4rpx'
				},
				resetButtonStyle: {
					backgroundColor: '#FFF',
					// color: '#000',
					borderColor: '#FFF',
					boxShadow: '0px 1px 2px 0px #00000014',
					borderRadius: '4rpx',
					fontSize: '34rpx',
					width: '374rpx',
					height: '88rpx'
				},
				confirmButtonStyle: {
					backgroundColor: this.$globalTheme.color,
					color: '#FFF',
					borderRadius: '0',
					fontSize: '34rpx',
					width: '376rpx',
					height: '88rpx'
				},
				options: [{
						"name": "品种",
						items: ["蜜蜂", "鸭", "鸽子", "鹌鹑", "鹅", "猪", "鸟", "猪", "鸟", "蜜蜂", "鸭", "鸽子", "鹌鹑", "鹅", "猪", "鸟"]
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

		methods: {
			open: function() {
				this.seen = true
				this.$globalTheme.scrollY = false
			},
			close: function() {
				this.seen = false
				this.$globalTheme.scrollY = true
			},
			itemSelected: function(value) {
				return this.selected.indexOf(value) !== -1
			},
			itemClicked: function(value) {
				const index = this.selected.indexOf(value)
				if (index != -1) {
					this.selected.splice(index, 1)
				} else {
					this.selected.push(value)
				}
			},
			resetBtnClicked: function() {
				this.selected = [];
			},
			confirmBtnClicked: function() {
				this.$refs.uDropdown.close()
			}
		}
	}
</script>

<style lang="scss">
	.filter-box {
		width: 750rpx;
		background-color: #FFF;
		overflow: hidden;
	}

	.u-cell-item {
		margin: 0;
		padding: 0;
		height: 88rpx;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		background-color: #FFF;
	}

	.mask {
	}
</style>
