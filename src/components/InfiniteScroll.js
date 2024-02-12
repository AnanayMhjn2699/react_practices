//in the tutorial he used URLSearchParams to alter the page no but I have directly done it using
//string interpolation, both of methods have page as a state variable.
// `https://jsonplaceholder.typicode.com/posts?` +
//         new URLSearchParams({
//           _limit: 9,
//           _page: page,
//         })

import { useEffect } from "react";
import { useState } from "react";
import "../styles/InfiniteScrollLoading.css";

const SpinningLoader = () => {
  return <div className="spinner"></div>;
};

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const fetchedData = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const response = await fetchedData.json();
    setLoading(false);
    setData((data) => [...data, ...response]);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      if (
        document.documentElement.scrollTop + window.innerHeight + 2 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((page) => (page + 1) % 9);
      }
    });
  }, []);

  return (
    <div>
      {loading && <SpinningLoader />}
      {data?.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default InfiniteScroll;
