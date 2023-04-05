import { createContext, useContext } from "react";

const MovieContext = createContext();

export default function Category() {
  const { movies, setMovies } = useContext(MovieContext);

  const handleCategory = () => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((promise) => promise.json())
      .then((json) => setMovies(json.data.movies));
  };

  console.log("카테고리 컴포넌트 API호출", movies);
  return (
    <button onClick={handleCategory}>
      <a href="/movies/1">카테고리</a>
    </button>
  );
}
