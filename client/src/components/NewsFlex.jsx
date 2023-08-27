import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import Blocks from "editorjs-blocks-react-renderer";

function NewsFlex({ news }) {
  const navigate = useNavigate();

  const handleNewsClick = (news_id) => {
    navigate(`/news/${news_id}`);
  };

  return (
    <div className="flex flex-col">
      {news.map((newsItem, index) => {
        return (
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start w-4/5 mx-auto border border-solid border-white my-[2%] bg-black shadow-md shadow-white cursor-pointer"
            key={index}
            onClick={() => handleNewsClick(newsItem.news_id)}
          >
            <div className="basis-[90%] p-16">
              <h1 className="poppins-bold my-[2%] text-2xl text-white">
                {newsItem.title.substring(0, 70)}...
              </h1>
              <p className="poppins-regular text-white">
                {newsItem && (
                  <Blocks
                    data={JSON.parse(newsItem.content)}
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
              </p>
            </div>
            <div className="basis-[10%] flex flex-col justify-between items-center gap-20 h-3/4 my-auto ">
              <p className="text-white">
                {newsItem.createdAt.substring(0, 10)}
              </p>
              <p className="text-white">
                Read More
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFlex;
