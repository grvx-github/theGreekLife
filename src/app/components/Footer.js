import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footer d-flex flex-row">
        <div className="d-flex flex-column">
          Logo
          <Link className="d-flex" href={"/"}>
            <AiOutlineInstagram />
            <p>Instagram</p>
          </Link>
          <form action="/action_page.php">
            <label for="email">Enter your email</label>
            <input type="email" id="email" name="email" />

            <button type="submit">
              {" "}
              <BsArrowRight />{" "}
            </button>
          </form>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li>Holidays</li>
            <li>Yatchs</li>
            <li>Filming</li>
            <li>Wedding</li>
          </ul>
        </div>
        <div>
          <h5>Events</h5>
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
