import React from "react";
import logo from "/Assets/Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex justify-between h-[200px] w-full bg-[#DEDB44] ">
          <div className="basis-3/4">
            <img src={logo} className="p-5" />
            <p className="pl-7 text-black">About Us</p>
            <p className="pl-7 text-black">Contact Us</p>
            <div className="flex justify-between w-2/12 pl-7 mt-3">
              <FontAwesomeIcon icon={faInstagram} className="text-black" />
              <FontAwesomeIcon icon={faLinkedin} className="text-black" />
              <FontAwesomeIcon icon={faTwitter} className="text-black" />
            </div>
          </div>
          <div className="basis-1/4">
            <h1 className="text-black text-2xl ibm-bold mt-4">Sections</h1>
            <div className="flex gap-2 mt-5 flex-wrap">
              <div className="text-black poppins-regular">XPLORE</div>
              <div className="text-black poppins-regular">CAREER</div>
              <div className="text-black poppins-regular">STUDENT HQ</div>
              <div className="text-black poppins-regular">CAMPUS LIFE</div>
            </div>
          </div>
        </div>
        {/* <hr className="border border-black" /> */}
        <h1 className="text-center bg-[#DEDB44] text-black">
          LUMOS OFFICIAL 2023
        </h1>
      </div>

      <div className="block md:hidden">
        <div className="flex flex-col justify-center items-center w-full bg-[#DEDB44] ">
          <img src={logo} className="p-5" />
          <p className=" text-black">About Us</p>
          <p className=" text-black">Contact Us</p>
          <div className="flex justify-between w-1/2 mt-3">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-black"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-black"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-black"
              size="2x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
