import React, { useEffect, useState } from "react";
import axios from "axios";
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

  console.log({ cards });
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cards &&
          cards.map((card) => (
            <SwiperSlide
              key={card.article_id}
              className="article-card bg-black "
            >
              <div className=" bg-black w-full  ">
                <div className="flex w-[80%] h-[25rem] justify-between mx-auto">
                  <div className="flex items-start text-white lg:w-1/3 lg:p-4 md:w-1/3 ">
                    <img
                      src={card.cover_img}
                      alt="Article Cover"
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
                        {card.content.substring(0, 100)}
                        <Link
                          to={`/article/${card.article_id}`}
                          className="text-yellow-500"
                        >
                          Continue Reading......
                        </Link>
                        {/* {showFullContent
                          ? JSON.parse(card.content).blocks.map((block) => {
                              if (block.type === "paragraph") {
                                return <p>{block.data.text}</p>;
                              }
                              if (block.type === "list") {
                                return (
                                  <ul>
                                    {block.data.items.map((item) => (
                                      <li>{item}</li>
                                    ))}
                                  </ul>
                                );
                              }
                              return null;
                            })
                          : JSON.parse(
                              card.content
                          ).blocks[0].data.text.substring(0, 50) + "..."
                        } */}
                      </p>
                    </div>
                    {/* {!showFullContent && (
                      <div className="text-yellow-500 mt-2 cursor-pointer bottom-10">
                        <Link
                          to={`/article/${card.article_id}`}
                          className="text-yellow-500"
                        >
                          Continue Reading......
                        </Link>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default MainHead;
