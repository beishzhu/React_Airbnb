import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
	// 定义内部的状态 是否显示右边按钮
	const [showRight,setShowRight] = useState(false)
	const totalDistanceRef = useRef() // 记录totalDistance 的距离
	
	const [posIndex,setPosIndex] = useState(0)
	// 组件渲染完毕 判断是否显示右侧的按钮
	const scrollContentRef = useRef()
	// useEffect 如果数据没有发生变化 是不会重新执行的，所以要传入第个参数来控制
	useEffect(()=>{
	const scrollWidth =	scrollContentRef.current.scrollWidth  // 一共可以滚动的宽度
	const clientWidth = scrollContentRef.current.clientWidth  // 内容本身的宽度
	const totalDistance = scrollWidth - clientWidth
	totalDistanceRef.current = totalDistance // 记录totalDistance 的距离
	setShowRight(totalDistance > 0)
	},[props.children])
	
	// 事件处理逻辑
	function rightClickHandle() {
		const newIndex = posIndex + 1 // 记录每移动一个就索引+1
		const newEl = scrollContentRef.current.children[newIndex] // 获取到是第几个item
		const nweOffsetLeft = newEl.offsetLeft // 获取到 滚动距离 （注意相对定位的元素，所以要设置定位）
		scrollContentRef.current.style.transform = `translate(-${nweOffsetLeft}px)`
		setPosIndex(newIndex)
		// 是否继续显示右边按钮
		setShowRight(totalDistanceRef.current > nweOffsetLeft)
	} 
	return (
		<ViewWrapper>
			<button>左边按钮</button>
			{showRight && <button onClick={rightClickHandle}>右边按钮</button>}
			{/* 插槽使用 */}
			<div className='scroll-ceotent' ref={scrollContentRef}>
				{props.children}
			</div>
		</ViewWrapper>
	)
})

ScrollView.propTypes = {}

export default ScrollView