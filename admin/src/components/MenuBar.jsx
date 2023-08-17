import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

import { faImage } from "@fortawesome/free-solid-svg-icons";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { faGear } from "@fortawesome/free-solid-svg-icons";

function MenuBar() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-[5%] ">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1b_N5Dq8dj5lhknTsVS6_UJ_7dSVpW5oOw&usqp=CAU"
          alt=""
          className="w-[50px] h-[50px]"
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faFeather} size="lg" className="hover:cursor-pointer text-black"/>
      </div>

      <div>
        <FontAwesomeIcon icon={faImage} size="lg" className="hover:cursor-pointer text-black"/>
      </div>
      <div>
        <FontAwesomeIcon icon={faInfoCircle} size="lg" className="hover:cursor-pointer text-black"/>
      </div>

      <div>
        <FontAwesomeIcon icon={faCartShopping} size="lg" className="hover:cursor-pointer text-black"/>
      </div>
      <div>
        <FontAwesomeIcon icon={faGear} size="lg" className="hover:cursor-pointer text-black"/>
      </div>
    </div>
  );
}

export default MenuBar;
