// rtk 方式
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHigtScoreData } from '@/services'
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
	getHomeHigtScoreData().then(res=>{
		dispatch(changeHighScoreInfoAction(res))
	})
	getHomeDiscountData().then(res=>{
		dispatch(changeDiscountInfoAction(res))
	})
})

const homeSlice = createSlice({
	name:"home",
	initialState:{
		goodPriceInfo:{},
		highScoreInfo:{},
		discountInfo:{}
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
		}
	},
	
	// 获取网络请求的数据保存在 store中
	// extraReducers:{
	// 	[fetchHomeDataAction.fulfilled](state,{payload}){
	// 		state.goodPriceInfo = payload
	// 	}
	// }
})

export const {changeGoodPriceInfoAction,changeHighScoreInfoAction,changeDiscountInfoAction} = homeSlice.actions

export default homeSlice.reducer