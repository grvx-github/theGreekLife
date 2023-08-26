import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const BoatSection = () => {
	return (
    <div className="d-flex flex-column boatSection bg-pg">
      <div className="imgDv">
        <h3>Luxury Yacht Charters</h3>
        <Image src="/3.png" width={400} height={500} alt=''/>
      </div>
      <div className="textDiv">
        <p>
        - Set sail on the crystal-clear waters of the Mediterranean Sea with our
        exclusive luxury yacht charters. Experience the ultimate indulgence as
        you explore Greece's stunning coastline, secluded coves, and picturesque
        islands.
        </p>
        <Link href=''>Show More</Link>
      </div>
    </div>
  );
}

export default BoatSection