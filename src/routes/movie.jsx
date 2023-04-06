import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../components/header";

export default function Movie({
  movie_id,
  mainImg,
  title,
  rating,
  year,
  genres,
}) {
  return (
    <MovieItem>
      <Poster src={mainImg} />
      <MovieDescriptions>
        <strong>{title}</strong>
        <small>평점 : {rating} / 10</small>
        <small>연도 : {year}</small>
        <GenreList>
          {genres.map((genre, index) => (
            <GenreItem key={index}>
              <small>{genre}</small>
            </GenreItem>
          ))}
        </GenreList>
        <StyledLink style={{ width: "70px" }} to={`/movies/${movie_id}`}>
          더보기
        </StyledLink>
      </MovieDescriptions>
    </MovieItem>
  );
}

/* 메인 */
const MovieItem = styled.li`
  display: flex;
  width: 19%;
  margin: 20px;
  padding: 5px;
  border: 3px solid rgba(32, 98, 241, 0.788);
  border-radius: 10px;
`;

const Poster = styled.img`
  width: 150px;
  height: 220px;
  border-radius: 10px;
  text-align: center;
`;

const MovieDescriptions = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  & > * {
    margin: 5px 0;
  }
`;

const GenreList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const GenreItem = styled.li`
  background-color: rgba(32, 98, 241, 0.788);
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 5px 0 0;
  font-size: 13px;
`;

// <------------------>

// import React, { useState } from "react";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
//     const data = await response.json();
//     setSearchResult(data);
//   };

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <header>
//       <form onSubmit={handleSearch} method="POST">
//         <input type="text" value={searchQuery} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {searchResult.map((result) => (
//           <li key={result.id}>{result.title}</li>
//         ))}
//       </ul>
//     </header>
//   );
// };

// export default Header;
