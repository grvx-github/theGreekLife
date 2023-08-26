"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import servicesData from "../servicesData";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import ShowMoreBtn from "./ShowMoreBtn";
import { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Services = () => {
  const [active, setActive] = useState(0);
  

  return (
    <div className="servicesSection">
      <h2>Our Range of Services Include </h2>
      <Container fluid>
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
                  className={(i == active) ? "activeTab mob-icon" : "mob-icon" }
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
          <div className="tabContent">
            <h4>{servicesData[active].title}</h4>
            <p>{servicesData[active].text}</p>
          </div>
        </div>
      </Container>
      <ShowMoreBtn />
    </div>
  );
};

export default Services;
