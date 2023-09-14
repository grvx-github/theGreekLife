
'use client'
import React from 'react';
import mongoose from 'mongoose';
import { useRouter } from 'next/navigation';
import Holiday from '../../../../models/Holiday';
import HolidayComp from '@/app/components/HolidayComp';
import dbConnect from '@/app/middlewares/mongoose';
import HolidayData from '../../../../models/HolidayData'

const HolidayId = ({ HolidayData }) => {
	return (
		<div>
			<HolidayComp props={HolidayData} />
		</div>
	);
}
export default HolidayId;


