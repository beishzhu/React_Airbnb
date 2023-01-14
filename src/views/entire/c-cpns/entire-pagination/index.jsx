import React, { memo } from 'react'
import Pagination from '@material-ui/lab/Pagination';

import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/moudles/entire/actionCreaors';

const EntirePagination = memo(() => {
	
	const {totalCount, currentPage, roomList} = useSelector((state)=>({
		totalCount:state.entire.totalCount,
		currentPage:state.entire.currentPage,
		roomList:state.entire.roomList
	}),shallowEqual)
	const startCount = currentPage * 20 + 1
	const endCount = (currentPage + 1) * 20
	// 处理分页逻辑
	const dispatch = useDispatch()
	
	function pageChangeHandle(event,pageCount) {
		dispatch(fetchRoomListAction(pageCount - 1))
		window.scroll(0,0)
	}
	return (
		<PaginationWrapper>
			{
				!!roomList.length && (
				<div className='info'>
					<Pagination count={totalCount} onChange={pageChangeHandle}/>
					<div className='desc'>
						第 {startCount} - {endCount} 个房源，共超过{totalCount}个
					</div>
				</div>
				)
			}
				
		</PaginationWrapper>
	)
})

export default EntirePagination