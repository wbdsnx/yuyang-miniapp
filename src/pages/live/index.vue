<template>
	<view class="index-view">
		<view class="index-head-view">
			<nongji-class-search></nongji-class-search>
			<nongji-class-filter></nongji-class-filter>
		</view>
		<scroll-view class="index-main-view body" :scroll-y="true">
			<live-cover v-for="(live,key) in list" :key="key" :open="live.open" height="527.99rpx">
			</live-cover>

		</scroll-view>
	</view>
</template>

<script>
	import NongjiClassSearch from '../../components/nongji-class-search'
	import NongjiClassFilter from '../../components/nongji-class-filter'
	import LiveCover from "../../components/live-cover"
	export default {
		data() {
			return {
				list: [{
						open: true,
						LiveCoverImage: "",
						expertAvatar: "",
						expertName: "",
						expertDesc: "",
						saw: "",
						waitTime: ""
					},
					{
						open: true,
						LiveCoverImage: "",
						expertAvatar: "",
						expertName: "",
						expertDesc: "",
						saw: "",
						waitTime: ""
					},
					{
						open: false,
						LiveCoverImage: "",
						expertAvatar: "",
						expertName: "",
						expertDesc: "",
						saw: "",
						waitTime: ""
					}
				],
			}
		},
		components: {
			NongjiClassSearch,
			NongjiClassFilter,
			LiveCover
		}
	}
</script>

<style lang="scss">
	.index-main-view{
		padding-top: 16rpx;
	}
</style>
