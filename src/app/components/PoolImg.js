import React from 'react'
import Image from 'next/image'

const PoolImg = () => {
	return (
		<div className='poolImg'>
			<Image src={'/poolImg.png'} alt='' width={100} height={100}/>
		</div>
	)
}

export default PoolImg