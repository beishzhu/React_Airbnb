import {createSlice} from "@reduxjs/toolkit"

const detialSlice = createSlice({
	name:"detail",
	initialState:{
		detailInfo:{}
	},
	reducers:{
		changeDetialInfoAction(state,{payload}){
			state.detailInfo = payload
		}
	}
})
export const {changeDetialInfoAction} = detialSlice.actions
export default detialSlice.reducer