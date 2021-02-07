<template>
	<view class="index-view">
		<view class="index-head-view">
			<view class="index-head-view">
				<nongji-class-search></nongji-class-search>
				<nongji-class-filter></nongji-class-filter>
			</view>
		</view>
		<view class="index-main-view body">
			<expert-cover></expert-cover>
		</view>
	</view>
</template>

<script>
	import NongjiClassSearch from '../../components/nongji-class-search'
	import NongjiClassFilter from '../../components/nongji-class-filter'
	import ExpertCover from '../../components/expert-cover'
	export default{
		data(){
			return{}
		},
		components:{
			NongjiClassSearch,
			NongjiClassFilter,
			ExpertCover
		}
	}
	
</script>

<style lang="scss">
	.index-main-view{
		padding-top: 16rpx;
	}
</style>
