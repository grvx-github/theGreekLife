"use client";

import React from "react";
import Image from "next/image";
import ShowMoreBtn from "./ShowMoreBtn";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

const Events = () => {

  const [clicked, setClicked] = useState(false);
  const [corpClicked, setCorpClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  function handleCorpClick() {
    setCorpClicked(!corpClicked)
  }
  const arrowUnClicked = {
    transition: '0.5s ease all'
  }
  const arrowClicked = {
    transform: 'rotate(180deg)',
    transition: '0.75s ease all'
  }

  return (
    <div className="events">
      <div className="weddingSection m-lg2">
        <h3>Weddings</h3>
        <div className="d-flex weddingFx">
          <div className="weddingImg">

          </div>
          <div className="weddingText">
            <div className={clicked ? 'weddingClicked' : 'wedding'}>
              <p>
                Welcome to the perfect destination for your dream wedding!
                Imagine saying "I do" against the breathtaking backdrop of the
                stunning Mediterranean Sea, surrounded by the beauty and romance
                that Greece has to offer. Our team is dedicated to making your
                wedding day truly unforgettable. <br /> <br />
                With our expertise in destination weddings and our strong
                partnership with luxury hotels and venues across Greece, we can
                help you plan every detail of your special day. From finding the
                perfect venue to arranging the finest catering and décor, our
                experienced wedding planners will ensure that your vision comes
                to life.
                <br />
                <br />
                Whether you prefer glamourous beachside ceremony in Mykonos or a
                romantic hilltop celebration in Santorini, Greece offers a wide
                range of enchanting locations for your dream wedding. With its
                picturesque landscapes, rich history, and warm hospitality,
                Greece provides a magical setting that will create memories to
                last a lifetime.
                <br /> <br />
                We offer customizable wedding packages that can be tailored to
                your specific desires and preferences. From intimate elopements
                to grand celebrations, we have the expertise to expertise to
                bring your dream wedding to fruition.
                <br />
                <br />
                let us take care of all the details, so you can focus on the
                precious memories with your loved ones.
              </p>
            </div>
            <Button onClick={handleClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show less' : 'show more'}  < BsArrowDown style={clicked ? arrowClicked : arrowUnClicked} /> </Button>
          </div>
        </div>
      </div>
      <div className="corporateSection d-flex m-lg">
        <div className="corpText">
          <div className={corpClicked ? 'corpClicked' : 'corp'}>
            <h3>Corporate Events and Other Events</h3>
            <p>
              - Elevate your next corporate event, conference, or incentive trip
              by choosing Greece as your destination. With its blend of history,
              culture, and natural beauty, Greece offers an exceptional
              experience that will impress your attendees and leave a lasting
              impact.
              <br /> <br />- Discover venues equipped with state-of-the-art
              facilities and accommodation options suitable for groups of any
              size. From modern conference centers to luxurious resorts, we have
              the perfect setting to host your event.
              <br />
              <br />- Enjoy the flexibility of customizable event packages
              tailored to your specific requirements. Our experienced event
              coordinators will work closely with you to ensure every aspect of
              your event runs smoothly. <br /> <br />

              - Showcase successful past events and
              share testimonials from satisfied clients who have chosen Greece
              as their event destination. Let their experiences speak for
              themselves and demonstrate the value and success our services
              bring to any event. <br /> <br />

              - Highlight the benefits of combining business
              events with leisure activities and cultural exploration. From
              team-building excursions to wine tastings and archaeological
              tours, Greece offers a plethora of opportunities to enrich your
              event and create unforgettable memories.
            </p>
          </div>

          <Button onClick={handleCorpClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show less' : 'show more'}  < BsArrowDown style={clicked ? arrowClicked : arrowUnClicked} /> </Button>
        </div>
        <div div className="corpImgDiv">

        </div>
        
      </div>
      <div className="poolImg">

      </div>
    </div>
  )
}


export default Events;
