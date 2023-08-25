import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Blocks from "editorjs-blocks-react-renderer";
import DriveImage from "./DriveImage";

function NewsPage() {
  const { news_id } = useParams(); // Access the news_id parameter from the route
  const [newsData, setNewsData] = useState(null);
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    // Fetch the news data based on the news_id parameter
    axios
      .get(import.meta.env.VITE_BACKEND_URL + `/api/news/${news_id}`)
      .then((res) => {
        setNewsData(res.data);

        // Fetch the corresponding author data
        axios
          .get(
            import.meta.env.VITE_BACKEND_URL + `/author/${res.data.author_id}`
          )
          .then((authorRes) => {
            setAuthorData(authorRes.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [news_id]);

  if (!newsData || !authorData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-zinc-800">
      <div className="p-5 lg:p-20">
        <h1 className="poppins-bold text-white">
          {newsData.createdAt.slice(0, 10)}
        </h1>
        <br></br>
        <h1 className="poppins-bold text-[50px] lg:text-[100px] text-white">
          {newsData.title}
        </h1>
        <br></br>
        <p className="text-white">
          {newsData && (
            <Blocks
              data={JSON.parse(newsData.content)}
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
        <div className="author-details text-white flex lg:flex-cols py-[5%] md:flex-row">
          <div className="">
            {/* <img
              src={authorData.profile_pic}
              className="lg:w-40 lg:h-40 md:w-20 md:h-20"
              alt="Author Profile"
            /> */}
            <DriveImage
              url={authorData.profile_pic}
              className="lg:w-40 lg:h-40 md:w-20 md:h-20"
            />
          </div>
          <div className=" px-[5%]">
            <p className="font-bold text-2xl my-2">NEWS by:</p>
            <p className="font-bold text-xl my-2"> {authorData.name}</p>
            <p className=" text-xl my-2">{authorData.department}</p>
            <p className="font-italic my-2 "> {authorData.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
