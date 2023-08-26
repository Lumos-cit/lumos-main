import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="hidden lg:block z-20">
        <div className="flex justify-between h-[200px] w-full bg-yellow-400 ">
          <div className="basis-3/4">
            <img src={logo} className="p-5" />
            <Link to='/about' className="pl-7 text-black ">About Us</Link>
            <p className="pl-7 text-black "><a href="mailto:lumos@citchennai.net" className="hover:cursor-pointer"  >Contact Us          </a></p>
            <div className="flex justify-between w-2/12 pl-7 mt-3">
            <a href="https://www.instagram.com/lumos_cit/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-black"
                size="2x"
              />

            </a>
            <a href="            https://www.linkedin.com/company/lumos-magazine/mycompany/?viewAsMember=true ">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-black"
                size="2x"
              />

            </a>
            
           <a href="https://twitter.com/LumosMagazine">
           <FontAwesomeIcon
              icon={faTwitter}
              className="text-black"
              size="2x"
            />

           </a>
            </div>
          </div>
          <div className="basis-1/4">
            <h1 className="text-black text-2xl ibm-bold mt-4">Sections</h1>
            <div className="flex gap-2 mt-5 flex-wrap">
              <Link to ='/xplore' className="text-black poppins-regular">XPLORE</Link>
              <Link to='/career' className="text-black poppins-regular">CAREER</Link>
              <Link to='/studenthq' className="text-black poppins-regular">STUDENT HQ</Link>
              <Link to='/campuslife' className="text-black poppins-regular">CAMPUS LIFE</Link>
            </div>
          </div>
        </div>
        {/* <hr className="border border-black" /> */}
        <h1 className="text-center  bg-yellow-400  text-black">
          LUMOS OFFICIAL 2023
        </h1>
      </div>

      <div className="block md:hidden z-20">
        <div className="flex flex-col justify-center items-center w-full  bg-yellow-400  ">
          <img src={logo} className="p-5" />
          <Link to='/about' className=" text-black">About Us</Link>     
          <a href="mailto:lumos@citchennai.net" className="hover:cursor-pointer"  >Contact Us          </a>


          <div className="flex justify-between w-1/2 mt-3">
            <a href="https://www.instagram.com/lumos_cit/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-black"
                size="2x"
              />

            </a>
            <a href="            https://www.linkedin.com/company/lumos-magazine/mycompany/?viewAsMember=true ">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-black"
                size="2x"
              />

            </a>
            
           <a href="https://twitter.com/LumosMagazine">
           <FontAwesomeIcon
              icon={faTwitter}
              className="text-black"
              size="2x"
            />

           </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
