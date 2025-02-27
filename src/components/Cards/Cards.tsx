import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Cards.css";

type Event = {
  id: number;
  title: string;
  description: string;
  date: Date;
};

type CardsProps = {
  data: Event[];
};

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <>
      <div className="swiper__buttons">
        <button className="swiper__prev">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="var(--black)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <button className="swiper__next">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="var(--black)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper__next",
          prevEl: ".swiper__prev",
          lockClass: ".swiper__button__disable",
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        {data.map(({ id, title, description, date }) => (
          <SwiperSlide key={id}>
            <Card title={title} description={description} date={date} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cards;
