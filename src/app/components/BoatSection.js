import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const BoatSection = () => {
	return (
    <div className="d-flex flex-column boatSection">
      <div className="imgDv">
        <Image src="/yatch.png" width={400} height={500} alt=''/>
      </div>
      <div className="textDiv">
        - Set sail on the crystal-clear waters of the Mediterranean Sea with our
        exclusive luxury yacht charters. Experience the ultimate indulgence as
        you explore Greece's stunning coastline, secluded coves, and picturesque
        islands.
        <Link href=''>Show More</Link>
      </div>
    </div>
  );
}

export default BoatSection