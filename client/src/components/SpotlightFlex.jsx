import React from "react";

function SpotlightFlex() {
  const swipe = "swipe for more ->";
  return (
    <div className="w-11/12 mx-auto pt-[3%]">
      <div className="flex justify-between ">
        <h1 className="text-4xl text-white">Spotlight march 2023</h1>

        <h1 className="text-4xl text-white">{swipe}</h1>
      </div>
    </div>
  );
}

export default SpotlightFlex;
