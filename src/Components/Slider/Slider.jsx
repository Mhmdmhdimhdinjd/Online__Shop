import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import { Skeleton } from "@mui/material";
import "./Slider.css";

const Slider = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  // Update width on window resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simulate a loading delay (e.g., fetching images)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Swiper
      key={width < 991 ? "small" : "large"}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"1.2"}
      spaceBetween={width < 992 ? 45 : 100}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      className="mySwiper1"
    >
      {loading ? (
        // در حالت بارگذاری، اسلایدهایی با Skeleton نمایش داده می‌شود.
        Array.from(new Array(5)).map((_, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "gandom",
              width: "180px",
            }}
          >
            <Skeleton
              variant="rectangular"
              width={width < 992 ? 280 : 500}
              height={width < 992 ? 150 : 300}
            />
          </SwiperSlide>
        ))
      ) : (
        // بعد از بارگذاری، تصاویر واقعی نمایش داده می‌شوند.
        width < 992 ? (
          <>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/f5/81/f58129bd9b104eaf99b249f0b16341e3.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/90/30/9030af6bfff14420bb8a5371d1b8332e.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/7f/4b/7f4b0f0c5dc14ec2a639f7ff7931f580.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/f2/e2/f2e26f009d834f2a9c381ed344537816.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/5e/fc/5efcf2c7a6364b04a1765477934dd5cb.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/6d/08/6d088a33289a400986fc48331cf0fa50.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/c6/3a/c63a37235e5a4d4ca0acb8390754bf0d.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/c4/bf/c4bfcdd06e154c83b74fac0be9bf306c.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/07/ef/07ef74e2959d49bb8f876ff3bd1264e5.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ fontFamily: "gandom", width: "180px" }}>
              <Link to={"/Online__Shop/Products"}>
                <img
                  src="https://cdn.khanoumi.com/cml/carousel-big/1e/28/1e28d0a92b6445c88250274c095996a0.jpeg"
                  alt="image-of-swiper"
                />
              </Link>
            </SwiperSlide>
          </>
        )
      )}
    </Swiper>
  );
};

export default Slider;
