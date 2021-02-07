<template>
	<view class="index-view">
		<view class="index-head-view">
			<nongji-class-search></nongji-class-search>
			<nongji-class-filter></nongji-class-filter>
		</view>
		<scroll-view class="index-main-view" :scroll-y="true" :scroll-x="false">
			<view class="live-course">
				<card-header-section title="直播课程" @click="onMoreClick('/pages/live/index',false)"></card-header-section>
				<live-cover></live-cover>
			</view>
			<view class="expert-recommendation">
				<card-header-section title="专家推荐"  @click="onMoreClick('/pages/expert/index',true)"></card-header-section>
				<expert-recommend-cover></expert-recommend-cover>
			</view>
			<view class="help">
				<card-header-section title="专家回答" @click="onMoreClick('/pages/help/index',false)"></card-header-section>
				<help-cover></help-cover>
			</view>
			<view class="essence-course">
				<card-header-section title="精选课程" @click="onMoreClick('/pages/course/index',true)"></card-header-section>
				<course-cover></course-cover>
			</view>
			<view class="agricultural-article">
				<card-header-section title="农技文章" @click="onMoreClick('/pages/article/index',true)"></card-header-section>
				<article-cover></article-cover>
			</view>
			<view class="offline-train">
				<card-header-section title="线下培训" @click="onMoreClick('/pages/train/index',false)"></card-header-section>
				<train-cover></train-cover>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import NongjiClassSearch from '../../components/nongji-class-search'
	import NongjiClassFilter from '../../components/nongji-class-filter'
	import CardHeaderSection from "../../components/card-header-section"
	import LiveCover from '../../components/live-cover'
	import ExpertRecommendCover from '../../components/expert-recommend-cover'
	import HelpCover from '../../components/help-cover'
	import CourseCover from '../../components/course-cover'
	import ArticleCover from '../../components/article-cover'
	import TrainCover from '../../components/train-cover'
	export default {
		data() {
			return {
				scrolY: function(){
					console.log(this.$globalTheme.scrollY)
					return this.$globalTheme.scrollY
				}
			}
		},
		components: {
			NongjiClassSearch,
			NongjiClassFilter,
			CardHeaderSection,
			LiveCover,
			ExpertRecommendCover,
			HelpCover,
			CourseCover,
			ArticleCover,
			TrainCover
		},
		methods: {
			searchClick: function() {
				uni.navigateTo({
					url: './search'
				})
			},
			onMoreClick: function(url,withTab) {
				if(withTab !== true){
					uni.navigateTo({
						url:url
					})
				}else{
					uni.switchTab({
						url:url
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">

	.index-main-view {
		margin-top: 208rpx;
		background: #F6F6F6;
	}


	.live-course,
	.expert-recommendation,
	.help,
	.essence-course,
	.agricultural-article,
	.offline-train {
		background-color: #FFF;
		padding: 0 32rpx;
	}
	.help,.expert-recommend-cover-view{
		padding-bottom: 32rpx;
	}
	
	.expert-recommendation,
	.help,
	.essence-course,
	.agricultural-article,
	.offline-train {
		margin-top: 16rpx;
	}
	
	.offline-train{
		padding-bottom: 16rpx;
		margin-bottom: 16rpx;
	}
	
</style>
