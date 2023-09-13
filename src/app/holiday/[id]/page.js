import React, { useEffect, useState } from 'react';
import mongoose from 'mongoose';
import Holiday from '../../../../models/Holiday';
import HolidayComp from '@/app/components/HolidayComp';
import dbConnect from '@/app/middlewares/mongoose';

const HolidayId = (props) => {
  const router = useRouter();
  const [holidayData, setHolidayData] = useState(props.holidayData);
  const [error, setError] = useState(props.error);

  useEffect(() => {
    const fetchData = async () => {
      const id = router.query.id;

      // Check if there's an existing database connection
      if (!mongoose.connections[0].readyState) {
        await mongoose.connect('mongodb://127.0.0.1:27017/', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: 'greekLifeDB'
        });
      }

      try {
        const holidayData = await Holiday.findOne({ _id: id });

        if (!holidayData) {
          console.error(`Holiday data not found for ID: ${id}`);
          setError('Holiday data not found');
        } else {
          const serializedData = JSON.parse(JSON.stringify(holidayData));
          setHolidayData(serializedData);
        }
      } catch (error) {
        console.error('Error fetching holiday data:', error);
        setError('Failed to fetch holiday data');
      }
    };

    fetchData();
  }, [router.query.id]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <HolidayComp holidayData={holidayData} />
      )}
    </div>
  );
};

export default HolidayId;
