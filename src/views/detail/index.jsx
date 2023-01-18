import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/moudles/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfos from './c-cnps/detail-infos'
import DetialPictures from './c-cnps/detail-pictures'
import { DetailWrapper } from './style'
 const Detail = memo(() => {
	
	const dispatch = useDispatch()
	
	useEffect(()=>{
		dispatch(changeHeaderConfigAction({isFixed:false}))
	},[dispatch])
	
	return (
		<DetailWrapper>
			<AppHeader/>
			<DetialPictures/>
			<DetailInfos/>
		</DetailWrapper>
	)
})

export default Detail
