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
                  <div className="flex w-[90%] h-[30rem] gap-10 justify-between mx-auto">
                    <div className="flex items-start text-white lg:w-[40%] lg:p-10 lg:h-[90%] md:w-1/3 ">
                      <DriveImage
                        url={card.cover_img}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-5 bg-black text-white w-2/3 lg:mt-[10vh] ">
                      <div className="">
                        <h2 className="font-bold text-3xl text-yellow-400 uppercase lg:my-[1rem]">
                          {card.title}
                        </h2>
                        <p className="font-semibold text-xl uppercase ">
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
                            className="text-yellow-500 "
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
                  className="article-card bg-black   flex items-center justify-center"
                >
                  <div className="bg-black w-full h-[30rem]  ">
                    <div className="flex w-[80%] justify-center mx-auto mt-[2rem]">
                      <DriveImage
                        url={card.cover_img}
                        className="h-[40%] w-[75%] "
                      />
                    </div>
                    <div className="flex w-[80%] h-[20vh] justify-between flex-row mx-auto p-3  ">
                      <div className="w-full py-2">
                        <p className= " card-title text-yellow-400 uppercase font-bold text-lg text-center mb-3">
                          {card.title}
                        </p>
                        <p className="font-semibold text-sm text-white   ">
                          {card.description}
                        </p>
                        <Link
                            to={`/article/${card.article_id}`}
                            className="text-yellow-500 "
                          >
                            Continue Reading......
                          </Link>
                        {/* <p className="scroll-content font-italic text-sm text-white lg:my-3 ">
                          {card && (
                            <DisplayContent data={JSON.parse(card.content)} />
                          )}
                          
                        </p> */}
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

function DisplayContent({ data, screenSize }) {
  const maxChars = screenSize === 'lg' ? 350 : 350;
  const slicedText = data.blocks[0].data.text.substring(0, maxChars);

  return <h1 className="poppins-regular text-sm">{slicedText}...</h1>;
}

export default MainHead;
