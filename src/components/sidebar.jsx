import { useContext } from "react";

export default function Sidebar({ MenuContext, menuBtn }) {
  console.log(MenuContext);
  //   const { menuBtn } = useContext(MenuContext);
  //   console.log(menuBtn);
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
