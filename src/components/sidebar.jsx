import { useContext, useEffect, useState } from "react";
import { MenuContext } from "./header";
import styled from "styled-components";
import { StyledLink } from "./header";
import { MovieContext } from "../routes/home";

export default function Sidebar() {
  const { menuBtn } = useContext(MenuContext);
  const { movies, setMovies } = useContext(MovieContext);
  const [apiOption, setApiOption] = useState("");

  const BASE_URL = "https://yts.mx/api/v2/list_movies.json?";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`${BASE_URL}${apiOption}`);
      const json = await response.json();
      setMovies(json.data.movies);
    };
    fetchMovies();
  }, [apiOption]);

  const handleSidebarBtn = async (e) => {
    setApiOption(e.currentTarget.dataset.opt);
    console.log(`***${e.currentTarget.dataset.label} 렌더***`, movies);
  };

  return (
    // 잘못 만들었네..버튼 안에 필요없는 Link 컴포넌트들 있음
    <Aside style={{ display: menuBtn ? "block" : "none" }}>
      <SidebarButton
        onClick={handleSidebarBtn}
        data-opt="sort_by=year"
        data-label="최신"
      >
        <StyledLink>최신</StyledLink>
      </SidebarButton>
      <SidebarButton
        onClick={handleSidebarBtn}
        data-opt="sort_by=rating"
        data-label="인기"
      >
        <StyledLink>인기</StyledLink>
      </SidebarButton>
      <SidebarButton
        onClick={handleSidebarBtn}
        data-opt="sort_by=like_count"
        data-label="좋아요"
      >
        <StyledLink>좋아요</StyledLink>
      </SidebarButton>
    </Aside>
  );
}

const Aside = styled.aside`
  width: 70px;
  height: 94.9vh;
  position: fixed;
  left: 0;
  top: 49px;
  border-right: 1px solid rgba(128, 128, 128, 0.1);
  background-color: rgba(128, 128, 128, 0.12);
  -webkit-animation: scale-in-hor-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-hor-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
`;

const SidebarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 15px;
`;
