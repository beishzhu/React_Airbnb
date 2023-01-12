// rtk 方式
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHigtScoreData, getHomeHotRecommendData,getHomeLongforData, getHomePlusforData } from '@/services'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

// 创建异步请求
// export const fetchHomeDataAction = createAsyncThunk("fetchdata",async(payload)=>{
// 	const res = await	getHomeGoodPriceData()
// 	return res
// })
export const fetchHomeDataAction = createAsyncThunk("fetchdata",(payload,{dispatch})=>{
	getHomeGoodPriceData().then(res=>{
		dispatch(changeGoodPriceInfoAction(res))
	})
	getHomeHigtScoreData().then(res=> {
		dispatch(changeHighScoreInfoAction(res))
	})
	getHomeDiscountData().then(res=> {
		dispatch(changeDiscountInfoAction(res))
	})
	getHomeHotRecommendData().then(res=> {
		dispatch(changeHotRecommendInfoAction(res))
	})
	getHomeLongforData().then(res => {
		dispatch(changeLongforInfoAction(res))
	})
	getHomePlusforData().then(res => {
		dispatch(changePlusInfoAction(res))
	})
})

const homeSlice = createSlice({
	name:"home",
	initialState:{
		goodPriceInfo:{},
		highScoreInfo:{},
		discountInfo:{},
		hotRecommendInfo:{},
		longforInfo:{},
		plusInfo:{}
	},
	reducers:{
		// 修改state数据
		changeGoodPriceInfoAction(state,{payload}){
			state.goodPriceInfo = payload
		},
		changeHighScoreInfoAction(state,{payload}){
			state.highScoreInfo = payload
		},
		changeDiscountInfoAction(state,{payload}){
			state.discountInfo = payload
		},
		changeHotRecommendInfoAction(state,{payload}){
			state.hotRecommendInfo = payload
		},
		changeLongforInfoAction(state,{payload}){
			state.longforInfo = payload
		},
		changePlusInfoAction(state,{payload}){
			state.plusInfo = payload
		}
	},
	
	// 获取网络请求的数据保存在 store中
	// extraReducers:{
	// 	[fetchHomeDataAction.fulfilled](state,{payload}){
	// 		state.goodPriceInfo = payload
	// 	}
	// }
})

export const {
	changeGoodPriceInfoAction,
	changeHighScoreInfoAction,
	changeDiscountInfoAction,
	changeHotRecommendInfoAction,
	changeLongforInfoAction,
	changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer