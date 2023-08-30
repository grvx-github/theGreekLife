"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Button } from "react-bootstrap";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/gallery.css";

const gallery = () => {
  const ImgGallery = () => {
    const imageObjects = [];

    for (let i = 1; i <= 7; i++) {
      imageObjects.push({
        id: i, // Unique ID for the image
        path: "/" + i + ".webp", // Image path
      });
    }

    return imageObjects;
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="galleryWrapper">
      <div className="gallery">
        <div className="galleryHeader">
          <Button className="slidePrevBtn">
            {" "}
            <AiOutlineLeft />
          </Button>
          <p>Gallery</p>
          <Button className="slideNextBtn">
            {" "}
            <AiOutlineRight />{" "}
          </Button>
        </div>
        <div className="galleryMain">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={{
              prevEl: ".slidePrevBtn",
              nextEl: ".slideNextBtn",
            }}
            slidesPerView={"auto"}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {ImgGallery().map((entry) => {
              return (
                <SwiperSlide key={entry.id}>
                  <div
                    className="backgroundSlide"
                    style={{ backgroundImage: `url(${entry.path})` }}
                  ></div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            Navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {ImgGallery().map((entry) => {
              return (
                <SwiperSlide key={entry.id}>
                  <img src={entry.path} style={{ maxWidth: "100%" }} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default gallery;
