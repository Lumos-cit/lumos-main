import React, { useEffect, useState } from "react";
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
import axios from "axios";

function Xplore() {
  const [xplore, setXplore] = useState([]);
  let tag = "xplore";
  function fetchXplore() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/articles?tag=${tag}`)
      .then((res) => {
        console.log(res.data.data);
        setXplore(res.data.data);
      });
  }
  useEffect(() => {
    fetchXplore();
  }, []);

  const head = "XPLORE";
  const body =
    "Ever thought of piercing the mundane and discovering the marvelous. Well, then it's time for a blast! Fly with us together in thoughts and inspirations! Let's uphill battles in a wink of an eye with the sparks of creative shots. Cheer up!!! The intelligence spiced with fun will be at your spot here on Lumos!";
  // const Image1 = [Career1, Career2, Career3];
  // const Image2 = [Career4, Career5, Career6];
  // const Image3 = [Career7, Career8, Career9];
  const Text1 = [
    "The Five Most Critical Financial Pitfalls to Avoid",
    "The Five Most Critical Financial Pitfalls to Avoid",
    "The Five Most Critical Financial Pitfalls to Avoid",
  ];
  const Button1 = ["studentHQ", "studentHQ", "studentHQ"];
  const Date1 = ["23, March 2023", "23, March 2023", "23, March 2023"];
  const Author1 = [
    "By VIJAY KP , EEE-24",
    "By VIJAY KP , EEE-24",
    "By VIJAY KP , EEE-24",
  ];

  return (
    <div>
      <SectionHead head={head} body={body} />
      <div className="">
        <SectionFlex buttons={Button1} articles={xplore} />
      </div>
    </div>
  );
}

export default Xplore;
