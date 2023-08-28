import React from "react";
import newBanner from "../assets/banner-new.svg";

const Banner = ({ setShowBanner }) => {
  return (
    <main className="w-[100vw] h-[100vh] p-5 bg-slate-900 fixed top-0  flex justify-center items-center z-[55] opacity-95 ">
      <div
        className="relative w-[100%] h-[90%] flex flex-col  justify-between items-center gap-2"
        // style={{ backgroundImage: `url(${newBanner})` }}
      >
        <img className="w-[100%] h-[100%]" src={newBanner} alt="" />
        <div className="hidden md:flex gap-12 pb-3 w-full justify-center">
          <button
            className="text-[10px] md:text-[12px] px-2 md:px-5 py-1 font-bold bg-slate-100 text-slate-950 rounded-md hover:bg-slate-900 hover:text-slate-100"
            onClick={() => setShowBanner(false)}
          >
            CLOSE
          </button>
          <a
            className="text-[10px] md:text-[12px] px-5 py-1 font-bold  bg-slate-100 text-slate-950 rounded-md hover:bg-slate-900 hover:text-slate-100"
            href="https://hnm.lumoscit.in"
            target="_blank"
          >
            EXPLORE NOW
          </a>
        </div>
      </div>
      <button
        className="text-white text-[20px] font-bold absolute top-6 right-10"
        onClick={() => setShowBanner(false)}
      >
        X
      </button>
      <a
        className="text-[10px] md:text-[12px] px-5 py-1 font-bold  bg-slate-100 text-slate-950 rounded-md hover:bg-slate-900 hover:text-slate-100 absolute top-7 left-6 md:hidden"
        href="https://hnm.lumoscit.in"
        target="_blank"
      >
        EXPLORE NOW
      </a>
    </main>
  );
};

export default Banner;
