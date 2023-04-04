import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoginState = () => {
  // 현재 수동으로 로그인된 상태로 고정함. 추후 로그인 여부에 따라 바꿔야함.
  const [logged, setLogged] = useState(true);
  const navigate = useNavigate();

  const login = () => setLogged(true);
  const logout = () => setLogged(false);

  const routeToLoginPage = () => {
    //로그인 페이지로 라우팅하는 코드
    useEffect(() => {
      navigate("/login");
    }, []);
  };

  return { logged, login, logout, routeToLoginPage };
};

/* 인증박스가 필요한 이유 : 배달의 민족을 떠올려보자.
  인증박스에서 검증한 데이터를 바탕으로, 어떤 화면과 기능들에 대해 제어할 수 있는지를 권한 부여할 수 있다.
  유저 : 
  사장님 : 
  관리자 : 

  1. User
  : Profile, 리뷰관리, 쿠폰, 주문내역 등등
  2. 사장님
  : 메뉴 등록
  : 메뉴 가격 설정
  : 쿠폰 등록 여부
  : 배달 가능한 지역에 대한 정보제공페이지
  : 유저 결제에 대해 자신이 받을 계좌나

*/

export default function Authorization({ children }) {
  const { logged, routeToLoginPage } = useLoginState();

  if (!logged) {
    routeToLoginPage();
  }

  return <>{children}</>;
}
