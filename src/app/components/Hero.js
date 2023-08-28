"use client"

import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Header from "./Header";
import { BsArrowRight } from 'react-icons/bs'


const Hero = () => {
  return (
    <section className="heroSection bg-pg">
      <Container fluid>
        <Header />
        <div className="heroCenter d-flex flex-column">
          <h1>Destination Management Services</h1>
          <p>
            Welcome to Greece's premier destination management services
            provider! We specialize in creating unforgettable experiences for
            travelers, ensuring every aspect of their journey is seamlessly
            coordinated and executed.
          </p>
          <Button className="heroBtn">
            {" "}
            More Info <BsArrowRight />{" "}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
