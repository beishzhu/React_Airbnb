import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import { fetchHomeDataAction } from '@/store/moudles/home'
import HomeBanner from './c-cpns/home-banner'
// import hyRequest from '@/services'
import {HomeWrapper} from './style'
import SectionHeader from '@/components/section-header'

 const Home = memo(()=> {
	
		// 发起网络请求获取数据
		const dispath = useDispatch()
		useEffect(()=>{
			dispath(fetchHomeDataAction("xxx"))
		},[dispath])
	
		// 从 redux中获取数据
		const {goodPriceInfo}  = useSelector((state)=>({
			goodPriceInfo:state.home.goodPriceInfo
		}),shallowEqual)  //优化的东西 shallowEqual：当发现改变的时候 才需要重新获取数据，重新渲染
		
	
	
	
	return (
		<HomeWrapper>
			<HomeBanner/>
			<div className='content'>
				<div className='good-price'>
					<SectionHeader title={goodPriceInfo.title}/>
					{/* <ul>
						{goodPriceInfo.list.map(item => {
							return <li key={item.id}>{item.name}</li>
						})
						}
					</ul> */}
				</div>
			</div>
		</HomeWrapper>
	)
})

export default Home

