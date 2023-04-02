export default function Card() {
  return (
    <div className="card">
      <div className="header">
        <div>
          <img src="https://via.placeholder.com/32x32" alt="" />
        </div>
        <div className="title">
          <div>
            <span>이름</span>
            <span>시간</span>
          </div>
          <div>장소</div>
        </div>
        <div>메뉴</div>
      </div>
      <div className="main">
        <ul>
          <li>
            <img src="https://via.placeholder.com/468x468" alt="" />
          </li>
        </ul>
      </div>
      <div className="footer">
        <div className="d-flex">
          <div style={{ flexGrow: 1 }}>
            <img src="https://via.placeholder.com/24x24" alt="" />
            <img src="https://via.placeholder.com/24x24" alt="" />
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
          <div>
            <img src="https://via.placeholder.com/24x24" alt="" />
          </div>
        </div>
        <div className="d-flex">
          <img src="https://via.placeholder.com/14x14" alt="" />
          <img src="https://via.placeholder.com/14x14" alt="" />
          <img src="https://via.placeholder.com/14x14" alt="" />
          <span>
            <b>scxx.__b</b>님 <b>외 55명</b>이 좋아합니다
          </span>
        </div>
        <div>
          <div>내용</div>
          <div>댓글모두보기</div>
          <div>
            <div>샘플댓글</div>
            <div>샘플댓글</div>
          </div>
        </div>
        <div>댓글 달기...</div>
      </div>
    </div>
  );
}
