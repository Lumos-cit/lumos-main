import React from "react";
import Articles from "../Sections/Articles";
import News from "../Sections/News";

function Existing({ type, updateEntry }) {
  return (
    <div className="w-full mx-auto mt-5 pb-5 bg-slate-900 p-5 h-[90vh] rounded-2xl flex flex-col justify-between">
      {type == "Articles" ? (
        <Articles updateEntry={updateEntry} />
      ) : (
        <News updateEntry={updateEntry} />
      )}
    </div>
  );
}

export default Existing;
