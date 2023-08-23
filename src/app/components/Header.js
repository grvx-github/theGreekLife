"use client"

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.module.css'

const Header = () => {
	return (
		<header>
			<Navbar bg='transparent' data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
				</Container>
			</Navbar>
		</header>
	)
}

export default Header;