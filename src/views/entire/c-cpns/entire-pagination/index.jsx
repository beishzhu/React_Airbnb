import React, { memo } from 'react'
import Pagination from '@material-ui/lab/Pagination';

import { PaginationWrapper } from './style'
import { useSelector } from 'react-redux';

const EntirePagination = memo(() => {
	
	const {totalCount, currentPage, roomList} = useSelector((state)=>({
		totalCount:state.entire.totalCount,
		currentPage:state.entire.currentPage,
		roomList:state.entire.roomList
	}))
	const startCount = currentPage * 20 + 1
	const endCount = (currentPage + 1) * 20
	
	return (
		<PaginationWrapper>
			{
				!!roomList.length && (
				<div className='info'>
					<Pagination count={totalCount} />
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