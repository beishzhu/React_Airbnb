import hyRequest from "..";


export function getHomeGoodPriceData() {
	return hyRequest.get({
		url:"http://codercba.com:1888/airbnb/api/home/goodprice"
	})
}

export function getHomeHigtScoreData() {
	return hyRequest.get({
		url:"http://codercba.com:1888/airbnb/api/home/highscore"
	})
}

export function getHomeDiscountData() {
	return hyRequest.get({
		url:"http://codercba.com:1888/airbnb/api/home/discount"
	})
}

// 热门推荐
export function getHomeHotRecommendData() {
	return hyRequest.get({
		url:"http://codercba.com:1888/airbnb/api/home/hotrecommenddest"
	})
}