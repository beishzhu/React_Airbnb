import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
	// 定义内部的状态 是否显示右边按钮
	const [showRight,setShowRight] = useState(false)
	
	// 组件渲染完毕 判断是否显示右侧的按钮
	const scrollContentRef = useRef()
	// useEffect 如果数据没有发生变化 是不会重新执行的，所以要传入第个参数来控制
	useEffect(()=>{
	const scrollWidth =	scrollContentRef.current.scrollWidth  // 一共可以滚动的宽度
	const clientWidth = scrollContentRef.current.clientWidth  // 内容本身的宽度
	const totalDistance = scrollWidth - clientWidth
	setShowRight(totalDistance > 0)
	},[props.children])
	return (
		<ViewWrapper>
			<button>左边按钮</button>
			{showRight && <button>右边按钮</button>}
			{/* 插槽使用 */}
			<div className='scroll-ceotent' ref={scrollContentRef}>
				{props.children}
			</div>
		</ViewWrapper>
	)
})

ScrollView.propTypes = {}

export default ScrollView