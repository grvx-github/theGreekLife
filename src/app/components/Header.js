"use client"

import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


const Header = () => {
	const expand = "lg";
	return (
		<header>
			<Navbar bg='transparent' data-bs-theme="dark" expand="lg">
			
					<Navbar.Brand href="#home">
						<Image src={'/logo.svg'} alt='' height={50} width={50} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
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
					</Navbar.Collapse>
		

				{/* Offcanvas for smaller screens */}
				<Offcanvas placement="end" show={false} target="responsive-navbar-nav" aria-labelledby="responsive-navbar-nav">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Menu</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
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
					</Offcanvas.Body>
				</Offcanvas>

			</Navbar>
		</header>
	)
}

export default Header;