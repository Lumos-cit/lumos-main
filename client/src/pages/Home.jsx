import React from "react";
import MainHead from "../components/MainHead";
import MostRead from "../components/MostRead";
import News from "../components/News";
import Articles from "../components/Articles";
import JoinUs from "../components/JoinUs";
import SpotlightMain from "../components/SpotlightMain";
import News1 from "../components/News1";

function Home() {
  return (
    <div className="overflow-hidden">
      <div className="bg-banner-md lg:bg-banner h-[80px] lg:h-[200px] bg-no-repeat flex justify-end items-center">
        <section className="hidden lg:block">
          <a
            href="https://hnm.lumoscit.in"
            className="btn btn-md bg-white text-black border-none hover:text-white mr-10"
            target="_blank"
          >
            Explore Now{" "}
          </a>
        </section>
        <section className="block lg:hidden">
          <a
            href="https://hnm.lumoscit.in"
            className="btn btn-xs bg-white text-black border-none hover:text-white"
            target="_blank"
          >
            Explore
          </a>
        </section>
      </div>
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
