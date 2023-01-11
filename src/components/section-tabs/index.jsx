import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from "classnames"
const SectionTabs = memo((props) => {
	
	const {tabNames = [], tabClick} = props
	const [currentIndex,setCurrentIndex] = useState(0)
	
	function itemClickHandle(index,item){
		setCurrentIndex(index)
		tabClick(index,item) // 子组件： 调用父组件给子组件传递过来的函数，此时子组件这里把 index 和 item传递给父组件用
	}
	
	return (
		<SectionTabsWrapper>
			{
				tabNames.map((item,index)=>{
					return(
						<div 
						key={index}
						className={classNames("item",{active:index===currentIndex})}
						onClick={e=> itemClickHandle(index,item)}
						>
						{item}
						</div>
					)
				})
			}
		</SectionTabsWrapper>
	)
})

SectionTabs.propTypes = {
	tabNames:PropTypes.array
}

export default SectionTabs