"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import filmingData from "../filmingData";
import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";

const Filming = () => {
  return (
    <div className="filming">
      <h2>Filming In Greece</h2>
      <Container fluid className="d-flex flex-row">
        <IconContext.Provider value={{ color: "#5BD9FF", size: "50px" }}>
          {filmingData.map((entry, i) => {
            return (
              <StackCarousel key={i} icon={entry.icon} text={entry.text} />
            );
          })}
        </IconContext.Provider>
      </Container>
    </div>
  );
};

export default Filming;
