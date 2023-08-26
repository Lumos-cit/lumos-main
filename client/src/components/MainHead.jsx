import React, { useEffect, useState } from "react";
import axios from "axios";
import Blocks from "editorjs-blocks-react-renderer";

import SectionHead from "../Components/SectionHead";
import SectionFlex from "../Components/SectionFlex";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MainHead.css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DriveImage from "./DriveImage";

function MainHead() {
  const [cards, setCards] = useState([]);
  const [showFullContent, setShowFullContent] = useState(false);

  function fetchCards() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/articles`)
      .then((res) => {
        console.log(res.data.data);
        setCards(res.data.data);
      });
  }

  useEffect(() => {
    fetchCards();
  }, []);

  // console.log({ cards });
  return (
    <>
      <div className="hidden lg:block  ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            // console.log(swiper);
          }}
          onSlideChange={() => console.log("slide change")}
        >
          {cards &&
            cards.map((card) => (
              <SwiperSlide
                key={card.article_id}
                className="article-card bg-black  "
              >
                <div className=" bg-black w-full  ">
                  <div className="flex w-[90%] h-[25rem] gap-10 justify-between mx-auto">
                    <div className="flex items-start text-white lg:w-1/3 lg:p-4 md:w-1/3 ">
                      <DriveImage
                        url={card.cover_img}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-5 bg-black text-white w-2/3 ">
                      <div className="">
                        <h2 className="font-bold text-3xl text-yellow-400 uppercase lg:mt-[1rem]">
                          {card.title}
                        </h2>
                        <p className="font-semibold text-2xl">
                          {card.description}
                        </p>
                      </div>
                      <div className="font-italic text-xl max-h-[10rem] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
                        <p className="scroll-content">
                          {card && (
                            <DisplayContent data={JSON.parse(card.content)} />
                          )}
                          <Link
                            to={`/article/${card.article_id}`}
                            className="text-yellow-500 ml-4"
                          >
                            Continue Reading...
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="block md:hidden  ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            // console.log(swiper);
          }}
          onSlideChange={() => console.log("slide change")}
        >
          {cards &&
            cards.map((card) => {
              return (
                <SwiperSlide
                  key={card.article_id}
                  className="article-card bg-black  "
                >
                  <div className="bg-black w-full ">
                    <div className="flex w-[80%] justify-center mx-auto mt-[2rem]">
                      <DriveImage
                        url={card.cover_img}
                        className="h-[100%] w-full mb-10"
                      />
                    </div>
                    <div className="flex w-[80%] h-[20vh] justify-between flex-row mx-auto">
                      <div className="w-full">
                        <p className="text-yellow-500 font-bold text-2xl">
                          {card.title}
                        </p>
                        <p className="font-semibold text-xl  text-white">
                          {card.description}
                        </p>
                        <p className="scroll-content font-italic text-sm text-white ">
                          {card && (
                            <DisplayContent data={JSON.parse(card.content)} />
                          )}
                          <Link
                            to={`/article/${card.article_id}`}
                            className="text-yellow-500 ml-[1rem]"
                          >
                            Continue Reading......
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

function DisplayContent({ data }) {
  return <h1>{data.blocks[0].data.text.substring(0, 200)}...</h1>;
}

export default MainHead;
