import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

function NewsFlex({ news }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
     
      {news.map((news, index) => {
        return (
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start w-4/5 mx-auto border border-solid border-white my-[2%] bg-black shadow-md shadow-white"
            key={index}
          >
          
            <div className="basis-[60%]">
              <h1 className="poppins-bold my-[2%] text-2xl text-white">
                {news.title}
              </h1>
              <p className="poppins-regular text-white">{news.content}</p>
            </div>
            <div className="basis-[20%] flex flex-col justify-center items-center gap-5 h-3/4 my-auto ">
              <p className="text-white">{news.createdAt.substring(0, 10)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFlex;
