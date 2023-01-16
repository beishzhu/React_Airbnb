import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetialPictures = memo((props) => {
	// 从 redux 中获取数据
	const { detailInfo } = useSelector((state)=>({
		detailInfo:state.detail.detailInfo
	}))
	return (
		<PicturesWrapper>
			<div className='pictures'>
				<div className='left'>
					<div className='item'>
						<img src={detailInfo.picture_urls?.[0]} alt="" />
						<div className='cover'></div>
					</div>
				</div>
				<div className='right'>
					{
						detailInfo.picture_urls?.slice(1,5).map((item)=>{
							return (
								<div className='item'>
									<img className='item' key={item} src={item} alt="" />
									<div className='cover'></div>
								</div>
							)
						})
					}
				</div>
			</div>
		</PicturesWrapper>
	)
})

DetialPictures.propTypes = {}

export default DetialPictures