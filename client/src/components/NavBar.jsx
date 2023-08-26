import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "/assets/Images/logoYellow.svg";
import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  const router = useNavigate();

  return (
    <div className="bg-[#0C0C0C] flex justify-between p-2 z-50 relative ">
      <div className="basis-1/4">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className=" drawer-button hover:cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                className="text-white ml-4"
              />{" "}
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>

            <ul className="menu p-4 w-80 h-full bg-[#979797] text-base-content overflow-auto">
              <li>
                <div className="flex bg-transparent justify-end h-0">
                  <button
                    type="button"
                    className="btn btn-ghost text-white btn-sm w-1/4 "
                  >
                    <label htmlFor="my-drawer">
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="basis-1/4 "
                        size="2x"
                      />
                    </label>
                  </button>
                </div>
              </li>
              <li>
                <Link className="text-black poppins-regular text-lg hover:text-black">
                  {" "}
                  Sections
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black"
                  to={"/career"}
                >
                  {" "}
                  Career
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black"
                  to={"/studenthq"}
                >
                  {" "}
                  Student HQ
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black"
                  to={"/xplore"}
                >
                  {" "}
                  Xplore
                </Link>
              </li>
              <hr />
              {/* <li>
              <Link className="text-black poppins-regular text-xl ml-2 hover:text-black"> Campus Life</Link>
              </li> */}
              <hr />
              <li>
                <Link
                  className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black"
                  to={"/news"}
                >
                  {" "}
                  News
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black"
                  to={"/campuslife"}
                >
                  {" "}
                  CampusLife
                </Link>
              </li>
              <hr />
              <li>
                <a
                  className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black"
                  href="https://lumos-web-sigma.vercel.app/"
                  target="_blank"
                >
                  {" "}
                  Register Now
                </a>
              </li>
              <hr />
              {/* <li>
                <a className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black">
                  {" "}
                  Placements
                </a>
              </li>
              <hr /> */}
              {/* <li>
                <a className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black">
                  {" "}
                  SpotLight
                </a>
              </li>
              <hr />
              <li>
                <a className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black">
                  {" "}
                  PodCast
                </a>
              </li>
              <hr /> */}
              {/* <li>
                <a className="text-black poppins-regular text-lg hover:text-black">
                  {" "}
                  Lumos
                </a>
              </li>
              <hr />
              <li>
                <a className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black">
                  {" "}
                  About
                </a>
              </li>
              <hr />
              <li>
                <a className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black">
                  {" "}
                  Authors
                </a>
              </li>
              <hr />
              <li>
                <a className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black">
                  {" "}
                  Previous Editions
                </a>
              </li>
              <hr />
              <li>
                <a className="text-black poppins-regular text-sm lg:text-xl ml-2 hover:text-black">
                  {" "}
                  Join the Club
                </a>
              </li>
              <hr /> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            onClick={() => router("/")}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="basis-1/4">
        <div className="flex justify-end items-end">
          <a href="https://lumos-web-sigma.vercel.app/" target="_blank">
            <button className="btn btn-outline btn-warning btn-sm mr-4 hidden lg:block">
              Register Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
