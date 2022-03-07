<template>
	<view class="container">
		<uni-nav-bar left-text="iRead" right-icon="search" @clickRight="onSearch"></uni-nav-bar>
	</view>
</template>

<script>
import uniCustom from '../../components/uni-section/uni-section.vue'

export default {
	data() {
		return {

		}
	},
	components: {
		uniCustom
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
.container {
	font-size: 14px;
	line-height: 24px;
}
</style>
