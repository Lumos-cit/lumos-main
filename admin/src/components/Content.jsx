import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeContentType } from "../hooks/features/productsSlice";

function Content() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.product.contentType);

  const contentTypes = ["Articles", "News"];
  return (
    <div className="flex flex-col pl-10 gap-5 text-black mt-[5%]">
      <h1 className="font-bold text-xl">Content</h1>
      <div>
        <h1 className="font-semibold">Collection Types </h1>
        <ul className="list-inside list-disc">
          {contentTypes.map((val, i) => (
            <li
              key={i}
              onClick={() => dispatch(changeContentType(val))}
              className={`border border-none hover:text-indigo-800 hover:font-semibold 
              hover:cursor-pointer hover:border-r-8 my-[3%]
              ${val == type ? "font-semibold text-indigo-800" : ""}`}
            >
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
