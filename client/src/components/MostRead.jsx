import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import book from "/Assets/Images/book.svg";
import poster from "/Assets/Images/poster.svg";
import carrer1 from "/Assets/Images/Career1.svg";
import carrer2 from "/Assets/Images/Career2.svg";

function MostRead() {
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

  // console.log(articles);
  // console.log(authors);

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
      <div className="flex flex-row gap-2 w-full justify-center items-center flex-wrap">
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
