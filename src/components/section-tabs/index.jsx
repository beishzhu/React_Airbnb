import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from "classnames"
const SectionTabs = memo((props) => {
	
	const {tabNames = []} = props
	const [currentIndex,setCurrentIndex] = useState(0)
	
	function itemClickHandle(index){
		setCurrentIndex(index)
	}
	
	return (
		<SectionTabsWrapper>
			{
				tabNames.map((item,index)=>{
					return(
						<div 
						key={index}
						className={classNames("item",{active:index===currentIndex})}
						onClick={e=>itemClickHandle(index)}
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