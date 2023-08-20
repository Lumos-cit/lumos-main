import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function NewsPage() {
  const { news_id } = useParams(); // Access the news_id parameter from the route
  const [newsData, setNewsData] = useState(null);
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    // Fetch the news data based on the news_id parameter
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/news/${news_id}`)
      .then((res) => {
        setNewsData(res.data);
        
        // Fetch the corresponding author data
        axios
          .get(import.meta.env.VITE_BACKEND_URL + `/author/${res.data.author_id}`)
          .then((authorRes) => {
            setAuthorData(authorRes.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [news_id]);

  if (!newsData || !authorData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-zinc-800">
      <div className="p-5 lg:p-20">
        <h1 className="poppins-bold text-white">{newsData.createdAt.slice(0, 10)}</h1>
        <br></br>
        <h1 className="poppins-bold text-[50px] lg:text-[100px] text-white">{newsData.title}</h1>
        <br></br>
        <p className="text-white">{newsData.content}</p>
        <div className="author-details text-white">
          <h2 className="text-white">Author Details</h2>
          <p>Name: {authorData.name}</p>
          <p>Department: {authorData.department}</p>
          <p>Bio: {authorData.bio}</p>
          <img src={authorData.profile_pic} alt="Author Profile" />
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
