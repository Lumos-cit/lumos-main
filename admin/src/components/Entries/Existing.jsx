import React from "react";
import Articles from "../Sections/Articles";
import News from "../Sections/News";
import Authors from "../Sections/Author";

function Existing({ type, updateEntry }) {
  return (
    <div className="w-full mx-auto mt-5 pb-5 bg-slate-900 p-5 h-[90vh] rounded-2xl flex flex-col justify-between">
      <ShowExistingEntries type={type} updateEntry={updateEntry}/>
    </div>
  );
}

function ShowExistingEntries({ type, updateEntry }) {
  if (type == "Authors") {
    return <Authors updateEntry={updateEntry} />;
  } else if (type == "News") {
    return <News updateEntry={updateEntry} />;
  } else {
    return <Articles updateEntry={updateEntry} />;
  }
}

export default Existing;
