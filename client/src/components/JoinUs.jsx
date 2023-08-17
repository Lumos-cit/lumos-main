import React from "react";
import JoinusToday from "../SvgComponents/JoinusToday";
import Pic from "../SvgComponents/Pic";
import OneBigFamily from "../SvgComponents/OneBigFamily";

function JoinUs() {
  return (
    <div className="bg-white h-full">
      <JoinusToday />
      <Pic />
      {/* <h1 className="ibm-bold text-[#FFE500] text-4xl lg:text-[300px]  text-center leading-none tracking-[40px] ">
        FAMILY
      </h1> */}
      <OneBigFamily />
      <div className="flex justify-center p-3">
        <button className="btn btn-neutral border-[#F8F301] border-2 text-[#F8F301] ">
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default JoinUs;
