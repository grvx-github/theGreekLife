"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import servicesData from "../servicesData";
import { Container } from "react-bootstrap";
import { Nav, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import ShowMoreBtn from "./ShowMoreBtn";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact">
              Tab content for Contact
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
          </Tabs>
        </div>
      </Container>
      <ShowMoreBtn />
    </div>
  );
};

export default Services;
