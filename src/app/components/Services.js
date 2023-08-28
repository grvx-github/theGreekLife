"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import servicesData from "../servicesData";

import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { useState, useRef } from "react";
import { BsArrowDown } from "react-icons/bs"

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const Services = () => {
  const [active, setActive] = useState(0);

  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(!clicked)
  }
  const containerStyle = {
    maxHeight: clicked ? '30rem' : '18rem', // Adjust the max height values as needed
    overflow: clicked ? 'visible' : 'hidden',
    transition: ' 0.75s ease all' // Apply the transition to max-height property
  };


  return (
    <div className="servicesSection">
      <h2>Our Range of Services Include </h2>
      <Container fluid style={containerStyle}>
        <div className="dView">

          <Swiper slidesPerView={3}
            spaceBetween={30} navigation={true} modules={[Navigation]}>
            {servicesData.map((entry, i) => {
              return (
                <SwiperSlide>
                  <IconContext.Provider value={{ className: "serviceIcon" }}>
                    <Card className='serviceCard' style={{ border: "none", background: 'transparent' }}>
                      {entry.icon}
                      <Card.Title>
                        <h4>{entry.title}</h4>
                      </Card.Title>
                      <Card.Text>
                        <p>{entry.text}</p>
                      </Card.Text>
                    </Card>
                  </IconContext.Provider>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="mView">
          <div className="d-flex iconNav">
            {servicesData.map((entry, i) => {
              return (
                <div
                  className={(i == active) ? "activeTab mob-icon" : "mob-icon"}
                  key={i}
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  {entry.icon}
                </div>
              );
            })}
          </div>
          <div className="tabContent" style={{ overflow: "hidden" }}>
            <h4>{servicesData[active].title}</h4>
            <p>{servicesData[active].text}</p>
          </div>
        </div>
      </Container >
      <Button onClick={handleClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show less' : 'show more'}  < BsArrowDown /> </Button>
    </div >
  );
};

export default Services;
