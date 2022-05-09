import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <div class="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}