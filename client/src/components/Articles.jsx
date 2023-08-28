/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import poster from "/assets/Images/poster.svg";
import NotJustArticles from "../SvgComponents/NotJustArticles";
import AuthorName from "./AuthorName";
import DriveImage from "./DriveImage";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [tag, setTag] = useState("xplore");
  const isMounted = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetchArticles();
    }
  }, []);

  function fetchArticles() {
    axios
      .get(
        import.meta.env.VITE_BACKEND_URL + `/api/articles?tag=${tag}&limit=${5}`
      )
      .then((res) => {
        // console.log(res.data.data);
        setArticles(res.data.data);
        articles.forEach((val) => {
          fetchAuthor(val.author_id);
        });
      });
  }

  function fetchAuthor(authorId) {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/author/" + authorId)
      .then((res) => {
        // console.log(res.data);
        setAuthors((prevAuthors) => [...prevAuthors, res.data]);
      });
  }

  return (
    <div className="relative bg-white h-full pt-[10%] lg:pt-2">
      <NotJustArticles />

      <h1 className="text-3xl lg:text-8xl ibm-bold  text-yellow-500  tracking-widest leading-none text-center pt-5">
        Moments Captured
      </h1>

      <div className="flex justify-center lg:justify-between mt-[5%] lg:mt-10 w-5/6 mx-auto flex-wrap">
        <div>
          <button
            className="btn btn-neutral border-[#F8F301] border-2 text-yellow-500 btn-wide btn-sm lg:btn-md mx-auto my-[2%]"
            onClick={() => {
              setTag("xplore");
              fetchArticles();
            }}
          >
            XPLORE
          </button>
        </div>
        <div>
          <button
            className="btn btn-neutral border-[#F8F301] border-2  text-yellow-500  btn-wide btn-sm lg:btn-md mx-auto my-[2%]"
            onClick={() => {
              setTag("campusLife");
              fetchArticles();
            }}
          >
            CAMPUS LIFE
          </button>
        </div>
        <div>
          <button
            className="btn btn-neutral border-[#F8F301] border-2  text-yellow-500  btn-wide btn-sm lg:btn-md mx-auto my-[2%]"
            onClick={() => {
              setTag("studentHq");
              fetchArticles();
            }}
          >
            STUDENT HQ
          </button>
        </div>
        <div>
          <button
            className="btn btn-neutral border-[#F8F301] border-2  text-yellow-500  btn-wide btn-sm lg:btn-md mx-auto my-[2%]"
            onClick={() => {
              setTag("career");
              fetchArticles();
            }}
          >
            CAREER
          </button>
        </div>
      </div>

      {(() => {
        switch (tag) {
          case "xplore":
            return (
              <p className="text-start text-black w-5/6 mx-auto mt-10 text-xl">
                Ever thought of piercing the mundane and discovering the
                marvelous. Well, then it's time for a blast! Fly with us
                together in thoughts and inspirations! Let's uphill battles in a
                wink of an eye with the sparks of creative shots. Cheer up!!!
                The intelligence spiced with fun will be at your spot here on
                Lumos!
              </p>
            );
          case "studentHq":
            return (
              <p className="text-start text-black w-5/6 mx-auto mt-10 text-xl">
                Vivify your spirits! Kick out the emptiness. The powerful
                community is cruising their way to success. This fiercely
                competitive world cannot stop them from crafting their life.
                Batten down the financial hatches, all under the aegis of
                Student Head Quarters. The runway is all set for student
                take-off!
              </p>
            );
          case "career":
            return (
              <p className="text-start text-black w-5/6 mx-auto mt-10 text-xl">
                Sail your way towards the grandest vision of your career. Lumos
                footholds Career exclusively to set you assail the hurdles in
                your career pathway. The plethora of opportunities is awaiting
                in the ocean of professions. Catch your space from Lumos!
              </p>
            );
          case "campusLife":
            return (
              <p className="text-start text-black w-5/6 mx-auto mt-10 text-xl">
                Let's rekindle the cherishing vibes, unforgettable journey and
                all the fun loving memories endued in campus life.The ticks of
                the clock are heralding more such times! Keep no halt! Lumos is
                on the way, entangling the everlasting pages of our campus days.{" "}
              </p>
            );
          default:
            return null; 
        }
      })()}

      <div className="flex flex-row px-1 py-5 gap-3 md:gap-[2rem] w-full justify-center flex-wrap">
        {articles &&
          authors &&
          articles.map((article, index) => {
            return (
              // <div
              //   className="flex flex-col cursor-pointer"
              //   key={article.article_id}
              //   onClick={() => navigate("/article/" + article.article_id)}
              // >
              //   <div className="card card-compact w-[11rem] md:w-[17rem]  bg-base-100 shadow-xl h-[22rem] md:h-[25rem]">
              //     <figure className="h-[60%]">
              //       {/* <img
              //         src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              //         alt="Shoes"
              //       /> */}
              //       <DriveImage
              //         url={article.cover_img}
              //         className="object-fill"
              //       />
              //     </figure>
              //     <div className="flex flex-col gap-7 p-3">
              //       <h2 className="text-sm md:text-lg">
              //         {article.createdAt.substring(0, 10)}
              //       </h2>
              //       <p className="text-[12px]">{article.title}</p>
              //       <div className="card-actions justify-start">
              //         {/* <button className="btn btn-primary">Buy Now</button> */}
              //         <AuthorName authorId={article.author_id} />
              //       </div>
              //     </div>
              //   </div>

              //   {/* <div className="w-full rounded-b-lg bg-black text-white pt-2 p-[12px] h-[150px] flex flex-col justify-center items-start">
              //     <p className="text-[8px] w-full flex justify-end md:text-[10px]">
              //       {article.createdAt.substring(0, 10)}
              //     </p>
              //     <p className="text-[10px] leading-5 [10px] flex justify-start font-semibold  mt-2 mb-[10px] md:text-[14px]">
              //       {article.title}
              //     </p>
              //   </div> */}
              // </div>
              <div
                className="flex flex-col cursor-pointer"
                key={article.article_id}
                onClick={() => navigate("/article/" + article.article_id)}
              >
                <div className="card card-compact w-[10rem] md:w-[15rem]  bg-black shadow-md shadow-yellow-800 h-[20rem] md:h-[25rem]">
                  <figure className="">
                    {/* <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    /> */}
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
                      {/* <button className="btn btn-primary">Buy Now</button> */}
                      <AuthorName authorId={article.author_id} />
                    </div>
                  </div>
                </div>

                {/* <div className="w-full rounded-b-lg bg-black text-white pt-2 p-[12px] h-[150px] flex flex-col justify-center items-start">
                  <p className="text-[8px] w-full flex justify-end md:text-[10px]">
                    {article.createdAt.substring(0, 10)}
                  </p>
                  <p className="text-[10px] leading-5 [10px] flex justify-start font-semibold  mt-2 mb-[10px] md:text-[14px]">
                    {article.title}
                  </p>
                </div> */}
              </div>
            );
          })}
      </div>
      <div className="flex justify-center">
        {/* <button className="btn bg-custom-1 btn-wide mx-auto text-slate-400 hover:text-white">
          DISCOVER MORE
        </button> */}
      </div>
    </div>
  );
}

export default Articles;
