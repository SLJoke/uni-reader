<template>
	<view>
		<uni-nav-bar fixed left-icon="back" leftWidth="60rpx" rightWidth="60rpx" @clickLeft="onBack">
			<view slot="default" class="search">
				<uni-search-bar
					style="padding: 0; width: 100%;"
					cancelButton="none"
					placeholder="搜索书名、作者"
					@confirm="onConfirm"
					v-model="searchKeywords"
				/>
			</view>
		</uni-nav-bar>

		<view v-if="searchBooks === null">
			<uni-group title="大家都在搜" rightText="换一批" top="0">
				<view class="recommend-words">
					<view
						class="recommend-words-item"
						v-for="(item, index) in randomSearchHotWords"
						:key="index"
					>{{ item.word }}</view>
				</view>
			</uni-group>

			<uni-group
				title="搜索历史"
				:rightText="searchHistory.length === 0 ? '' : '清除'"
				@onRight="clearSearchHistory"
				top="0"
			>
				<view class="search-history">
					<view
						class="search-history-item"
						v-for="(item, index) in searchHistory"
						:key="item"
					>{{ item }}</view>
				</view>
			</uni-group>
		</view>
		<view v-else>{{ searchBooks }}</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {
	getSearchHotWords,
	getSearch
} from '../../api/index.js'
import { getArrayItems } from '../../utils/utils.js'

export default {
	data() {
		return {
			searchHotWords: null,
			searchKeywords: null,
			searchBooks: null
		};
	},
	created() {
		this._getSearchHotWords();
	},
	computed: {
		...mapState(['searchHistory']),
		randomSearchHotWords() {
			return getArrayItems(this.searchHotWords, 6);
		}
	},
	methods: {
		...mapMutations(['setSearchHistory', 'clearSearchHistory']),
		onBack() {
			uni.navigateBack();
		},
		onConfirm() {
			if (this.searchKeywords !== null && this.searchKeywords.trim() !== "") {
				this.setSearchHistory(this.searchKeywords.trim());
				this._getSearch();
			}
		},
		async _getSearchHotWords() {
			const res = await getSearchHotWords();
			this.searchHotWords = res.searchHotWords;
		},
		async _getSearch() {
			const res = await getSearch(this.searchKeywords);
			this.searchBooks = res.books;
			console.log(res);
		}
	}
}
</script>

<style scoped>
.search {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
}
.recommend-words {
	display: flex;
	flex-wrap: wrap;
}
.recommend-words-item {
	padding: 10rpx;
	margin: 10rpx;
	color: #ffffff;
	background-color: #18bc37;
}
.search-history {
	display: flex;
	flex-wrap: wrap;
}
.search-history-item {
	padding: 10rpx;
	margin: 10rpx;
	color: #ffffff;
	background-color: #90bc18;
}
</style>
