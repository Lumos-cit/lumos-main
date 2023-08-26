import React from "react";
// import JoinusToday from "../SvgComponents/JoinusToday";
// import Pic from "../SvgComponents/Pic";
// import OneBigFamily from "../SvgComponents/OneBigFamily";
import joinusfamily from "../assets/joinusfamily.svg"
import JoinUsFamily from "../SvgComponents/JoinUsFamily";

function JoinUs() {
  return (
    <div className="bg-white h-full">
    
      <JoinUsFamily />
      <div className="flex justify-center py-5">
          <a href="https://docs.google.com/forms/d/1APkSqSswelrWUyce49rvuQSe2wE402wb2yHycaDkACE/edit  " target='blank'>
            <button className=" btn btn-outline border-[#E9BC21] border-1  text-[#E9BC21] font-semibold hover:bg-[#E9BC21] hover:text-black">
            JOIN NOW
          </button>


          </a>
      
      </div>
    </div>
  );
}

export default JoinUs;
