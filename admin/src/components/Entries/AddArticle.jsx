import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "../Editor/Editor";
import { toast } from "react-toastify";
import { showToast } from "../../services/showToast";

function AddArticle({ update }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");

  //
  const [allAuthors, setAllAuthors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      cover_img: image,
      content: JSON.stringify(content),
      tag: tag,
      author_id: parseInt(author),
    };
    console.log(data);

    if (update) {
      axios
        .put(import.meta.env.VITE_BACKEND_URL + `/api/article/${update}`, data)
        .then((res) => {
          console.log(res.data);
          console.log("Product Updated successfully");
          showToast(toast, "success", "Article Updated successfully");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/article", data)
        .then((res) => {
          console.log(res.data);
          console.log("Product Uploaded successfully");
          showToast(toast, "success", "Article Uploaded successfully");
        })
        .catch((err) => console.log(err));
    }
  }

  // UPDATING
  useEffect(() => {
    if (update) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + `/api/article/${update}`)
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          setTitle(data.title);
          setDescription(data.description);
          setImage(data.cover_img);
          setContent(JSON.parse(data.content));
          setTag(data.tag);
          setAuthor(data.author_id);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("NEW entry ARTICLEEE");
      setTitle("");
      setDescription("");
      setImage("");
      setContent("");
      setTag("");
      setAuthor("");
    }

    fetchAuthors();
  }, []);

  function fetchAuthors() {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/author").then((res) => {
      console.log(res.data);
      setAllAuthors(res.data);
    });
  }

  return (
    <div className={`flex mt-5`}>
      <div
        className={`bg-slate-900 h-[90vh] pb-10 basis-[100%] rounded-lg overflow-y-scroll`}
      >
        <h1 className="font-semibold text-gray-300 text-2xl p-4">
          Add Article
        </h1>
        <form className="p-10 relative" onSubmit={handleSubmit}>
          {/* 1 */}
          <div className="flex gap-4">
            <div className="basis-[50%] text-white">
              <label htmlFor="">
                Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={title}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg text-black"
                required={true}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="basis-[50%] text-white">
              <label htmlFor="">
                Cover Image URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={image}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg text-black"
                required={true}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          {/* 2 */}
          <div className="w-full mt-[5%] text-white">
            <label htmlFor="">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-[250px] text-black"
              placeholder="Type Here"
              value={description}
              required={true}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* 3 */}
          <div className="w-full mt-[5%] text-black">
            <label className="text-white" htmlFor="">
              Content <span className="text-red-600">*</span>
            </label>
            {update ? (
              content && <Editor setContent={setContent} content={content} />
            ) : (
              <Editor setContent={setContent} content={content} />
            )}
          </div>
          {/* 5 */}
          <div className="flex w-full mx-auto mt-[3%] gap-10 py-10">
            <div className="basis-[50%] text-white">
              <label htmlFor="">
                Tag <span className="text-red-600">*</span>
              </label>
              <select
                className="select select-bordered w-full text-black"
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                }}
              >
                <option disabled selected value="">
                  Select here
                </option>
                <option value="career">Career</option>
                <option value="studentHq">StudentHQ</option>
                <option value="xplore">Xplore</option>
                <option value="campusLife">Campus Life</option>
              </select>
            </div>
            <div className="basis-[50%] text-white">
              <label htmlFor="">
                Author <span className="text-red-600">*</span>
              </label>
              <select
                className="select select-bordered w-full text-black"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              >
                <option disabled selected value="">
                  Select here
                </option>
                {allAuthors.map((oneAuthor, i) => (
                  <option key={i} value={oneAuthor.author_id}>
                    {oneAuthor.name} - {oneAuthor.department}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="absolute bottom-2 right-4 btn btn-error"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddArticle;
