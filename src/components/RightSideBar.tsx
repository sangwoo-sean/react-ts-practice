import { RecommendProfile } from "./RecommendProfile";

const users = [
  {
    id: 1,
    name: "seungyun_film",
    followers: ["rado_choon", "B"]
  },
  {
    id: 2,
    name: "ssskyun",
    followers: ["climb_dwannn", "B", "C", "C", "C", "C", "C", "C", "C"]
  },
  {
    id: 3,
    name: "hwang_climb",
    followers: ["boulderfriends"]
  }
];

export function RightSideBar() {
  return (
    <div id="right-side-bar">
      <div className="profile-layout">
        <div>
          <img src="https://via.placeholder.com/56x56" alt="" />
        </div>
        <div className="text">
          <div>
            <span>sangwoo.0106</span>
          </div>
          <div>
            <span>박상우</span>
          </div>
        </div>
        <div>
          <button>전환</button>
        </div>
      </div>
      <div>
        <div className="d-flex justify-between" style={{ margin: "1rem 0" }}>
          <span>회원님을 위한 추천</span>
          <span>모두보기</span>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <RecommendProfile name={user.name} followers={user.followers} />
            </li>
          ))}
        </ul>
      </div>
      <div className="footer">
        <div>
          <span>소개</span>
          <span>도움말</span>
          <span>홍보 센터</span>
          <span>API</span>
          <span>채용 정보</span>
          <span>개인정보처리방침</span>
          <span>약관</span>
          <span>위치</span>
          <span>언어</span>
          <span> Meta Verified</span>
        </div>
        <div>
          <span>© 2023 INSTAGRAM FROM META</span>
        </div>
      </div>
    </div>
  );
}
