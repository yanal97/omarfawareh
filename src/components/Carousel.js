import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ShowCard from "./ShowCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./Carousel.module.css";

import ShowCardSkeleton from "./ShowCardSkeleton";
const Carousel = () => {
  const [shows, setShows] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const skeletonArray = Array.from({ length: 12 }, (_, index) => index);

  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/7806be0f-8565-4d8b-bc1e-b105036fb1d5"
        );
        setIsFetched(true);
        const resData = response.data;
        setShows(resData.editorialItems);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchShows();
  }, []);

  return (
    <div>
      <Swiper
        allowTouchMove={false}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className={classes.swipe}
        spaceBetween={"0"}
        style={{
          // border: "blue solid 1px",
          backgroundColor: "rgb(0, 21, 41)",
          height: "350px",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {isFetched &&
          shows.map((show) => (
            <SwiperSlide
              key={show.item.id}
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                padding: "2rem",
              }}
            >
              <ShowCard show={show} />
            </SwiperSlide>
          ))}
        {!isFetched &&
          skeletonArray.map((index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                padding: "2rem",
              }}
            >
              <ShowCardSkeleton />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
