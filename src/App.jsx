import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'


export default memo(function App() {
	useScrollTop()
	return (
		<div className='app'>
		  {/* <AppHeader></AppHeader> */}
			<div className='page'>
				{useRoutes(routes)}
			</div>
			<AppFooter></AppFooter>
		</div>
	)
})

