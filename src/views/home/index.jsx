import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';

// import Button from '@mui/material/Button'; 用不了
// import Rating from '@material-ui/lab/Rating'; // 只能用 4.0版本


import { fetchHomeDataAction } from '@/store/moudles/home'
import HomeBanner from './c-cpns/home-banner'
import {HomeWrapper} from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-roms'


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
					<SectionRooms roomList={goodPriceInfo.list}/>
				</div>
			</div>
		</HomeWrapper>
	)
})

export default Home

