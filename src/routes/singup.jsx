import Footer from "../components/footer";

export default function Signup() {
  return (
    <>
      <h1>
        <a href="/">MOVIE CAT : 회원가입</a>
      </h1>
      <form method="POST">
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
        <div>
          <div>
            <input type="checkbox" name="" id="" />
            <span>로그인 상태 유지</span>
          </div>
          <div>
            <span>IP보안</span>
            <button>토글버튼</button>
          </div>
          <button type="submit">회원가입</button>
        </div>
      </form>
      <div>
        <div>비밀번호 찾기</div>
        <span>|</span>
        <div>아이디 찾기</div>
        <span>|</span>
        <div>로그인</div>
      </div>
      <Footer />
    </>
  );
}
