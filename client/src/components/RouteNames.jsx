import React from "react";
import { useNavigate } from "react-router-dom";

function RouteNames() {
  const router = useNavigate();

  return (
    <div className="bg-[#D1D1D1] hidden lg:block">
      <div className="w-4/5 mx-auto flex justify-between">
        <h1
          onClick={() => router("/career")}
          className="text-black poppins-medium hover:cursor-pointer"
        >
          CAREER
        </h1>
        <h1
          onClick={() => router("/studenthq")}
          className="text-black poppins-medium hover:cursor-pointer"
        >
          STUDENT-HQ
        </h1>
        <h1
          onClick={() => router("/xplore")}
          className="text-black poppins-medium hover:cursor-pointer"
        >
          XPLORE
        </h1>
        <h1
          onClick={() => router("/campuslife")}
          className="text-black poppins-medium hover:cursor-pointer"
        >
          CAMPUS LIFE
        </h1>
        <h1
          onClick={() => router("/news")}
          className="text-black poppins-medium hover:cursor-pointer"
        >
          NEWS
        </h1>
        <h1
          onClick={() => router("/spotlight")}
          className="text-black poppins-medium hover:cursor-pointer"
        >
          SPOT LIGHT
        </h1>
      </div>
    </div>
  );
}

export default RouteNames;
