import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';

// import Button from '@mui/material/Button'; 用不了
// import Rating from '@material-ui/lab/Rating'; // 只能用 4.0版本


import { fetchHomeDataAction } from '@/store/moudles/home'
import HomeBanner from './c-cpns/home-banner'
import {HomeWrapper} from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'


 const Home = memo(()=> {
	
		// 发起网络请求获取数据
		const dispath = useDispatch()
		useEffect(()=>{
			dispath(fetchHomeDataAction("xxx"))
		},[dispath])
	
		// 从 redux中获取数据
		const {goodPriceInfo,highScoreInfo}  = useSelector((state)=>({
			goodPriceInfo:state.home.goodPriceInfo,
			highScoreInfo:state.home.highScoreInfo
		}),shallowEqual)  //优化的东西 shallowEqual：当发现改变的时候 才需要重新获取数据，重新渲染
		
	
	return (
		<HomeWrapper>
			<HomeBanner/>
			<div className='content'>
				<HomeSectionV1 infoData={goodPriceInfo}/>
				<HomeSectionV1 infoData={highScoreInfo}/>
			</div>
		</HomeWrapper>
	)
})

export default Home

