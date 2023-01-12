import React, { memo,  useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';

// import Button from '@mui/material/Button'; 用不了
// import Rating from '@material-ui/lab/Rating'; // 只能用 4.0版本


import { fetchHomeDataAction } from '@/store/moudles/home'
import HomeBanner from './c-cpns/home-banner'
import {HomeWrapper} from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import HomeLogfor from './c-cpns/home-logfor'


 const Home = memo(()=> {
	
		// 发起网络请求获取数据
		const dispath = useDispatch()
		useEffect(()=>{
			dispath(fetchHomeDataAction("xxx"))
		},[dispath])
	
		// 从 redux中获取数据
		const {goodPriceInfo,highScoreInfo,discountInfo,hotRecommendInfo,longforInfo}  = useSelector((state)=>({
			goodPriceInfo:state.home.goodPriceInfo,
			highScoreInfo:state.home.highScoreInfo,
			discountInfo:state.home.discountInfo,
			hotRecommendInfo:state.home.hotRecommendInfo,
			longforInfo:state.home.longforInfo
		}),shallowEqual)  //优化的东西 shallowEqual：当发现改变的时候 才需要重新获取数据，重新渲染
		
	return (
		<HomeWrapper>
			<HomeBanner/>
			<div className='content'>
				
				{/* isEmptyO 判断有值的时候才进行渲染，否则useState无效，
				因为useState 只有在第一次渲染的时候生效，如果第一次没有值，useState就没用了
				第一次获取城市会失败，就会导致运行不了 React\airbib\src\views\home\c-cpns\home-section-v2\index.jsx
				属于性能优化的一个点	
			 */}
			{isEmptyO(longforInfo) && <HomeLogfor infoData={longforInfo}/>}
			{isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
			{isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo}/>}
			{isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/> }
			{isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
			</div>
		</HomeWrapper>
	)
})

export default Home

