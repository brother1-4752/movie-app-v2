import { useState, useEffect, createContext } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Movie from "./movie";

// const ApiInfo = [
//   {
//     label: "홈 렌더링될 때",
//     condition: "",
//   },
//   {
//     label: "검색할 때",
//     condition: "?쿼리 키워드",
//   },
//   {
//     label: "사이드바 메뉴 클릭할 때",
//     condition: "사이드바 메뉴 데이터셋값에 따라",
//   },
//   {
//     label: "카테고리 버튼 클릭할 때",
//     condition: "카테고리버튼 데이터셋값에 따라",
//   },
// ];

export const MovieContext = createContext();

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((promise) => promise.json())
      .then((json) => setMovies(json.data.movies));
  }, []);

  console.log("***HOME 렌더***", movies);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      <Header />
      <MovieList>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie_id={movie.id}
            mainImg={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
            year={movie.year}
            genres={movie.genres}
          />
        ))}
      </MovieList>
    </MovieContext.Provider>
  );
}

const MovieList = styled.ul`
  margin-top: 55px;
  height: 60vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
