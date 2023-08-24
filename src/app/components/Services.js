"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import servicesData from "../servicesData";
import { Container, Button } from "react-bootstrap";
import { BsArrowDown } from "react-icons/bs";
import { IconContext } from "react-icons";

const Services = () => {
  return (
    <div className="servicesSection">
      <h2>Our Range of Services Include </h2>
      <Container fluid className="d-flex flex-row">
        {servicesData.map((entry, i) => {
          return (
            <IconContext.Provider value={{ color: "#5BD9FF", size: "50px" }}>
              <StackCarousel
                className="serviceCard"
                key={i}
                icon={entry.icon}
                title={entry.title}
                text={entry.text}
              />
            </IconContext.Provider>
          );
        })}
      </Container>
      <Button variant="primary">
        {" "}
        {/* Added variant prop */}
        Show More <BsArrowDown />
      </Button>
    </div>
  );
};

export default Services;
