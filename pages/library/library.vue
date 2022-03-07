<template>
	<view>
		<uni-nav-bar left-text="iRead" right-icon="search" @clickRight="onSearch"></uni-nav-bar>
	</view>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		onSearch() {
			uni.navigateTo({
				url: '../search/search'
			})
		}
	}
}
</script>

<style>
</style>
