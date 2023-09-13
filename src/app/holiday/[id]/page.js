
'use client'

import React from 'react';
import mongoose from 'mongoose';
import { useRouter } from 'next/navigation';
import Holiday from '../../../../models/Holiday';
import HolidayComp from '@/app/components/HolidayComp';
import dbConnect from '@/app/middlewares/mongoose';

const HolidayId = (props) => {
	const router = useRouter();

	return (
		<div>
			<HolidayComp props={props} />
			
		</div>
	);
};

export default HolidayId;

export async function getServerSideProps(context) {
	const id = context.query.id;

	// Check if there's an existing database connection
	if (!mongoose.connections[0].readyState) {
		await mongoose.connect('mongodb://127.0.0.1:27017/', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: 'greekLifeDB'
		});
	}

	console.log(id);

	try {
		const holidayData = await Holiday.findOne({ _id: id });

		if (!holidayData) {
			console.error(`Holiday data not found for ID: ${id}`);
			return {
				props: {
					error: 'Holiday data not found',
				},
			}}

			const serializedData = JSON.parse(JSON.stringify(holidayData));


		// Return the serialized data as props
		return {
			props: {
				holidayData: serializedData,
			},
		};		
		
	} catch (error) {
		console.error('Error fetching holiday data:', error);
		// Handle the error or return an error message as needed
		return {
			props: {
				error: 'Failed to fetch holiday data',
			},
		};
	}
	
}


