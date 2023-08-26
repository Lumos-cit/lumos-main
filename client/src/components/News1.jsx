import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StickWithUs from '../SvgComponents/StickWithUs';
import '../assets/New1.css'
const News1 = () => {
  const [news, setNews] = useState([]);
  const [authors, setAuthors] = useState([]);

  const navigate = useNavigate();

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
  }, []);

  function fetchAuthors(authorIds) {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + '/author')
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data.data);
      });
  }

  return (
    <>
      <div className="bg-white">
      <StickWithUs />

      <h1 className="ibm-bold text-6xl lg:text-[150px] text-center text-black leading-none pt-10">
        NEWS
      </h1>
      <p className="text-[#FFC600] text-[48px] text-center ibm-bold leading-none">
        Stay Updated
      </p>
      <div className="px-[15%] py-[5%] h-[150vh] md:h-[80rem] flex flex-wrap gap-8 md:flex-col">
  {news.map((item, index) => (
    <div
      key={index}
      onClick={() => navigate(`/news/${item.news_id}`)} 
      style={{ cursor: 'pointer' }} 
      className={`news-card-${index % 4} flex-grow`}
    >
      <div className="px-[10%] py-[10%]">
        <p className="ibm-bold text-2xl text-black">{item.createdAt.slice(0, 10)}</p>
        <p className="ibm-bold text-xl text-white">{item.title.slice(0, 40)}....</p>
        {authors.map((author) =>
          author.author_id === item.author_id ? (
            <div key={author.author_id} className="">
              <p className="mt-2 text-xl ibm-italic text-white">{author.name}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
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
