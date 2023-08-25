import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Copyright from "./Copyright";
import Image from "next/image";


const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footer d-flex">
        <div className="d-flex flex-column fc1">
          <Image src={'/logo.svg'} height={100} width={100} alt={''} />
          <Link className="d-flex" href={"/"}>
            <AiOutlineInstagram />
            <p>Instagram</p>
          </Link>
          <form action="/">
            
            <input type="email" id="email" name="email"  placeholder="Enter your email"/>

            <button type="submit">
              {" "}
              <BsArrowRight />{" "}
            </button>
          </form>
        </div>
        <div>
          <h5 className="font-weight-bold">Services</h5>
          <ul>
            <li>Holidays</li>
            <li>Yatchs</li>
            <li>Filming</li>
            <li>Wedding</li>
          </ul>
        </div>
        <div>
          <h5 className="font-weight-bold">Events</h5>
          <ul>
            <li>Bookings</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
			<Copyright />
    </div>
  );
};

export default Footer;
