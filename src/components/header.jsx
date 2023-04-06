import { createContext, useState, useContext, useEffect } from "react";
import { MovieContext } from "../routes/home";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import styled from "styled-components";

export const MenuContext = createContext();

export default function Header() {
  const [menuBtn, setMenuBtn] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { setMovies } = useContext(MovieContext);

  const BASE_URL = "https://yts.mx/api/v2/list_movies.json?";

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}query_term=${searchQuery}`);
    const json = await response.json();
    setMovies(json.data.movies);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMenuBtn = () => {
    setMenuBtn((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ menuBtn, setMenuBtn }}>
      <HeaderContainer className={scrollPosition < 100 ? "" : "hide"}>
        <div className="header__left">
          <StyledButton onClick={handleMenuBtn}>메뉴</StyledButton>
          <StyledLink to="/">홈</StyledLink>
        </div>
        <div className="header__mid">
          <form onSubmit={handleSearch} method="POST">
            <SearchInput
              placeholder="   Search..."
              type="text"
              name="header__search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <StyledButton type="submit">검색</StyledButton>
          </form>
        </div>
        <div className="header__right">
          <StyledLink to="/login">로그인</StyledLink>
          <StyledLink to="/signup">회원가입</StyledLink>
        </div>
      </HeaderContainer>
      <Sidebar />
    </MenuContext.Provider>
  );
}

// export CSS
export const StyledLink = styled(Link)`
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  padding: 8px;
  text-decoration: none;
  color: black;
  border-radius: 7px;

  &:hover {
    -webkit-animation: text-shadow-drop-center 0.5s both;
    animation: text-shadow-drop-center 0.5s both;
  }
  @keyframes text-shadow-drop-center {
    0% {
      box-shadow: 0 0 0 rgb(70, 109, 96);
    }
    100% {
      box-shadow: 0 0 16px rgb(0, 81, 255);
    }
  }
  @-webkit-keyframes text-shadow-drop-center {
    0% {
      text-shadow: 0 0 0 rgb(70, 109, 96);
    }
    100% {
      text-shadow: 0 0 16px rgb(0, 81, 255);
    }
  }
`;

// header전용 CSS
const HeaderContainer = styled.header`
  width: 100%;
  height: 5vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  font-size: 14px;
  animation: slideIn 0.5s ease-in-out forwards;

  &.hide {
    top: -5vh;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 350px;
  height: 20px;
  border: 1px solid rgba(128, 128, 128, 0.4);
  border-radius: 5px;
  outline: none;
`;
