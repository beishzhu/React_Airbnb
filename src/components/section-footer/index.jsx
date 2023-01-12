import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {SectionFooterWrapper} from './style'

const SectionFooter = memo((props) => {
	const {name} = props
	let showMessage = '显示全部'
	if(name){
		showMessage = `查看更多${name}`
	}
	return (
		<SectionFooterWrapper color={name ? "#00848A" :"#000"}>
			<div className='info'>
				<span className='text'>{showMessage}</span>
				<IconMoreArrow />
			</div>
		</SectionFooterWrapper>
	)
})

SectionFooter.propTypes = {
	name:PropTypes.string
}

export default SectionFooter