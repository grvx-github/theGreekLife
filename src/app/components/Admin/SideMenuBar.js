'use client'

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import {
  AiOutlineDashboard,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { PiNotePencilLight, PiNotebookLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import "../../styles/sideMenu.modules.css";

const SideMenuBar = () => {
  const [drop, setDrop] = useState(false);
  const [blogDrop, setBlogDrop] = useState(false);
  function handleDrop() {
    setDrop(!drop);
  }
  function handleBlog() {
    setBlogDrop(!blogDrop);
  }
  return (
    <Nav defaultActiveKey="/home" className="flex-column sidebar menubar">
      <div className="logo">
        <Link href={"/"}>
          <Image alt="" src={"/logo.svg"} height={100} width={100} />
        </Link>
      </div>
      <div className="sidebar-wrapper ps ps--active-y">
        <div className="profile-info">
          <div className="profile-image">
            <Link href={""}>
              <Image
                src={"/profile-blog.jpg"}
                className="img-fluid avatar-img"
                height={100}
                width={100}
                alt=""
              />
            </Link>
          </div>
          <div className="profile-details">
            <h3>
              <a href="#!">Alice Gross</a>
              <span class="profile-status online"></span>
              <p class="profile-title">Editor</p>
            </h3>
          </div>
        </div>
        <div className="navigation nav">
          <li className="nav-parent">
            <Link href="#">
              <AiOutlineDashboard />
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-parent">
            <Link href="#">
              <PiNotePencilLight />
              <p>Blogs</p>
              <span class={blogDrop ? 'dropBtn clicked' : 'dropBtn' } onClick={handleBlog} >
                <MdOutlineKeyboardArrowRight />
              </span>
            </Link>
            <ul className={blogDrop ? "dropDownNav show" : "dropDownNav"}>
              <li>
                <a href="#">
                  <span>Add Page</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Edit Page</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>View Page</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-parent">
            <Link href="#">
              <AiOutlineSearch />
              <p>Search</p>
            </Link>
          </li>
          <li className="nav-parent">
            <Link href="#">
              <PiNotebookLight />
              <p>Pages</p>
              <span class="dropBtn" onClick={handleDrop} className={drop ? 'dropBtn clicked' : 'dropBtn'} >
                <MdOutlineKeyboardArrowRight />
              </span>
            </Link>
            <ul className={drop ? "dropDownNav show" : "dropDownNav"}>
              <li>
                <a href="#">
                  <span>Add Page</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Edit Page</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>View Page</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-parent">
            <Link href="#">
              <AiOutlineUser />
              <p>Users</p>
            </Link>
          </li>
        </div>
      </div>
    </Nav>
  );
};

export default SideMenuBar;
