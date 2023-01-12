import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
	// 定义内部的状态 是否显示按钮
	const [showLeft,setShowLeft] = useState(false)
	const [showRight,setShowRight] = useState(false)
	const totalDistanceRef = useRef() // 记录totalDistance 的距离
	
	const [posIndex,setPosIndex] = useState(0)
	// 组件渲染完毕 判断是否显示右侧的按钮
	const scrollContentRef = useRef()
	// useEffect 如果数据没有发生变化 是不会重新执行的，所以要传入第个参数来控制 [props.children]
	useEffect(()=>{
	const scrollWidth =	scrollContentRef.current.scrollWidth  // 一共可以滚动的宽度
	const clientWidth = scrollContentRef.current.clientWidth  // 内容本身的宽度
	const totalDistance = scrollWidth - clientWidth
	totalDistanceRef.current = totalDistance // 记录totalDistance 的距离
	setShowRight(totalDistance > 0)
	},[props.children])
	
	// 事件处理逻辑
	function controClickHandle(isRight) {
		const newIndex = isRight ? posIndex + 1 : posIndex - 1 // 记录每移动一个就索引 -1
		const newEl = scrollContentRef.current.children[newIndex] // 获取到是第几个item
		const nweOffsetLeft = newEl.offsetLeft // 获取到 滚动距离 （注意相对定位的元素，所以要设置定位）
		scrollContentRef.current.style.transform = `translate(-${nweOffsetLeft}px)`
		setPosIndex(newIndex)
		// 是否继续显示左边按钮
		setShowRight(totalDistanceRef.current > nweOffsetLeft)
		setShowLeft(nweOffsetLeft > 0)
		
		
	}
	return (
		<ViewWrapper>
			{showLeft && (
				 <div className='control left' onClick={e => controClickHandle(false)}>
					<IconArrowLeft />
				 </div>
			)}
			{showRight && (
				<div className='control right' onClick={e => controClickHandle(true)}>
					<IconArrowRight />
				</div>
			)}
			{/* 插槽使用 */}
		<div className='scroll'>
			<div className='scroll-ceotent' ref={scrollContentRef}>
					{props.children}
				</div>
		</div>
		</ViewWrapper>
	)
})

ScrollView.propTypes = {}

export default ScrollView