import { createContext, useState } from "react";
import Sidebar from "./sidebar";

const MenuContext = createContext();

export default function Header() {
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
      <Sidebar value={MenuContext} />
    </MenuContext.Provider>
  );
}
