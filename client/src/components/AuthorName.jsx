import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AuthorName = ({ authorId }) => {
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchAuthors();
  }, []);

  function fetchAuthors() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/author/" + authorId)
      .then((res) => {
        setAuthor(res.data);
      });
  }
  return (
    // <div>AuthorName</div>
    <p className="text-[8px] uppercase text-[#FFC600] md:text-[12px] md:mt-7">
      BY {author && author.name} , {author && author.department}
    </p>
  );
};

export default AuthorName;
