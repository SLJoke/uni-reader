import {
	service
} from '../utils/service'

// export const getSearchHotWords = () => service({ url: '/book/search-hotwords'})

// export const getSearch = keywords => service({ url: `/book/fuzzy-search?query=${keywords }`})

export function getSearchHotWords() {
	return service({
		url: '/book/search-hotwords'
	})
}

export function getSearch(keywords) {
	return service({
		url: `/book/fuzzy-search?query=${keywords}`
	})
}