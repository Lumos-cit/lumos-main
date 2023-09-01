import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StickWithUs from "../SvgComponents/StickWithUs";
import "../assets/New1.css";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const News1 = () => {
  const [news, setNews] = useState([]);
  const [authors, setAuthors] = useState([]);

  const navigate = useNavigate();

  const { ref, inView } = useInView();

  const animation = useAnimation();

  const newsvariants = {
    hidden: (index) => ({
      opacity: 0,
      pathLength: 0,
      y: "10vw",
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.5,
        duration: 1,
      },
    }),
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/news?limit=${4}`)
      .then((res) => {
        setNews(res.data.data);

        // Fetch all authors for the news
        const authorIds = res.data.data.map((item) => item.author_id);
        fetchAuthors(authorIds);
      })
      .catch((err) => console.log(err));

    if (inView) {
      animation.start("visible");
    }
    // if (!inView) {
    //   animation.stop("hidden");
    // }

    // console.log(inView);
  }, [inView, animation]);

  function fetchAuthors(authorIds) {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/author").then((res) => {
      // console.log(res.data);
      setAuthors(res.data.data);
    });
  }

  return (
    <>
      <div className="bg-white">
        <StickWithUs />

        <h1 className="ibm-bold text-6xl lg:text-[150px] text-center text-black leading-none pt-5 lg:pt-10">
          NEWS
        </h1>
        <p className="text-[#FFC600] text-[48px] text-center ibm-bold leading-none">
          Stay Updated
        </p>
        <div ref={ref} className="px-[15%] py-[5%] md:h-[50rem] grid gap-4 md:flex-col lg:grid-cols-2 lg:grid-rows-2">
          {news.map((item, index) => (
            <motion.div
              key={index}
              variants={newsvariants}
              initial="hidden"
              animate={animation}
              custom={index}
              onClick={() => navigate(`/news/${item.news_id}`)}
              style={{ cursor: "pointer" }}
              className={`news-card-${
                index % 4
              } flex-grow lg:h-80 border rounded-md lg:rounded-[2rem]`}
            >
              <div className="px-[10%] py-[10%]">
                <p className="ibm-bold  my-2 text-sm lg:text-2xl text-white">
                  {item.createdAt.slice(0, 10)}
                </p>
                {item.title.length > (window.innerWidth >= 1024 ? 30 : 50) ? (
                  <p className="poppins-bold my-2 text-sm lg:text-xl text-white">
                    {item.title.slice(0, window.innerWidth >= 1024 ? 100 : 40)}
                    ....
                  </p>
                ) : (
                  <p className="ibm-bold my-2 text-sm lg:text-xl text-white">
                    {item.title}
                  </p>
                )}
                {authors.map((author) =>
                  author.author_id === item.author_id ? (
                    <div
                      key={author.author_id}
                      className="absolute lg:bottom-5 md:bottom-0"
                    >
                      <p className="text-sm lg:text-xl poppins-regular text-white  ">
                        {author.name}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-[4rem] w-full  relative  rounded-2xl flex justify-center items-center">
          <div>
            <button
              className="border-[#D4A400] btn btn-outline text-[#D4A400] hover:bg-custom-2 hover:text-white mb-[15%]"
              onClick={() => navigate("/news")}
            >
              Discover More NEWS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News1;
