<template>
	<view class="index-view">
		<view class="index-head-view">
			<nongji-class-search></nongji-class-search>
		</view>
		<view class="index-main-view body">
			<train-cover></train-cover>
		</view>
	</view>
</template>

<script>
	import NongjiClassSearch from '../../components/nongji-class-search'
	import TrainCover from '../../components/train-cover'
	export default{
		data(){
			return {}
		},
		components:{
			NongjiClassSearch,
			TrainCover
		}
	}
</script>

<style lang="scss" scoped>
	.index-main-view{
		margin-top: 120rpx;
	}
</style>
