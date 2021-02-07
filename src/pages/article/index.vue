<template>
	<view class="index-view">
		<view class="index-head-view">
			<nongji-class-search></nongji-class-search>
			<nongji-class-filter></nongji-class-filter>
		</view>
		<view class="index-main-view body">
			<nongji-article-cover></nongji-article-cover>
		</view>
	</view>
</template>

<script>
	import NongjiClassSearch from '../../components/nongji-class-search'
	import NongjiClassFilter from '../../components/nongji-class-filter'
	import NongjiArticleCover from '../../components/article-cover'
	export default {
		data() {},
		components: {
			NongjiClassSearch,
			NongjiClassFilter,
			NongjiArticleCover
		}
	}
</script>

<style lang="scss">
	.index-main-view{
		padding-top: 16rpx;
	}
</style>
