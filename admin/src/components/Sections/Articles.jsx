import React from "react";
import { useEffect, useState } from "react";
import { getArticles, getNews } from "../../services/getProducts";
import ResponsivePagination from "react-responsive-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "react-responsive-pagination/themes/classic.css";
import "../../css/pagination.css";

function Articles({ updateEntry }) {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getArticles(setData, setTotalPage, currentPage);
  }, []);

  function pageChanging(val) {
    setCurrentPage(val);
    getArticles(setData, setTotalPage, val);
  }

  return (
    <div className="w-full mx-auto mt-5 pb-5 bg-slate-900 p-5 h-[90vh] rounded-2xl flex flex-col justify-between">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="py-2 text-white">ID</th>
            <th className="py-2 text-white">Date</th>
            <th className="py-2 text-white">Title</th>
            <th className="py-2 text-white">Description</th>
            <th className="py-2 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, i) => (
              <ArticleSelection
                key={i}
                item={item}
                updateEntry={updateEntry}
                index={i + 1}
                currentPage={currentPage}
              />
            ))}
        </tbody>
      </table>
      <div className="pb-10">
        <ResponsivePagination
          current={currentPage}
          total={totalPage}
          onPageChange={(val) => pageChanging(val)}
        />
      </div>
    </div>
  );
}

function ArticleSelection({ item, updateEntry, index, currentPage }) {
  const [showDelete, setShowDelete] = useState(null);
  function handleUpdate(id) {
    console.log(id);
    updateEntry(id);
  }

  function deleteProduct(id) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL + `/api/article/${id}`)
      .then((response) => {
        console.log("Deleted successfully", response.data);
        setShowDelete(null);
      })
      .catch((error) => {
        console.error("Error in deleting the product", error.message);
      });
    console.log(id + " will be deleted");
  }
  const limit = 10;

  return (
    <tr key={item.id} className="text-center">
      <td className="border-t border-gray-200 py-2">
        {index + (currentPage - 1) * limit}
      </td>
      <td className="border-t border-gray-200 py-2 max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap">
        {item.createdAt && item?.createdAt.substring(0, 10)}
      </td>
      <td className="border-t border-gray-200 py-2">
        {item.title && item?.title.substring(0, 20)}...
      </td>
      <td className="border-t border-gray-200 py-2 text-ellipsis">
        {item.description && item?.description.substring(0, 30)}...
      </td>
      <td className="border-t border-gray-200 py-2 flex justify-center space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleUpdate(item.article_id)}
        >
          Update
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setShowDelete(item.article_id);
          }}
        >
          Delete
        </button>
      </td>
      {showDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute bg-gray-800 opacity-50 inset-0"></div>
          <div className="bg-white px-8 py-10 rounded shadow-lg z-10 relative">
            <button
              className="absolute top-0 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mt-4 rounded"
              onClick={() => setShowDelete(null)}
            >
              <FontAwesomeIcon
                icon={faClose}
                size="lg"
                className="hover:cursor-pointer text-white"
              />
            </button>
            <h2 className="text-xl text-gray-800 font-bold mb-4 mt-2">
              Do you want to delete this Article ?
            </h2>
            <button
              className="btn btn-error"
              onClick={() => deleteProduct(showDelete)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </tr>
  );
}

export default Articles;
