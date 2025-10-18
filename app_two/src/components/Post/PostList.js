import { useFetch } from "../../hooks/useFetch";
import { PostDetail } from "./PostDetail";

function PostList({ id, userId, title, body }) {
  const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <p>{error}</p>;

  return (
    <ul className="post-list">
      <li>
        <strong>Id</strong>
      </li>
      <li>
        <strong>UserId</strong>
      </li>
      <li>
        <strong>Title</strong>
      </li>
      <li>
        <strong>Body</strong>
      </li>
      {data.map((post) => (
        <PostDetail {...post} />
      ))}
    </ul>
  );
}

export default PostList;
