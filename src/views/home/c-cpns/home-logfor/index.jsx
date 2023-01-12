import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LogfoWrapper } from './style'

const HomeLogfor = memo((props) => {
	const {infoData} = props
	return (
		<LogfoWrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
		
				<div className='longfor-list'>
					<ScrollView >
						{
							infoData.list.map(item => {
								return <LongForItem itemData={item} key={item.city} />
							})
						}
					</ScrollView>
				</div>
			
		</LogfoWrapper>
	)
})

HomeLogfor.propTypes = {
	infoData:PropTypes.object
}

export default HomeLogfor