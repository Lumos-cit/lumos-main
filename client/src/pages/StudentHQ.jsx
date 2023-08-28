import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionHead from "../Components/SectionHead";
import SectionFlex from "../Components/SectionFlex";
// import Career1 from "/Assets/Images/Career1.svg";
// import Career2 from "/Assets/Images/Career2.svg";
// import Career3 from "/Assets/Images/Career3.svg";
// import Career4 from "/Assets/Images/Career4.svg";
// import Career5 from "/Assets/Images/Career5.svg";
// import Career6 from "/Assets/Images/Career6.svg";
// import Career7 from "/Assets/Images/Career7.svg";
// import Career8 from "/Assets/Images/Career8.svg";
// import Career9 from "/Assets/Images/Career9.svg";

function StudentHQ() {
  const head = "STUDENT HQ";
  const body =
    "Vivify your spirits! Kick out the emptiness. The powerful community is cruising their way to success. This fiercely competitive world cannot stop them from crafting their life. Batten down the financial hatches, all under the aegis of Student Head Quarters. The runway is all set for student take-off!    ";
  // const Image1 = [Career1, Career2, Career3];
  // const Image2 = [Career4, Career5, Career6];
  // const Image3 = [Career7, Career8, Career9];
  // const Image1 = [Career1, Career2, Career3, Career4, Career5, Career6];
  const Button1 = [
    "studentHQ",
    "studentHQ",
    "studentHQ",
    "studentHQ",
    "studentHQ",
    "studentHQ",
  ];
  const [articles, setArticles] = useState([]);
  let tag = "studentHq";

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
        <SectionFlex buttons={Button1} articles={articles} />
      </div>
    </div>
  );
}

export default StudentHQ;
