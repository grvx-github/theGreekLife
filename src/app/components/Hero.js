"use client"

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import styles from "../styles/hero.module.css";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Header from "./Header";
import ShowMoreBtn from "./ShowMoreBtn";

const Hero = () => {
  return (

    <Container fluid className="heroContainer bg-pg">
      <Header />
      <div className="heroCenter d-flex flex-column">
        <h1>Destination Management Services</h1>
        <p>
          Welcome to Greece's premier destination management services provider!
          We specialize in creating unforgettable experiences for travelers,
          ensuring every aspect of their journey is seamlessly coordinated and
          executed.
        </p>
        <ShowMoreBtn />
      </div>
    </Container>
  );
};

export default Hero;
