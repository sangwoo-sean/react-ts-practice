type RecommendProfileProps = {
  name: string;
  followers: string[];
};

export function RecommendProfile({ name, followers }: RecommendProfileProps) {
  const textContent = followers.length > 1 ? `${followers[0]}님 외 ${followers.length - 1}명` : followers[0] + "님";

  return (
    <div className="profile-layout" id="recommend">
      <div>
        <img src="https://via.placeholder.com/32x32" alt="" />
      </div>
      <div className="text">
        <div>
          <span>{name}</span>
        </div>
        <div className="desc">
          <span>{textContent}이 팔로우합니다</span>
        </div>
      </div>
      <div>
        <button>팔로우</button>
      </div>
    </div>
  );
}
