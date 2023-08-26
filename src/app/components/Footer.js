import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Copyright from "./Copyright";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerSection m-lg">
      <div className="footer dView">
        <div className="d-flex flex-column fc1">
          <Image src={"/logoWhite.svg"} height={100} width={100} alt={""} />
          <div className="instabox">
            <div>
              <Link className="d-flex" href={"/"}>
                <AiOutlineInstagram />
                <p>Instagram</p>
              </Link>
            </div>
            <div>
              <form action="/">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />

                <button type="submit">
                  {" "}
                  <BsArrowRight />{" "}
                </button>
              </form>
            </div>
          </div>
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
      <div className="footer mView">
        <div className="footerTop">
          <Image src={"/logoWhite.svg"} alt="" width={10} height={10} />
          <p>
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities
          </p>
        </div>
        <div className="footerBottom d-flex">
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <p>Email Marketing</p>
              </li>
              <li>
                <p>Campaigns</p>
              </li>
              <li>
                <p>branding</p>
              </li>
            </ul>
          </div>
          <div>
            <h4>Furniture</h4>
            <ul>
              <li>Beds</li>
              <li>Chair</li>
              <li>All</li>
            </ul>
          </div>
          <div>
            <h4>Follow us</h4>
            <ul>
              <li><FaFacebookF/></li>
              <li><FaTwitter/></li>
              <li><FaInstagram/></li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
