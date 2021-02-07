<template>
	<view class="index-view">
		<view class="index-head-view">
			<nongji-class-search></nongji-class-search>
			<nongji-class-filter></nongji-class-filter>
		</view>
		<view class="index-main-view body">
			<course-cover></course-cover>
		</view>
	</view>
</template>

<script>
	
	import NongjiClassSearch from '../../components/nongji-class-search'
	import NongjiClassFilter from '../../components/nongji-class-filter'
	import CourseCover from '../../components/course-cover'
	export default{
		data(){
			return {}
		},
		components:{
			NongjiClassSearch,
			NongjiClassFilter,
			CourseCover
		}
	}
</script>

<style lang="scss">
	.index-main-view{
		padding-top: 16rpx;
	}
</style>
