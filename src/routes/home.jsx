import { useState, useEffect, createContext } from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Movie from "./movie";
import Category from "../components/category";

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
      <Category />
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
