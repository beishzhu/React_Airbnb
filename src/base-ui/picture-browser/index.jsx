
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import {CSSTransition,SwitchTransition } from "react-transition-group"
 
import { BrowerWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-buttom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import Indicator from '../scroll-view/indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
	const {pictureUrls,closeClick} = props
	const [currentIndex,setCurrentIndex] = useState(0)
	const [isNext,setIsNext] = useState(true)
	const [showList,setShowList] = useState(true)
	
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
	
	function controlClickHandle(isNext = true) {
		let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
		if(newIndex < 0) newIndex = pictureUrls.length -1
		if(newIndex > pictureUrls.length - 1) newIndex = 0
		setCurrentIndex(newIndex)
		setIsNext(isNext)
	}
	
	// 点击小图片 切换大图片
	function bottomItemClickHandle(index){
		setIsNext(index > currentIndex)
		setCurrentIndex(index)
	
	}
	return (
		<BrowerWrapper isNext={isNext} showList={showList}>
		<div className='top'>
			<div className='close-btn' onClick={closeBtnClickHandle}>
				<IconClose />
			</div>
		</div>
		<div className='slider'>
			<div className='control'>
				<div className='btn left' onClick={e=>controlClickHandle(false)}>
					<IconArrowLeft width="77" height="77"/>
				</div>
				<div className='btn right' onClick={e=>controlClickHandle(true)}>
					<IconArrowRight width="77" height="77"/>
				</div>
			</div>
			<div className='picture'>
				{/* 过度动画 */}
			<SwitchTransition mode='in-out'>
				<CSSTransition 
				key={pictureUrls[currentIndex]}
				classNames="pic"
				timeout={250}
				>
					<img src={pictureUrls[currentIndex]} alt="" />
				</CSSTransition>
			</SwitchTransition>
			</div>
		</div>
		<div className='preview'>
			<div className='info'>
				<div className='desc'>
					<div className='count'>
						<span>{currentIndex+1}/{pictureUrls.length}:</span>
						<span>room apartemt图片{currentIndex+1}</span>
					</div>
					<div className='toggle' onClick={e=> setShowList(!showList)}>
						<span>{showList ?"隐藏":"显式"}照片列表</span>
						{showList ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/>}
					</div>
				</div>
				<div className='list'>
						<Indicator selectIndex={currentIndex}>
							{
								pictureUrls.map((item,index)=>{
									return(
										<div 
										className={classNames("item",{active:currentIndex===index})} 
										key={item}
										onClick={e=>bottomItemClickHandle(index)}
										>
											<img src={item} alt="" />
										</div>
									)
								})
							}
						</Indicator>
					</div>
			</div>
		</div>
		</BrowerWrapper>
	)
})

PictureBrowser.propTypes = {
	pictureUrls:PropTypes.array
}

export default PictureBrowser