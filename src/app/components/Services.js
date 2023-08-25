"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import servicesData from "../servicesData";
import { Container } from "react-bootstrap";
import { Nav, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import ShowMoreBtn from "./ShowMoreBtn";
import { useState } from "react";

const Services = () => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="servicesSection">
      <h2>Our Range of Services Include </h2>
      <Container fluid>
        <div className="serviceDview">
          {servicesData.map((entry, i) => {
            return (
              <Row >
                <Col>
                  <IconContext.Provider value={{ className: 'serviceIcon' }}>
                    <StackCarousel
                      className="serviceCard"
                      key={i}
                      icon={entry.icon}
                      title={entry.title}
                      p
                      text={entry.text}
                      show={i === activeTab}
                    />
                  </IconContext.Provider>
                </Col>
              </Row>
            );
          })}
        </div>
        <div className="servicesMview" >
          <Nav fill variant="pills" defaultActiveKey={activeTab}>
            {servicesData.map((entry, index) => {
              return (
                <div>
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index} onSelect={() => setActiveTab(index)}>
                      {entry.icon}
                    </Nav.Link>
                  </Nav.Item>
                </div>
              )
            })}
          </Nav>
          <div className="active-service">
            <h3>{servicesData[activeTab].title}</h3>
            <p>{servicesData[activeTab].text}</p>
          </div>
        </div>
      </Container>
      <ShowMoreBtn />
    </div>
  );
};

export default Services;
