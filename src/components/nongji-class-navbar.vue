<template>
	<view>
		<u-navbar :is-back="isBack" :back-text="backText" back-icon-color="#20BF8E" :title="titleText" back-icon-size="48rpx"
		 :back-text-style="{'color':'#20BF8E','fonst-size':'30rpx'}" :border-bottom="false" title-color="#000" height='88rpx'></u-navbar>
	</view>
</template>

<script>
	export default {
		name: 'nongji-class-navbar',
		props: {
			isBack: {
				type: Boolean,
				default: false
			},
			backText: {
				type: String,
				default: ''
			},
			titleText: {
				type: String,
				default: '农技课堂'
			},
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
</style>
