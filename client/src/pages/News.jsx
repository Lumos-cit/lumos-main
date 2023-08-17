import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionHead from "../Components/SectionHead";
import SectionFlex from "../Components/SectionFlex";
import NewsFlex from "../Components/NewsFlex";
import News1 from "/Assets/Images/News1.svg";
import News2 from "/Assets/Images/News2.svg";
import News3 from "/Assets/Images/News3.svg";
import News4 from "/Assets/Images/News4.svg";
import News5 from "/Assets/Images/News5.svg";

function News() {
  const head = "NEWS";
  const body =
    "This article dives into the common money traps that many college students fall into, and offers practical advice on how to avoid them. From overspending to getting caught up in credit card offers and Crypto scams, we’ll show you how to make wise financial choices that will set you up for success during and after college.";


  const[news , setNews] = useState([])
  useEffect(() => {
    fetchNews();
  }, []);

  function fetchNews() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/news`)
      .then((res) => {
        console.log(res.data.data);
        setNews(res.data.data);
      });
  }

  return (
    <div>
      <SectionHead head={head} body={body} />
      <div>
        <NewsFlex news={news} />
      </div>
    </div>
  );
}

export default News;
