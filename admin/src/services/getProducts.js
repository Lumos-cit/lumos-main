import axios from "axios";

const limit = 10;

export function getArticles(setData, setTotalPage, currentPage) {
  const offset = limit * (currentPage - 1);

  axios
    .get(
      import.meta.env.VITE_BACKEND_URL +
        `/api/articles?offset=${offset}&limit=${limit}`
    )
    .then((res) => {
      console.log(res.data);
      const totalPage = Math.ceil(res.data.meta.total / limit);
      setTotalPage(totalPage);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
      const error = err.response.data.error.message;
      //   showToast(toast, "error", error);
    });
}

export function getNews(setData, setTotalPage, currentPage) {
  const offset = limit * (currentPage - 1);

  axios
    .get(
      import.meta.env.VITE_BACKEND_URL +
        `/api/news?offset=${offset}&limit=${limit}`
    )
    .then((res) => {
      console.log(res.data);
      const totalPage = Math.ceil(res.data.meta.total / limit);
      setTotalPage(totalPage);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
      const error = err.response.data.error.message;
      //   showToast(toast, "error", error);
    });
}
