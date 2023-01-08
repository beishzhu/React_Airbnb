import {configureStore} from "@reduxjs/toolkit"
import homeReducer from "./moudles/home"
import entireReduce from "./moudles/entire"
const store = configureStore({
	reducer:{
		home:homeReducer,
		entire:entireReduce
	}
})

export default store