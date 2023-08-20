import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StickWithUs from '../SvgComponents/StickWithUs';

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
        setAuthors(res.data);
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
        {news.map((item, index) => (
          <div
            key={index}
            className="w-20 h-30 bg-slate-200"
            onClick={() => navigate(`/news/${item.news_id}`)} // Navigate to the NewsPage with the news_id parameter
            style={{ cursor: 'pointer' }} // Add cursor pointer for better UX
          >
            <p>{item.title}</p>
            {authors.map((author) =>
              author.author_id === item.author_id ? (
                <div key={author.author_id} className="w-20 h-30 my-10">
                  <p>{item.createdAt.slice(0, 10)}</p>
                  <p>{author.name}</p>
                  {/* Display additional author details here */}
                </div>
              ) : null
            )}
          </div>
        ))}
        <div className="h-[30%] w-full border-[#FFC600] relative border rounded-2xl flex justify-center items-center">
          <div>
            <button
              className="border-[#D4A400] btn btn-outline text-[#D4A400] hover:bg-custom-2 hover:text-white"
              onClick={() => navigate("/news")}
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News1;
