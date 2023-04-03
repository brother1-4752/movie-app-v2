import { createContext, useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

export const MenuContext = createContext();
export const MovieContext = createContext();

function Category() {
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

function Header() {
  const [menuBtn, setMenuBtn] = useState(false);

  const handleMenuBtn = () => {
    setMenuBtn((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ menuBtn, setMenuBtn }}>
      <header>
        <div className="header__left">
          <button onClick={handleMenuBtn}>메뉴</button>
          <a href="/">홈</a>
        </div>
        <div className="header__mid">
          <form method="POST">
            <input type="text" name="header__search" />
            <button>검색</button>
          </form>
        </div>
        <div className="header__right">
          <a href="/login">로그인</a>
          <a href="/signup">회원가입</a>
          <button>다크모드</button>
        </div>
      </header>
      <Sidebar />
    </MenuContext.Provider>
  );
}

function Sidebar() {
  const { menuBtn } = useContext(MenuContext);
  return (
    <aside style={{ display: menuBtn ? "block" : "none" }}>
      <button>
        <a href="/sidebar/:sort_by">최신</a>
      </button>
      <button>
        <a href="/sidebar/:sort_by">인기</a>
      </button>
      <button>
        <a href="/sidebar/:sort_by">좋아요</a>
      </button>
    </aside>
  );
}

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((promise) => promise.json())
      .then((json) => setMovies(json.data.movies));
  }, []);

  console.log(`루트컴포넌트 API호출`, movies);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      <Header />
      <Category />
      <div>
        <Outlet />
      </div>
    </MovieContext.Provider>
  );
}
