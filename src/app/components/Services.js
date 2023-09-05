"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import servicesData from "../servicesData";

import { Card, Container, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsArrowDown } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Parallax } from "swiper/modules";
import '../styles/services.modules.css'

const Services = () => {
  const [clicked, setClicked] = useState(false);
  const [drop, setDrop] = useState(Array(servicesData.length).fill(false)); 

  function handleClick() {
    setClicked(!clicked);
  }
   function dropClick(index) {
     const newDropState = [...drop];
     newDropState[index] = !newDropState[index];
     setDrop(newDropState);
   }
  const arrowUnClicked = {
    transition: "0.5s ease all",
  };
  const arrowClicked = {
    transform: "rotate(180deg)",
    transition: "0.75s ease all",
  };

  return (
    <section className='servicesSection bg-pg'>
      <h2>Our Range of Services Include</h2>
      <Container fluid>
        <div className={clicked ? "serviceClicked dView" : 'dView serviceUnclicked'}>
          <Swiper
            slidesPerView={4}
            spaceBetween={60}
            navigation={true}
            parallax={true}
            modules={[Navigation, Parallax]}
          >
            {servicesData.map((entry, i) => (
              <SwiperSlide key={i}>
                <IconContext.Provider value={{ className: 'serviceIcon' }}>
                  <Card
                    className='serviceCard'
                    style={{ border: "none", background: "transparent" }}
                  >
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
            ))}
          </Swiper>
        </div>
        <div className='mView'>
          <div className="container-fluid">
            {servicesData.map((entry, i) => (
              <div className='dropFullBar' key={i}>
                <div className='dropDownBar'>
                  <IconContext.Provider value={{ className: "serviceMIcon" }}>
                    <div className='dropDownTitle'>
                      <div>{entry.icon}</div>
                      <div>{entry.title}</div>
                    </div>
                  </IconContext.Provider>

                  <Button className="clickBtn" onClick={() => dropClick(i)}>
                    <IconContext.Provider value={{ className: "plusIcon" }}>
                      {drop[i] ? <FaMinus /> : <FaPlus />}
                    </IconContext.Provider>
                  </Button>
                </div>
                <div
                  className={
                    drop[i] ? "show dropDownDetails" : "dropDownDetails"
                  }
                >
                  <p>{entry.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Button
        onClick={handleClick}
        className={clicked ? "lBtn clicked" : "lBtn"}
      >
        {clicked ? "show less" : "show more"}{" "}
        <BsArrowDown style={clicked ? arrowClicked : arrowUnClicked} />
      </Button>
    </section>
  );
};

export default Services;
