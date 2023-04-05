import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Category from "../components/category";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((promise) => promise.json())
      .then((json) => setMovies(json.data.movies));
  }, []);

  console.log(`루트컴포넌트 API호출`, movies);

  return (
    // 여기에 MovieContext가 있네...컴포넌트 헤더, 카테고리, 사이드바 다 분리시켰는데... 고민해보자
    <MovieContext.Provider value={{ movies, setMovies }}>
      <Header />
      <Category />
      <div>
        <Outlet />
      </div>
    </MovieContext.Provider>
  );
}
