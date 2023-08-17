import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SectionFlex({ images, buttons, articles }) {
  const router = useNavigate();
  return (
    <div className="flex justify-between w-11/12 my-[5%] mx-auto flex-wrap p-1">
      {articles.map((article, index) => (
        <div
          className="h-[480px] w-[250px] mb-6 lg:mb-12 lg:w-[360px] mx-auto cursor-pointer"
          key={index}
          onClick={() => router("/article/" + article.article_id)}
        >
          <img src={article.cover_img} alt="" />
          <div className="bg-[#D9D9D9] w-[250px] lg:w-[360px] p-1 cursor-pointer">
            <div className="flex justify-between items-center">
              <button className="p-1 border border-solid border-black text-black m-2">
                {buttons[index]}
              </button>
              <p className="text-black">{article.createdAt.substring(0, 10)}</p>
            </div>
            <p className="text-2xl poppins-bold text-[#2A2A2A]">
              {article.title}
            </p>
            <Author authorId={article.author_id} />
          </div>
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
