import { StoryProfile } from "./StoryProfile";

const stories = [
  {
    key: 1,
    name: "lan_isw"
  },
  {
    key: 2,
    name: "wall_d_of"
  },
  {
    key: 3,
    name: "hoeunho"
  },
  {
    key: 4,
    name: "leedo_ss"
  }
  //   {
  //     key: 5,
  //     name: "lan_isw"
  //   },
  //   {
  //     key: 6,
  //     name: "wall_d_of"
  //   },
  //   {
  //     key: 7,
  //     name: "hoeunho"
  //   },
  //   {
  //     key: 8,
  //     name: "leedo_ss"
  //   }
];

export function Story() {
  return (
    <ul id="story">
      {stories.map((story) => (
        <StoryProfile key={story.key} name={story.name} />
      ))}
    </ul>
  );
}
