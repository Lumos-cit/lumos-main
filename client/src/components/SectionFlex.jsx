import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthorName from "../components/AuthorName";
import DriveImage from "../components/DriveImage";

function SectionFlex({ buttons, articles }) {
  const router = useNavigate();
  return (
    <div className="flex flex-row px-1 py-5 gap-3 md:gap-[2rem] w-full justify-center flex-wrap">
      {articles.map((article, index) => (
        // <div
        //   className="h-[480px] w-[250px] mb-6 lg:mb-12 lg:w-[360px] mx-auto cursor-pointer"
        //   key={index}
        //   onClick={() => router("/article/" + article.article_id)}
        // >
        //   {/* <img src={article.cover_img} alt="" /> */}
        //   <DriveImage url={article.cover_img} className="" />
        //   <div className="bg-[#D9D9D9] w-[250px] lg:w-[360px] p-1 cursor-pointer">
        //     <div className="flex justify-between items-center">
        //       <button className="p-1 border border-solid border-black text-black m-2">
        //         {buttons[index]}
        //       </button>
        //       <p className="text-black">{article.createdAt.substring(0, 10)}</p>
        //     </div>
        //     <p className="text-2xl poppins-bold text-[#2A2A2A]">
        //       {article.title}
        //     </p>
        //     <Author authorId={article.author_id} />
        //   </div>
        // </div>
        <div
          className="flex flex-col cursor-pointer"
          key={article.article_id}
          onClick={() => router("/article/" + article.article_id)}
        >
          <div className="card card-compact w-[11rem] md:w-[15rem]  bg-base-200 shadow-md shadow-slate-400 h-[20rem] md:h-[25rem]">
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
                <button className="tag text-yellow-500 border-[1px] p-1 border-yellow-500 rounded-md px-3">
                  {article.tag}
                </button>
                {article.createdAt.substring(0, 10)}
              </h2>
              <p className="text-[12px] text-slate-300 font-bold">
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
      ))}
    </div>
  );
}

function Author({ authorId }) {
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchAuthors();
  }, []);

  function fetchAuthors() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/author/" + authorId)
      .then((res) => {
        setAuthor(res.data);
      });
  }

  return <p className="poppins-bold text-[#2A2A2A]">{author.name}</p>;
}

export default SectionFlex;
