import {configureStore} from "@reduxjs/toolkit"
import homeReducer from "./moudles/home"
import entireReduce from "./moudles/entire"
import detailReducer from "./moudles/detail"
const store = configureStore({
	reducer:{
		home:homeReducer,
		entire:entireReduce,
		detail:detailReducer
	}
})

export default store