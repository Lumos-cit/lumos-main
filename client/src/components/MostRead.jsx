import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import book from "../assets/book.svg";
import AuthorName from "./AuthorName";
import DriveImage from "./DriveImage";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function MostRead() {
  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  const { ref, inView } = useInView();

  const animation = useAnimation();

  const cardvariantslg = {
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
    fetchArticles();

    if (inView) {
      animation.start("visible");
    }
    // if (!inView) {
    //   animation.stop("hidden");
    // }

    // console.log(inView);
  }, [inView, animation]);

  function fetchArticles() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/articles?limit=${4}`)
      .then((res) => {
        // console.log(res.data.data);
        setArticles(res.data.data);
      });
  }

  return (
    <div className="bg-white">
      <div  className="bg-white w-5/6 mx-auto pt-5">
        <p className="text-6xl md:text-9xl lg:text-[200px] font-bold text-black 	 ibm-bold">
          Our Most
        </p>
        <div className="flex">
          <div className="basis-1/3">
            <p className="text-8xl md:text-9xl lg:text-[200px] font-bold text-[#FFC600]  ibm-bold">
              Read
            </p>
          </div>
          <div className="basis-2/3">
            <motion.progress
              className="progress progress-warning w-full my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></motion.progress>
            <motion.progress
              className="progress progress-warning w-full opacity-70 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></motion.progress>
            <motion.progress
              className="progress progress-warning w-full opacity-50 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></motion.progress>
            <motion.progress
              className="progress progress-warning w-full opacity-25 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></motion.progress>
            <div className="flex justify-end">
              <img src={book} className="h-[10vh] lg:h-[20vh]" />
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="flex flex-row px-1 py-3 gap-3 md:gap-[2rem] w-full justify-center flex-wrap">
        {articles &&
          articles.map((article, index) => {
            return (
              <div
                className="flex flex-col cursor-pointer"
                key={article.article_id}
                onClick={() => navigate("/article/" + article.article_id)}
              >
                <motion.div
                  variants={cardvariantslg}
                  initial="hidden"
                  animate={animation}
                  custom={index}
                  className="card card-compact w-[10rem] md:w-[18rem]  bg-black shadow-md shadow-yellow-800 h-[20rem] md:h-[25rem]"
                >
                  <figure className="">
                    <DriveImage
                      url={article.cover_img}
                      className="object-cover aspect-square"
                    />
                  </figure>
                  <div className="flex flex-col w-[100%] gap-5 p-3">
                    <h2 className="text-[10px] flex justify-between items-center">
                      <button className="tag text-yellow-500 border-[1px] p-1 border-yellow-500 px-3 rounded-md">
                        {article.tag}
                      </button>
                      {article.createdAt.substring(0, 10)}
                    </h2>
                    <p className="text-[12px] text-white leading-3 font-bold">
                      {article.title}
                    </p>
                    <div className="card-actions justify-start">
                      <AuthorName authorId={article.author_id} />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MostRead;
