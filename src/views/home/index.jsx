import React, { memo } from 'react'
import HomeBanner from './c-cpns/home-banner'
// import hyRequest from '@/services'
import {HomeWrapper} from './style'

 const Home = memo(()=> {
	
	return (
		<HomeWrapper>
			<HomeBanner/>
			<div className='content'>hahha</div>
		</HomeWrapper>
	)
})

export default Home

