import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Card from "./Card.js";
import EventCard from "./EventCard.js";
import "./Contact.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Contact() {
  return (
    <div className="contact-us">
      <h1>Contact</h1>
      {/* <Card /> */}
      <div className="contact-first-layer">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="contact-second-layer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="contact-carousal">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          navigation={{ clickable: true }}
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          //   loop = {true}
        >
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>

          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
