import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import book from "../assets/book.svg";
// import poster from "/Assets/Images/poster.svg";
// import carrer1 from "/Assets/Images/Career1.svg";
// import carrer2 from "/Assets/Images/Career2.svg";
import AuthorName from "./AuthorName";
import DriveImage from "./DriveImage";

function MostRead() {
  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const isMounted = useRef(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //     fetchArticles();
  //   }
  //   let ignore = false;
  //   if (!ignore) {
  //     fetchArticles();
  //   }
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  // const fetchArticles = () => {
  //   const randomArr = getRandomNumbers();
  //   setarticles((prevArticles) => []);
  //   console.log(randomArr);
  //   randomArr.forEach(async (rnum) => {
  //     const articleData = await axios.get(
  //       import.meta.env.VITE_BACKEND_URL + `/api/article/${rnum}`
  //     );

  //     const authorData = await axios.get(
  //       import.meta.env.VITE_BACKEND_URL +
  //         `/author/${articleData.data.author_id}`
  //     );
  //     setarticles((prevArticles) => [...prevArticles, articleData.data]);
  //     setAuthors((prevAuthors) => [...prevAuthors, authorData.data]);
  //   });
  // };

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/articles?limit=${5}`)
      .then((res) => {
        // console.log(res.data.data);
        setArticles(res.data.data);
      });
  }

  // function fetchAuthor(authorId) {
  //   axios
  //     .get(import.meta.env.VITE_BACKEND_URL + "/author/" + authorId)
  //     .then((res) => {
  //       console.log(res.data);
  //       setAuthors((prevAuthors) => [...prevAuthors, res.data]);
  //     });
  // }
  // const getRandomNumbers = () => {
  //   let tempSet = new Set();
  //   while (tempSet.size < 6) {
  //     // 8 should be changed to 48
  //     let value = Math.floor(Math.random() * 8 + 1);
  //     tempSet.add(value);
  //   }
  //   return [...tempSet];
  // };

  // console.log({ articles });
  // console.log({ authors });

  return (
    <div className="bg-white">
      <div className="bg-white w-5/6 mx-auto pt-5">
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
            <progress
              className="progress progress-warning w-full my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-full opacity-70 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-full opacity-50 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <progress
              className="progress progress-warning w-full opacity-25 my-[1%] h-[6px] hidden lg:block"
              value="100"
              max="100"
            ></progress>
            <div className="flex justify-end">
              <img src={book} className="h-[10vh] lg:h-[20vh]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-1 py-3 gap-2 md:gap-[2rem] w-full justify-center flex-wrap">
        {articles &&
          articles.map((article, index) => {
            return (
              <div
                className="flex flex-col cursor-pointer"
                key={article.article_id}
                onClick={() => navigate("/article/" + article.article_id)}
              >
                <div className="card card-compact w-[11rem] md:w-[17rem]  bg-base-200 shadow-md shadow-yellow-800 h-[20rem] md:h-[25rem]">
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
                    <p className="text-[12px] font-bold">{article.title}</p>
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
        {/* <div className="w-[180px] flex flex-col border-2 mx-1 lg:mx-6">
          <img src={poster} className="object-fill" />
          <div className="w-full border-2 border-slate-500 rounded-b-lg bg-black text-white p-[5px]">
            <p className="text-[8px] w-full flex justify-end">date</p>
            <p className="text-[10px] leading-[10px] font-semibold mt-2 mb-[10px] ">
              title bold ewfrwfrfwegawefaerfasd wega{" "}
            </p>
            <p className="text-[8px] uppercase text-[#FFC600]">Author</p>
          </div>
        </div> */}

        {/*         
        <img
          src={poster}
          className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6"
        />
        <img
          src={poster}
          className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6"
        />
        <img
          src={poster}
          className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6"
        />
        <img
          src={poster}
          className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6"
        />
        <img
          src={poster}
          className="w-[140px] lg:w-[184px] h-[290px] mx-1 lg:mx-6"
        /> */}
      </div>
    </div>
  );
}

export default MostRead;
