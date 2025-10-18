import { useFetch } from "../../hooks/useFetch";
import { UserInfo } from "./UserInfo";

function UserList() {
  const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <p>{error}</p>;

  return (
    <ul className="user-list">
      <li>
        <strong>Id</strong>
      </li>
      <li>
        <strong>Name</strong>
      </li>
      <li>
        <strong>Username</strong>
      </li>
      <li>
        <strong>Email</strong>
      </li>
      <li>
        <strong>Phone</strong>
      </li>
      <li>
        <strong>Website</strong>
      </li>
      {data.map((user) => (
        <UserInfo key={user.id} {...user} />
      ))}
    </ul>
  );
}

export default UserList;
