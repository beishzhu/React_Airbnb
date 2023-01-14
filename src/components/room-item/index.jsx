import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Rating from '@material-ui/lab/Rating'; // 只能用 4.0版本
import { Carousel } from 'antd';

// import { Rating } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import {ItemWrapper} from './style'



const RoomItem = memo((props) => {
	const {itemData,itemWidth="25%"} = props
	const sliderRef = useRef()
	function controlClickHandle(isRight = true) {
		isRight ? sliderRef.current.next() : sliderRef.current.prev()
	}
	return (
		<ItemWrapper 
			verifyColor={itemData?.verify_info.text_colo || "#39576a"}
			itemWidth={itemWidth}
		>
			<div className='inner'>
						{/* <div className='cover'>
					<img src={itemData.picture_url} alt="" />
				</div> */}
				{/* 轮播图 */}
				<div className='slider'>
					<div className='control'>
						<div className='btn left' onClick={e=>controlClickHandle(false)}>
							<IconArrowLeft width='30' height='30'/>
						</div>
						<div className='btn right' onClick={e=>controlClickHandle(true)}>
							<IconArrowRight width='30' height='30'/>
						</div>
					</div>
					<Carousel dots={false} ref={sliderRef}>
						{
							itemData?.picture_urls?.map(item =>{
								return (
									<div className='cover' key="item">
										<img src={item} alt="" />
									</div>
								)
							})
						}
					</Carousel>
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