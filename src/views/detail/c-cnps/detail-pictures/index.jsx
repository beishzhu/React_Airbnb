import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetialPictures = memo((props) => {
	// 定义组件的内部状态
	const [showBrowser,setShowBrowser] = useState(false)
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
			<div className='show-btn' onClick={e=> setShowBrowser(true)}>显式</div>
		{showBrowser && <PictureBrowser />}
		</PicturesWrapper>
	)
})

DetialPictures.propTypes = {}

export default DetialPictures