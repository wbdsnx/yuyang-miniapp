<template>
	<view class="body">
		<u-navbar back-text="搜索" title="农技课堂" :back-icon-color='backTextStyle.color' back-icon-size="48rpx" :back-text-style='backTextStyle'
		 :border-bottom='false' title-color='#000' title-size='34rpx'></u-navbar>

		<u-search v-model="value" placeholder="搜索" shape="square" @change="change" @custom="custom" @search="search"
		 :clearabled="true" input-align="left" @clear="clear" :show-action="false" margin="38rpx 0 0 0"></u-search>
		<view class="history-search">
			历史搜索
			<view class="records">
				<nongji-class-tag v-for="(tag) in tags" 
				:text='tag' 
				:hightlight="tag == '鹅' || tag == '蜜蜂'"
				padding="15rpx 42rpx"></nongji-class-tag>
			</view>
		</view>
	</view>
</template>

<script>
	import NongjiClassTag from '../../components/nongji-class-tag'

	export default {
		data() {
			return {
				backTextStyle: {
					color: this.$globalTheme.color,
					fontSize: '30rpx'
				},
				value: '',
				shape: 'square',
				clearabled: true,
				showAction: false,
				tagColor: this.$globalTheme.color,
				tagBgColor: '#F4FCF9',
				tags: ['鸡鸡鸡鸡鸡鸡鸡鸡鸡蛋', '鹌鹑', '鹅', '鸭', '蜜蜂', '猪', '鸽子'],
			}
		},
		components: {
			NongjiClassTag
		},
		watch: {
			// 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
			// 也能知道value值当前的内容
			value(val) {
				// console.log(val);
			}
		},
		methods: {
			valueChange(index) {
				this.value = index == 0 ? '' : '天山雪莲';
			},
			clearabledChange(index) {
				this.clearabled = index == 0 ? true : false;
			},
			change(value) {
				// 搜索框内容变化时，会触发此事件，value值为输入框的内容
				//console.log(value);
			},
			custom(value) {
				//console.log(value);
			},
			search(value) {},
			clear() {
				// console.log(this.value);
			}
		}
	}
</script>

<style lang="scss">
	.history-search {
		margin-top: 40rpx;
		font-size: 26rpx;
		font-weight: 400;
		line-height: 40rpx;
		color: #C4C4C4;
	}

	.records {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
