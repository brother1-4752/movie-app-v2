import Footer from "../components/footer";

export default function Login() {
  return (
    <>
      <h1>
        <a href="/">MOVIE CAT : 로그인</a>
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
          <button type="submit">로그인</button>
        </div>
      </form>
      <div>
        <div>비밀번호 찾기</div>
        <span>|</span>
        <div>아이디 찾기</div>
        <span>|</span>
        <a href="/signup">회원가입</a>
      </div>
      <Footer />
    </>
  );
}
