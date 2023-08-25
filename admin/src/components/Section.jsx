import React from "react";
import AddArticle from "./Entries/AddArticle";
import AddNews from "./Entries/AddNews";
import AddAuthor from "./Entries/AddAuthor";

function Section({ type, update }) {
  if (type == "Authors") {
    return <AddAuthor update={update} />;
  } else if (type == "News") {
    return <AddNews update={update} />;
  } else return <AddArticle update={update} />;
}

export default Section;
