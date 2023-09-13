import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

const BoatSection = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }
  const containerStyle = {
    maxHeight: clicked ? "30rem" : "4rem", // Adjust the max height values as needed
    overflow: clicked ? "visible" : "hidden",
    transition: " 0.75s ease all", // Apply the transition to max-height property
  };
  const arrowUnClicked = {
    transition: '0.5s ease all'
  }
  const arrowClicked = {
    transform: 'rotate(180deg)',
    transition: '0.75s ease all'
  }

  return (
    <div className="d-flex flex-column boatSection bg-pg">
      <div className="imgDv">
        <h3>Luxury Yacht Charters</h3>
      </div>
      <div className="textDiv">
        <h3>Luxury Yacht Charters</h3>
        <p className={clicked ? 'boatPclicked' : 'boatP'}>
          - Set sail on the crystal-clear waters of the Mediterranean Sea with
          our exclusive luxury yacht charters. Experience the ultimate
          indulgence as you explore Greece's stunning coastline, secluded coves,
          and picturesque islands.
          <br /> <br />- Our fleet of meticulously maintained yachts offers
          unparalleled comfort, state-of-the-art amenities, and experienced crew
          members who will cater to your every need. Whether itis a romantic
          getaway, a family vacation, or a corporate retreat, we have the
          perfect yacht to elevate your experience. <br /> <br />- Customize
          your itinerary to visit iconic destinations such as Santorini,
          Mykonos, and Crete, or discover hidden gems in the breathtaking back waters.
          Explore ancient ruins, swim in turquoise waters, indulge in sumptuous
          cuisine, and create memories that will last a lifetime.
        </p>
        <Button onClick={handleClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show less' : 'show more'}  < BsArrowDown style={clicked ? arrowClicked : arrowUnClicked} /> </Button>
      </div>
    </div>
  );
};

export default BoatSection;
