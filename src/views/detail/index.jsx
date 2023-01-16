import React, { memo } from 'react'
import DetailInfos from './c-cnps/detail-infos'
import DetialPictures from './c-cnps/detail-pictures'
import { DetailWrapper } from './style'
 const Detail = memo(() => {
	return (
		<DetailWrapper>
			<DetialPictures/>
			<DetailInfos/>
		</DetailWrapper>
	)
})

export default Detail
