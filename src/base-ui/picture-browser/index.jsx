import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowerWrapper } from './style'

const PictureBrowser = memo((props) => {
	
	useEffect(()=>{
		// 关闭滚动条功能
		document.body.style.overflow = "hidden"
		return ()=>{
			document.body.style.overflow = "auto"
		}
	},[])
	
	return (
		<BrowerWrapper>PictureBrowser</BrowerWrapper>
	)
})

PictureBrowser.propTypes = {}

export default PictureBrowser