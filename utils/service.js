// const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
const baseUrl = '/api'

export function service({ url, type }) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: type || 'GET',
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
