<template>
	<view class="index-view">
		<view class="index-head-view">
			<nongji-class-search></nongji-class-search>
			<nongji-class-filter></nongji-class-filter>
		</view>
		<view class="index-main-view body">
			<help-cover></help-cover>
		</view>
	</view>
</template>

<script>
	import NongjiClassSearch from '../../components/nongji-class-search'
	import NongjiClassFilter from '../../components/nongji-class-filter'
	import HelpCover from '../../components/help-cover'
	export default{
		data(){
			return{}
		},
		components:{
			NongjiClassSearch,
			NongjiClassFilter,
			HelpCover
		}
	}
</script>

<style lang="scss">
	.index-main-view{
		padding-top: 16rpx;
	}
</style>
