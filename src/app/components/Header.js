"use client";

import React from "react";
import { Nav, Navbar, Offcanvas, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar bg="transparent" data-bs-theme="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Image
            src={"/logoWhite.svg"}
            alt=""
            height={50}
            width={50}
            className="logoImg"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
        />
        <Navbar.Collapse className="dView">
          <Offcanvas
            placement="end"
            show={show}
            responsive="lg"
            onHide={handleClose}
          >
            {/* <Offcanvas.Header closeButton>
							<Offcanvas.Title>Menu</Offcanvas.Title>
						</Offcanvas.Header> */}
            <Offcanvas.Body>
              <Nav className="ml-auto gap-4">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <NavDropdown title="Holidays" id="holidayDrop">
                  <div className="d-flex holidayDrop">
                    <div className="holidayLeft">
                      <h2>lorem</h2>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                    </div>
                    <div className="holidayRight">
											<h2> Lorem 2</h2>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                      <NavDropdown.Item href="/">ipsum dolor.</NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>
                <Nav.Link href="/yatchs">Yachts</Nav.Link>
                <Nav.Link href="/filming">Filming</Nav.Link>
                <Nav.Link href="/wedding">Weddings</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/bookings">Bookings</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>{" "}
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar.Collapse id="responsive-navbar-nav" className='mView'>
				<Nav className="ml-auto gap-4">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#services">Services</Nav.Link>
					<Nav.Link href="#holidays">Holidays</Nav.Link>
					<Nav.Link href="#yatchs">Yatchs</Nav.Link>
					<Nav.Link href="#filming">Filming</Nav.Link>
					<Nav.Link href="#wedding">Weddings</Nav.Link>
					<Nav.Link href="#events">Events</Nav.Link>
					<Nav.Link href="#bookings">Boolings</Nav.Link>
					<Nav.Link href="#gallery">Gallery</Nav.Link>
					<Nav.Link href="#contactus">Contact Us</Nav.Link>
				</Nav>
    	</Navbar.Collapse> */}
      ;
    </header>
  );
};

export default Header;
