import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { showToast } from "../../services/showToast";

function AddAuthor({ update }) {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      department: dept,
      bio: bio,
      profile_pic: profile,
    };
    console.log(data);

    if (update) {
      axios
        .put(import.meta.env.VITE_BACKEND_URL + `/author/${update}`, data)
        .then((res) => {
          console.log(res.data);
          console.log("Author Updated successfully");
          showToast(toast, "success", "Author Updated successfully");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/author", data)
        .then((res) => {
          console.log(res.data);
          console.log("Author Uploaded successfully");
          showToast(toast, "success", "Author Uploaded successfully");
        })
        .catch((err) => console.log(err));
    }
  }

  // UPDATING
  useEffect(() => {
    if (update) {
      console.log("Update entry Author");
      axios
        .get(import.meta.env.VITE_BACKEND_URL + `/author/${update}`)
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          setName(data.name);
          setDept(data.department);
          setBio(data.bio);
          setProfile(data.profile_pic);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("NEW entry AUTHOR");
      setName("");
      setDept("");
      setBio("");
      setProfile("");
    }
  }, []);

  return (
    <div className={`flex mt-5`}>
      <div
        className={`bg-slate-900 h-[90vh] pb-10 basis-[100%] rounded-lg overflow-y-scroll`}
      >
        <h1 className="font-semibold text-gray-300 text-2xl p-4">Add News</h1>
        <form className="h-[80%] p-10 relative" onSubmit={handleSubmit}>
          {/* 1 */}
          <div className="flex gap-4">
            <div className="basis-[50%] text-white">
              <label htmlFor="">
                Author Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={name}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg text-white"
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="basis-[50%] text-white">
              <label htmlFor="">
                Profile URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={profile}
                placeholder="Type here"
                className="input input-bordered w-full max-w-lg text-white"
                required={true}
                onChange={(e) => setProfile(e.target.value)}
              />
            </div>
          </div>
          {/* 2 */}
          <div className="w-full mt-[5%] text-white">
            <label htmlFor="">
              Deptartment <span className="text-red-600">*</span>
            </label>
            <br />
            <input
              type="text"
              value={dept}
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg text-white"
              required={true}
              onChange={(e) => setDept(e.target.value)}
            />
          </div>
          {/* 3 */}
          <div className="w-full mt-[5%] text-white">
            <label htmlFor="">
              Bio <span className="text-red-600">*</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-[150px] text-white"
              placeholder="Type Here"
              value={bio}
              required={true}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="absolute bottom-12 right-4 btn btn-error"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAuthor;
