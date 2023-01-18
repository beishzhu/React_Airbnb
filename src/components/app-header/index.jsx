import { useSelect } from '@mui/base'
import classNames from 'classnames'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'

 const AppHeader = memo(()=> {

	const {headerConfig} = useSelector((state)=>({
		headerConfig:state.main.headerConfig
		
	}), shallowEqual)
	
	const {isFixed} = headerConfig
	
	console.log(isFixed,111);
	return (
			<HeaderWrapper className={classNames({fixed:isFixed})}>	
				<HeaderLeft />
				<HeaderCenter/>
				<HeaderRight/>
			</HeaderWrapper>
	)
})


export default AppHeader