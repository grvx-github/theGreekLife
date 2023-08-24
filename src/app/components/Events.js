"use client";

import React from "react";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { Button } from "react-bootstrap";
import ShowMoreBtn from "./ShowMoreBtn";

const Events = () => {
  return (
    <div className="events">
      <div className="weddingSection d-flex flex-row">
        <Image src={"/weddings.png"} height={100} width={100} alt="" />
        <div className="weddingText">
          <h3>Weddings</h3>
          <p>
            Welcome to the perfect destination for your dream wedding! Imagine
            saying "I do" against the breathtaking backdrop of the stunning
            Mediterranean Sea, surrounded by the beauty and romance that Greece
            has to offer. Our team is dedicated to making your wedding day truly
            unforgettable. <br /> <br />
            With our expertise in destination weddings and our strong
            partnership with luxury hotels and venues across Greece, we can help
            you plan every detail of your special day. From finding the perfect
            venue to arranging the finest catering and décor, our experienced
            wedding planners will ensure that your vision comes to life.
          </p>
          <ShowMoreBtn />
        </div>
      </div>
      <div className="corporateSection d-flex flex-row">
        <div className="corpText">
          <h3>Corporate Events and Other Events</h3>
          <p>
            - Elevate your next corporate event, conference, or incentive trip
            by choosing Greece as your destination. With its blend of history,
            culture, and natural beauty, Greece offers an exceptional experience
            that will impress your attendees and leave a lasting impact.
            <br /> <br />- Discover venues equipped with state-of-the-art
            facilities and accommodation options suitable for groups of any
            size. From modern conference centers to luxurious resorts, we have
            the perfect setting to host your event.
          </p>
          <ShowMoreBtn />
        </div>
        <Image src={"/corpEvent.png"} height={100} width={100} alt="" />
      </div>
    </div>
  );
};

export default Events;
