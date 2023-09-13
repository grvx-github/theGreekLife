
'use client'

import React from 'react';
import mongoose from 'mongoose';
import Holiday from '../../../../models/Holiday';
import HolidayComp from '@/app/components/HolidayComp';
import dbConnect from '@/app/middlewares/mongoose';

export default async function HolidayId({ params, searchParams }) {
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect('mongodb://127.0.0.1:27017/', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: 'greekLifeDB'
		});
	}

	const holidayData = await Holiday.findOne({ _id: id });

	if (!holidayData) {
		console.error(`Holiday data not found for ID: ${id}`);
		return {
			props: {
				error: 'Holiday data not found',
			},
		}
	}

	const serializedData = JSON.parse(JSON.stringify(holidayData));
	const data =  {
		props: {
			holidayData: serializedData,
		},
	};

	return (
		<div>
			<HolidayComp props={data} />
			
		</div>
	);
};
