import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { Button, Space } from 'antd';

// import Button from '@mui/material/Button'; 用不了
import Button from '@material-ui/core/Button';  // 只能用 4.0版本

import { fetchHomeDataAction } from '@/store/moudles/home'
import HomeBanner from './c-cpns/home-banner'
// import hyRequest from '@/services'
import {HomeWrapper} from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'

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
					<ul className='room-list'>
						{goodPriceInfo.list?.slice(0,8).map(item => {
							// return <li key={item.id}>{item.name}</li>
							return <RoomItem itemData={item} key={item.id}/>
						})
						}
					</ul>
				</div>
			</div>

			<ul>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
				<li>ddddd</li>
			</ul>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
		</HomeWrapper>
	)
})

export default Home

