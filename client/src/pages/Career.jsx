import React, { useEffect, useState } from "react";
import SectionHead from "../Components/SectionHead";
import SectionFlex from "../Components/SectionFlex";
import Career1 from "/Assets/Images/Career1.svg";
import Career2 from "/Assets/Images/Career2.svg";
import Career3 from "/Assets/Images/Career3.svg";
import Career4 from "/Assets/Images/Career4.svg";
import Career5 from "/Assets/Images/Career5.svg";
import Career6 from "/Assets/Images/Career6.svg";
import Career7 from "/Assets/Images/Career7.svg";
import Career8 from "/Assets/Images/Career8.svg";
import Career9 from "/Assets/Images/Career9.svg";

import axios from "axios";

function Career() {
  const head = "Career";
  const body =
    "This article dives into the common money traps that many college students fall into, and offers practical advice on how to avoid them. From overspending to getting caught up in credit card offers and Crypto scams, we’ll show you how to make wise financial choices that will set you up for success during and after college.";
  const Image1 = [Career1, Career2, Career3, Career4, Career5, Career6];
  const Button1 = [
    "studentHQ",
    "studentHQ",
    "studentHQ",
    "studentHQ",
    "studentHQ",
    "studentHQ",
  ];
  const [articles, setArticles] = useState([]);
  let tag = "career";

  useEffect(() => {
    fetchArticles();
  }, []);

  function fetchArticles() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/articles?tag=${tag}`)
      .then((res) => {
        console.log(res.data.data);
        setArticles(res.data.data);
      });
  }

  return (
    <div>
      <SectionHead head={head} body={body} />
      <div className="">
        <SectionFlex images={Image1} buttons={Button1} articles={articles} />
      </div>
    </div>
  );
}

export default Career;
