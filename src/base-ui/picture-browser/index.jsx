import IconClose from '@/assets/svg/icon-close'
import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowerWrapper } from './style'

const PictureBrowser = memo((props) => {
	const {pictureUrls,closeClick} = props
	useEffect(()=>{
		// 关闭滚动条功能
		document.body.style.overflow = "hidden"
		return ()=>{
			document.body.style.overflow = "auto"
		}
	},[])
	
	// 时间监听的逻辑
	function closeBtnClickHandle(params) {
		if(closeClick) closeClick()
	}
	
	return (
		<BrowerWrapper>
		<div className='top'>
			<div className='close-btn' onClick={closeBtnClickHandle}>
				<IconClose />
			</div>
		</div>
		<div className='list'></div>
		<div className='indicator'></div>
		</BrowerWrapper>
	)
})

PictureBrowser.propTypes = {
	pictureUrls:PropTypes.array
}

export default PictureBrowser