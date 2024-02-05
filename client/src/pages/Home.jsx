import React from "react";
import MainHead from "../components/MainHead";
import MostRead from "../components/MostRead";
import News from "../components/News";
import Articles from "../components/Articles";
import JoinUs from "../components/JoinUs";
import SpotlightMain from "../components/SpotlightMain";
import News1 from "../components/News1";
import Banner from "../components/Banner";
import { useState, useEffect } from "react";

function Home() {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    setShowBanner(false);
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="bg-ban-new-md lg:bg-ban-new-md h-[180px] lg:h-[200px] bg-no-repeat flex justify-end items-center sm:w-370 sm:h-78">
        <section className="hidden lg:block">
          <a
            href="https://lumosmagazine.s3.amazonaws.com/lumos_jan'24_compressed.pdf"
            className="btn btn-md bg-white text-black border-none hover:text-white mr-10"
            target="_blank"
          >
            Explore Now{" "}
          </a>
        </section>
        <section className="block lg:hidden">
          <a
            href="https://lumosmagazine.s3.amazonaws.com/lumos_jan'24_compressed.pdf"
            className="btn btn-xs bg-white text-black border-none hover:text-white"
            target="_blank"
          >
            Explore
          </a>
        </section>
      </div>
      {showBanner && <Banner setShowBanner={setShowBanner} />}
      <MainHead />
      <MostRead />
      {/* <News /> */}
      <News1 />
      {/* <SpotlightMain /> */}
      <Articles />
      <JoinUs />
    </div>
  );
}

export default Home;
