import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Existing from "./Entries/Existing";
import { useSelector } from "react-redux";
import AddArticle from "./Entries/AddArticle";
import AddNews from "./Entries/AddNews";

function Entry() {
  const [newEntry, setNewEntry] = useState(false);
  const [update, setUpdate] = useState(null);
  const type = useSelector((state) => state.product.contentType);

  function createNewEntry() {
    setNewEntry(true);
  }
  function onBack() {
    setNewEntry(false);
    setUpdate(null);
  }

  function updateEntry(id) {
    setUpdate(id);
    setNewEntry(true);
  }

  return (
    <div className="p-5">
      <div className="h-[10vh]">
        <button
          className={`font-bold text-indigo-500 ${
            newEntry ? "block" : "hidden"
          }`}
          onClick={onBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold text-black">{type}</h1>
          <div>
            {!newEntry ? (
              <button
                className="btn bg-indigo-600 text-white focus:hidden"
                id="new"
                onClick={createNewEntry}
              >
                <span className="font-black"> + </span>Create New Entry
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {newEntry ? (
        type == "Articles" ? (
          <AddArticle update={update} />
        ) : (
          <AddNews update={update} />
        )
      ) : (
        <Existing type={type} updateEntry={updateEntry} />
      )}
    </div>
  );
}

export default Entry;
