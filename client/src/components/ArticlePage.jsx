/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Blocks from "editorjs-blocks-react-renderer";

import axios from "axios";

import RelatedImage from "/Assets/Images/RelatedImage.svg";
import ArticlePoster from "/Assets/Images/ArticlePoster.svg";
import Editor from "./Editor";

function ArticlePage({ data, author, relatedArticles }) {
  // const router = useNavigate();
  return (
    <section className="h-full bg-black">
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto gap-8">
        <div className="basis-[60%] mt-[3%]">
          <h1 className="poppins-bold text-xl text-white">29, March 2023</h1>

          <p className="poppins-bold text-7xl mt-[2%] text-white">
            {data && data.title}
          </p>
          <div className="flex justify-between mt-[2%]">
            <p className=" text-white">
              By {author && author?.name} ( {author && author?.department} )
            </p>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-white hover:text-red-700"
            />
          </div>

          <p className="mt-[2%] poppins-regular text-2xl text-white">
            {data && data.description}
          </p>
          {/*  */}
          {data && (
            <Blocks
              data={JSON.parse(data.content)}
              config={{
                embed: {
                  className: "border-0",
                },
                header: {
                  className: "font-bold",
                },
                image: {
                  className: "w-full max-w-screen-md",
                  actionsClassNames: {
                    stretched: "w-full h-80 object-cover",
                    withBorder: "border border-2",
                    withBackground: "p-2",
                  },
                },
                list: {
                  className: "list-inside",
                },
                paragraph: {
                  className: "text-white poppins-regular leading-relaxed",
                  actionsClassNames: {
                    alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
                  },
                },
                quote: {
                  className: "py-3 px-5 italic font-serif",
                },
              }}
            />
          )}
          {/*  */}
          <div className="p-12 flex gap-10">
            <div className="basis-[40%] ">
              <img src={author && author.profile_pic} />
            </div>
            <div className="mt-[3%] basis-[50%]">
              <h1 className="poppins-bold text-white">
                {author && author.name} -{author && author.department}
              </h1>
              <p className="text-white">{author && author.bio}</p>
            </div>
          </div>
        </div>
        <div className="basis-[40%] ">
          <div className="flex justify-center">
            <img src={data && data.cover_img} className="p-10" />
          </div>
          <div className="flex justify-center items-center">
            <button className="btn border rounded-full btn-sm mx-[1%] text-white">
              StudentHQ
            </button>
            <button className="btn border rounded-full btn-sm mx-[1%] text-white">
              Spring Edition
            </button>
            <button className="btn border rounded-full btn-sm mx-[1%] text-white">
              Finance
            </button>
          </div>
          <br />
          <hr />
          <div className="px-2 mt-[3%]">
            <h1 className="poppins-bold text-3xl text-white">Related</h1>
            {relatedArticles.map((relatedArticle, index) => {
              return (
                <div
                  className="border border-solid w-full border-white "
                  key={index}
                >
                  <div className="flex gap-5 p-2">
                    <div className="basis-[70%] mt-[3%] h-auto lg:h-[16vh] flex flex-col justify-between p-1">
                      <div>
                        <p className="text-white font-bold text-justify leading-5">
                          {relatedArticle.title}
                        </p>
                      </div>
                      <div className="flex flex-col lg:flex-col gap-5 justify-between">
                        <p className="text-white">
                          {relatedArticle.createdAt.substring(0, 10)}
                        </p>
                        <p className="underline text-blue-500">
                          <Link to={"/article/" + relatedArticle.article_id}>
                            Click Here ˃˃
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center ">
                      <img src={relatedArticle.cover_img} className="" />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="border border-solid border-white ">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[54vh] lg:h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">
                      A Guide To Garner Your Galaxy of Thoughts
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={RelatedImage} />
                </div>
              </div>
            </div>
            <div className="border border-solid border-white">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[54vh] lg:h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">
                      A Guide To Garner Your Galaxy of Thoughts
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={RelatedImage} />
                </div>
              </div>
            </div>
            <div className="border border-solid border-white">
              <div className="flex gap-5 p-2">
                <div className="basis-[70%] mt-[3%] h-[54vh] lg:h-[16vh] flex flex-col justify-between p-1">
                  <div>
                    <p className="text-white">
                      A Guide To Garner Your Galaxy of Thoughts
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between">
                    <p className="text-white">29, March 2023</p>
                    <p className="underline text-blue-500">Click Here ˃˃</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={RelatedImage} />
                </div>
              </div>
            </div> */}
          </div>

          <br />
          <hr />

          <div className="px-20 py-10 flex flex-col justify-center items-center">
            <h1 className="poppins-bold text-3xl mt-[3%] text-white">Share</h1>
            <div className="flex mt-[3%] gap-7">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="px-[2%]"
              />
              <FontAwesomeIcon icon={faTwitter} size="2x" className="px-[2%]" />
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="px-[2%]"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                className="px-[2%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlePage;
