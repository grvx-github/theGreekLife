import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsArrowDown } from "react-icons/bs";

const Booking = () => {

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }
  const arrowUnClicked = {
    transition: '0.5s ease all'
  }
  const arrowClicked = {
    transform: 'rotate(180deg)',
    transition: '0.75s ease all'
  }
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
          knowledgeable team via phone at +919867055685 or email us at sunny@thegreeklifeinc.com, yash@thegreeklifeinc.com, rhea@thegreeklifeinc.com, nazira@thegreeklifeinc.com, support@thegreeklifeinc.com . We are committed to providing prompt personalized customer service to ensure all your needs are met. <br /> <br />

          - Visit our website to explore our comprehensive booking systems for
          hotels, transport, and production services. Our user-friendly
          platforms make it easy for you to make reservations and secure the
          services you require. <br /> <br />

          - Don't just take our word for it! Read testimonials and reviews from
          previous clients who have experienced our exceptional services
          firsthand. Their positive feedback will give you confidence in
          choosing us as your trusted travel and event partner. <br /> <br />

          - Have any questions or need assistance? Our responsive customer support
          system is here to help. Reach out to us at any time, and we'll be at your service.
        </p>
        <Button onClick={handleClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show less' : 'show more'}  < BsArrowDown style={clicked ? arrowClicked : arrowUnClicked} /> </Button>
      </div>
    </div>
  );
};
export default Booking;
