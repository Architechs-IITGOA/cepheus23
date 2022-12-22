import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./Contact.css";
import MainCard from "./MainCard";
import SideCard from "./SideCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const contactDetails = [
  {
    name: "Srajan Chourasia",
    role: "Overall Coordinator",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Atharva Bhanage",
    role: "Coordinator1",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Yuvraj Nagar",
    role: "Coordinator2",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Aniket Chaudhri",
    role: "Overall Event Manager",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Mulayam",
    role: "Online Event Manager",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Atharva Bhawasar",
    role: "Offline Event Manager",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Kushagra Srivastava",
    role: "Development Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Neetu",
    role: "Marketing Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Prateek Singhal",
    role: "Sponsorship Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Ritik Tiwari",
    role: "Social Media Head",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  },
  {
    name: "Srajan Chourasia",
    role: "Overall Coordinator",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  }
];

export default function Contact() {

  const [displayData, setDisplayData] = useState({
    name: "Srajan Chourasia",
    role: "Overall Coordinator",
    email: "gstechnical@iitgoa.ac.in",
    phone: "1234567890"
  });

  const handleClick = (i) => {
    console.log("isClicked");
    setDisplayData({
      name: contactDetails[i].name,
      role: contactDetails[i].role,
      email: contactDetails[i].email,
      phone: contactDetails[i].phone
    })
  }
  return(
    <div class="contact-us" id="Contact">
      <h1 class="contact-heading">CONTACT US</h1>
      <div class="contact-content">
        <div class="contact-full-card">
          <MainCard data={displayData}/>
        </div>
        <div class="contact-carousal">
          {contactDetails.map((item, i) => {
            return (
              <SideCard key={i} id={i} role={item.role} handleClick={handleClick}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

























// export default function Contact() {
//   return (
//     <div className="contact-us">
//       <h1>Contact</h1>
//       {/* <Card /> */}
//       <div className="contact-first-layer">
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-second-layer">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-carousal">
//         <Swiper
//           // install Swiper modules
//           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={5}
//           navigation={{ clickable: true }}
//           //   pagination={{ clickable: true }}
//           //   scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             // when window width is >= 480px
//             480: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             // when window width is >= 640px
//             640: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//             900: {
//               slidesPerView: 5,
//               spaceBetween: 40,
//             },
//           }}
//           //   loop = {true}
//         >
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>

//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }
