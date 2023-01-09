// rtk 方式
import { getHomeGoodPriceData } from '@/services'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

// 创建异步请求
export const fetchHomeDataAction = createAsyncThunk("fetchdata",async(payload)=>{
	const res = await	getHomeGoodPriceData()
	return res
})


const homeSlice = createSlice({
	name:"home",
	initialState:{
		goodPriceInfo:{}
	},
	reducers:{
		// 修改state数据
		changeGoodPriceInfoAction(state,{payload}){
			state.goodPriceInfo = payload
		}
	},
	
	// 获取网络请求的数据保存在 store中
	extraReducers:{
		[fetchHomeDataAction.fulfilled](state,{payload}){
			state.goodPriceInfo = payload
		}
	}
})

export const {changeGoodPriceInfoAction} = homeSlice.actions

export default homeSlice.reducer