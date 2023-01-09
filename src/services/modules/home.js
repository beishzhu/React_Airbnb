import hyRequest from "..";


export function getHomeGoodPriceData() {
	return hyRequest.get({
		url:"http://codercba.com:1888/airbnb/api/home/goodprice"
	})
}