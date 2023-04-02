type StoryProfileProps = {
  name: string;
};

export function StoryProfile({ name }: StoryProfileProps) {
  return (
    <li className="story-profile">
      <div>
        <img src="https://via.placeholder.com/56x56" alt="" />
      </div>
      <span>{name}</span>
    </li>
  );
}
