import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../routes/home";
import { StyledLink } from "./header";
import styled from "styled-components";

export default function Category() {
  const { movies, setMovies } = useContext(MovieContext);

  return <CategoryBox></CategoryBox>;
}

const CategoryBox = styled.section``;
