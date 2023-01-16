import Indicator from '@/base-ui/scroll-view/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
	const names = ["abc","bbb","ccc","ddd","eee"]
	const [selectIndex,setSelectIndex] = useState(0)
	
	function toggleClickHandle(isNext) {
		let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
		if(newIndex < 0 ) newIndex = names.length - 1
		if(newIndex > names.length - 1 ) newIndex = 0
		setSelectIndex(newIndex)
		
	}
	return (
		<DemoWrapper>
			<div className='control'>
			<button onClick={e=>toggleClickHandle(false)}>上一个</button>
			<button onClick={e=>toggleClickHandle(true)}>下一个</button>
			<div className='list'>
				<Indicator selectIndex={selectIndex}>
					{
						names.map(item=>{
							return <button key={item}>{item}</button>
						})
					}
				</Indicator>
			</div>
		</div>
		</DemoWrapper>
	)
})

export default Demo