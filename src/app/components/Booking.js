import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsArrowDown } from "react-icons/bs";

const Booking = () => {

  const [clicked, setClicked] = useState(false);

   function handleClick() {
     setClicked(!clicked);
   }
   const containerStyle = {
     maxHeight: clicked ? "2rem" : "19.5rem", // Adjust the max height values as needed
     overflow: clicked ? "hidden" : "visible",
     transition: " 0.75s ease all", // Apply the transition to max-height property
   };
  return (
    <div className="bookingSection">
      <h3>Booking and Contact Information</h3>
      <div>
        <p className={clicked ? 'bClicked' : 'buC'}>
          - Ready to embark on an unforgettable journey? Contact us today to
          start planning your dream trip, corporate event, or filming project in
          Greece.
          <br /> <br />
          - For inquiries and bookings, reach out to our friendly and
          knowledgeable team via phone at [phone number] or email us at [email
          address]. We are committed to providing prompt and personalized
          customer service to ensure all your needs are met. <br /> <br />
          - Visit our website to explore our comprehensive booking systems for
          hotels, transport, and production services. Our user-friendly
          platforms make it easy for you to make reservations and secure the
          services you require. <br /> <br />
          - Don't just take our word for it! Read testimonials and reviews from
          previous clients who have experienced our exceptional services
          firsthand. Their positive feedback will give you confidence in
          choosing us as your trusted travel and event partner. <br /> br - Have
          any questions or need assistance? Our responsive customer support
          system is here to help. Reach out to us at any time, and we'll be
        </p>
        <Button
          onClick={handleClick}
          className={clicked ? "lBtn clicked" : "lBtn"}
        >
          {clicked ? "show more" : "show less"} <BsArrowDown />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Booking;
