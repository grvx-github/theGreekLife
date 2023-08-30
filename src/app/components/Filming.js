"use client";

import React from "react";
import StackCarousel from "./StackCarousel";
import filmingData from "../filmingData";
import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Button } from 'react-bootstrap'
import { BsArrowDown } from "react-icons/bs"

import '../styles/filming.modules.css'

const Filming = () => {

  const [active, setActive] = useState(0);

  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(!clicked)
  }
  const containerStyle = {
    maxHeight: clicked ? '30rem' : '13rem', // Adjust the max height values as needed
    overflow: clicked ? 'visible' : 'hidden',
    transition: ' 0.9s ease all' // Apply the transition to max-height property
  };
  const arrowUnClicked = {
    transition: "0.5s ease all",
  };
  const arrowClicked = {
    transform: "rotate(180deg)",
    transition: "0.75s ease all",
  };

  return (
    <section className="filming m-lg3">
      <h2>Filming In Greece</h2>
      <div className="dView">
        <Container fluid className="d-flex flex-row" style={containerStyle}>
          <IconContext.Provider value={{ color: "#5BD9FF", size: "50px" }}>
            {filmingData.map((entry, i) => {
              return (
                <StackCarousel key={i} icon={entry.icon} text={entry.text} />
              );
            })}
          </IconContext.Provider>


        </Container>

        <Button onClick={handleClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show more' : 'show less'}  < BsArrowDown /> </Button>
      </div>
      <div className="mView">
        <Container fluid >
          <div className="d-flex iconNav">
            {filmingData.map((entry, i) => {
              return <div className={i == active ? "activeTab mob-icon" : "mob-icon"} onClick={() => {
                setActive(i)
              }}>{entry.icon}</div>;
            })}
          </div>
        </Container>
        <Container fluid >
          <div className="tabContent" style={containerStyle}>
            <p>{filmingData[active].text}</p>
          </div>

          <Button onClick={handleClick} className={clicked ? "lBtn clicked" : "lBtn"}>{clicked ? 'show less' : 'show more'}  < BsArrowDown style={clicked ? arrowClicked : arrowUnClicked} /> </Button>
        </Container>
      </div>
    </section>
  );
};

export default Filming;
