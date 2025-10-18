export function PostDetail({ id, userId, title, body }) {
  return (
    <>
      <li>
        <span>{id}</span>
      </li>
      <li>
        <span>{userId}</span>
      </li>
      <li className="title">
        <span>{title}</span>
      </li>
      <li className="body">
        <span>{body}</span>
      </li>
    </>
  );
}
