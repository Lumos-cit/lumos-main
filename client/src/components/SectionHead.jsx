import React from "react";

function SectionHead(props) {
  return (
    <div className="bg-black">
      <div className="p-5 lg:p-20 ">
        <h1 className="poppins-bold text-[50px] lg:text-[100px] text-white">
          {props.head}
        </h1>
        <p className="poppins-regular text-xl text-white">{props.body}</p>
      </div>
    </div>
  );
}

export default SectionHead;
