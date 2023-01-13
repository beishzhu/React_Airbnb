import { fetchRoomListAction } from '@/store/moudles/entire/actionCreaors';
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import EntireFilter from './c-cpns/entire-filter';
import EntirePagination from './c-cpns/entire-pagination';
import EntireRooms from './c-cpns/entire-rooms';
import { EntireWrapper } from "./style";
 const Entire = memo(() =>{
	
	// 发起在store封装好的网络请求，获取数据并且保存在当前的页面
	const dispatch = useDispatch()
	
	useEffect(()=>{
		dispatch(fetchRoomListAction())
	},[dispatch])
	
	return (
		<EntireWrapper>
			<EntireFilter/>
			<EntireRooms/>
			<EntirePagination/>
		</EntireWrapper>
	)
})

export default Entire
