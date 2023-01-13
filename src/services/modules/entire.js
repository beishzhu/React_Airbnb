import hyRequest from "..";

export function getEntireRoomList(offset = 0,size =20){
	return hyRequest.get({
		url:"http://codercba.com:1888/airbnb/api/entire/list",
		params:{
			offset,
			size
		}
	})
}