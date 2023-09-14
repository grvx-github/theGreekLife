
'use client'

import React from 'react'
import AddPage from '../components/Admin/addPage'
import SideMenuBar from '../components/Admin/SideMenuBar'
import '../styles/addPage.modules.css'

const page = () => {
	return (
		<div className='addPageWrapper'>
			<SideMenuBar />
			<AddPage />
		</div>
	)
}
export default page