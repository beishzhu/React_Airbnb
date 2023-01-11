import Rating from '@material-ui/lab/Rating'; // 只能用 4.0版本
// import { Rating } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {ItemWrapper} from './style'



const RoomItem = memo((props) => {
	const {itemData,itemWidth="25%"} = props
	return (
		<ItemWrapper 
			verifyColor={itemData?.verify_info.text_colo || "#39576a"}
			itemWidth={itemWidth}
		>
			<div className='inner'>
				<div className='cover'>
					<img src={itemData.picture_url} alt="" />
				</div>
				<div className='desc'>
					{itemData.verify_info.messages.join(' · ')}
				</div>
				<div className='name'>{itemData.name}</div>
				<div className='price'>￥{itemData.price}/晚</div>
				<div className='bottom'>
					
				{/* <Rating value={2.5} precision={0.2} readOnly sx={{fontSize:"12px",color:"#00848a", marginRight:"-1px"}}/> */}
				<Rating value={2.5} precision={0.2} readOnly size="small" />
				<span className='count'>{itemData.reviews_count}</span>
				{
					itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
				}
				</div>
			</div>
		</ItemWrapper>
	)
})

RoomItem.propTypes = {
	itemData:PropTypes.object,
	itemWidth:PropTypes.string
}

export default RoomItem