"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import servicesData from "../servicesData";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Button } from 'react-bootstrap'
import { BsArrowDown } from "react-icons/bs"

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
      <Container fluid style={containerStyle  }>
        <div className="dView">
          {servicesData.map((entry, i) => {
            return (
              <Row>
                <Col>
                  <IconContext.Provider value={{ className: "serviceIcon" }}>
                    <StackCarousel
                      className="serviceCard"
                      key={i}
                      icon={entry.icon}
                      title={entry.title}
                      p
                      text={entry.text}
                    />
                  </IconContext.Provider>
                </Col>
              </Row>
            );
          })}
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
      </Container>
      <Button onClick={handleClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show more' : 'show less'}  < BsArrowDown /> </Button>
    </div>
  );
};

export default Services;
