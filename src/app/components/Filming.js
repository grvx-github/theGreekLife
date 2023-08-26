"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import filmingData from "../filmingData";
import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { useState } from "react";

const Filming = () => {
  const [active, setActive] = useState(2);

  return (
    <div className="filming">
      <h2>Filming In Greece</h2>
      <div className="dView">
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
      <div className="mView">
        <Container fluid>
          <div className="d-flex iconNav">
            {filmingData.map((entry, i) => {
              return <div className={i == active ? "activeTab mob-icon" : "mob-icon"} onClick={() => {
                setActive(i)
              }}>{entry.icon}</div>;
            })}
          </div>
        </Container>
        <Container fluid>
          <div className="tabContent">
            <p>{filmingData[active].text}</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Filming;
