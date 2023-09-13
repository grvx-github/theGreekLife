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

          <Image src={"/logoWhite.svg"} height={100} width={100} alt={""} className="logoImg" />
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
            <li> <Link href='/'>Holidays</Link> </li>
            <li> <Link href='/'>Yatchs</Link> </li>
            <li> <Link href='/'>Filming</Link> </li>
            <li> <Link href='/'>Wedding</Link> </li>
          </ul>
        </div>
        <div>
          <h5 className="font-weight-bold">Events</h5>
          <ul>
            <li> <Link href='/'>Bookings</Link> </li>
            <li> <Link href='/'>Gallery</Link> </li>
            <li> <Link href='/'>Contact</Link>  Us</li>
          </ul>
        </div>
      </div>
      <div className="footer mView">
        <div className="footerTop">
          <div className="navbar-brand">
            <Image src={"/logoWhite.svg"} alt="" width={10} height={10} className="logoImg" />
          </div>

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
                <p>Terms & Condition</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p className="t-muted">Copyright © 2021</p>
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
              <li><FaFacebookF /></li>
              <li><FaTwitter /></li>
              <li><FaInstagram /></li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
