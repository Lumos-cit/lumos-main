/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ink from "/Assets/Images/ink.svg";
import poster from "/Assets/Images/poster.svg";
import NotJustArticles from "../SvgComponents/NotJustArticles";

function Articles() {
  const [articles, setarticles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const isMounted = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetchArticles();
    }
    // let ignore = false;
    // if (!ignore) {
    //   fetchArticles();
    // }
    // return () => {
    //   ignore = true;
    // };
  }, []);

  const fetchArticles = () => {
    const randomArr = getRandomNumbers();
    setarticles((prevArticles) => []);
    // console.log(randomArr);
    randomArr.forEach(async (rnum) => {
      const articleData = await axios.get(
        import.meta.env.VITE_BACKEND_URL + `/api/article/${rnum}`
      );

      const authorData = await axios.get(
        import.meta.env.VITE_BACKEND_URL +
          `/author/${articleData.data.author_id}`
      );
      setarticles((prevArticles) => [...prevArticles, articleData.data]);
      setAuthors((prevAuthors) => [...prevAuthors, authorData.data]);
    });
  };

  const getRandomNumbers = () => {
    let tempSet = new Set();
    while (tempSet.size < 6) {
      // 8 should be changed to 48
      let value = Math.floor(Math.random() * 8 + 1);
      tempSet.add(value);
    }
    return [...tempSet];
  };
  return (
    <div className="relative bg-white h-full pt-[10%] lg:pt-2">
      <NotJustArticles />

      <h1 className="text-3xl lg:text-[120px] ibm-bold text-[#FFE68F] tracking-widest leading-none text-center pt-5">
        Emotions Captured
      </h1>

      <div className="flex justify-center lg:justify-between mt-[5%] lg:mt-10 w-5/6 mx-auto flex-wrap">
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            XPLORE
          </button>
        </div>
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            CAMPUS LIFE
          </button>
        </div>
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            STUDENT HQ
          </button>
        </div>
        <div>
          <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] btn-wide lg:btn-md mx-auto my-[2%]">
            CAREER
          </button>
        </div>
      </div>

      <p className="text-start text-black w-5/6 mx-auto mt-10">
        The Xplore section is an extraordinary realm filled with boundless
        creativity and endless possibilities. It opens the doors to a world
        where imagination knows no bounds and thinking outside the box becomes
        second nature. This section is truly awe-inspiring, as it not only
        encourages exploration but makes you feel like the very essence of
        adventure itself.Within the Xplore section, there is a captivating
        energy that ignites the spark of curiosity within each individual. It
        invites you to step outside your comfort zone, daring you to embrace new
        experiences and venture into uncharted territories. It is a place where
        limitations cease to exist, and the boundaries of what is deemed
        possible are shattered.
      </p>

      <div className="flex flex-row w-full gap-3 items-center justify-center flex-wrap my-5">
        {/* <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px] mx-1 lg:mx-6" />
        <img src={poster} className="w-[140px]   lg:w-[184px] h-[290px] mx-1 lg:mx-6" /> */}
        {articles?.length < 6 ? (
          <h1>Loading...</h1>
        ) : (
          articles.map((article, index) => {
            return (
              <div
                className="w-[180px] flex flex-col cursor-pointer mx-1 md:w-[240px] lg:mx-6"
                key={article.article_id}
                onClick={() => navigate("/article/" + article.article_id)}
              >
                <img src={article.cover_img} className="object-fill" />
                <div className="w-full rounded-b-lg bg-black text-white pt-2 p-[12px] md:min-h-[100px]">
                  <p className="text-[8px] w-full flex justify-end md:text-[10px]">
                    {article.createdAt.substring(0, 10)}
                  </p>
                  <p className="text-[10px] leading-[10px] font-semibold mt-2 mb-[10px] md:text-[14px]">
                    {article.title}
                  </p>
                  <p className="text-[8px] uppercase text-[#FFC600] md:text-[12px] md:mt-7">
                    BY {authors[index].name} , {authors[index].department}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-center">
        <button className="btn bg-custom-1 btn-wide mx-auto text-slate-400 hover:text-white">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
}

export default Articles;
