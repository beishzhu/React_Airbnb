import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';

// import Button from '@mui/material/Button'; 用不了
// import Rating from '@material-ui/lab/Rating'; // 只能用 4.0版本


import { fetchHomeDataAction } from '@/store/moudles/home'
import HomeBanner from './c-cpns/home-banner'
import {HomeWrapper} from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-roms'
import SectionTabs from '@/components/section-tabs'


 const Home = memo(()=> {
	
		// 发起网络请求获取数据
		const dispath = useDispatch()
		useEffect(()=>{
			dispath(fetchHomeDataAction("xxx"))
		},[dispath])
	
		// 从 redux中获取数据
		const {goodPriceInfo,highScoreInfo,discountInfo}  = useSelector((state)=>({
			goodPriceInfo:state.home.goodPriceInfo,
			highScoreInfo:state.home.highScoreInfo,
			discountInfo:state.home.discountInfo
		}),shallowEqual)  //优化的东西 shallowEqual：当发现改变的时候 才需要重新获取数据，重新渲染
		
		// 数据转换
		const tabNames = discountInfo.dest_address?.map(item=>item.name)
		
	return (
		<HomeWrapper>
			<HomeBanner/>
			<div className='content'>
				<div className='discount'>
					<SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
					<SectionTabs tabNames={tabNames}/>
					<SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth="33.3333%"/>
				</div>
				<HomeSectionV1 infoData={goodPriceInfo}/>
				<HomeSectionV1 infoData={highScoreInfo}/>
			</div>
		</HomeWrapper>
	)
})

export default Home

