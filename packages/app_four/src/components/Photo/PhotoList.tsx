import { useFetch } from "../../hooks/useFetch";
import { Photo } from "./Photo";
import "./PhotoList.css";

export default function PhotoList() {
  const { data, error, isLoading } = useFetch("https://jsonplaceholder.typicode.com/photos");

  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <p>{error}</p>;

  return (
    <ul className="photo-list">
      <li>
        <strong>Image</strong>
      </li>
      <li>
        <strong>Id</strong>
      </li>
      <li>
        <strong>AlbumId</strong>
      </li>
      <li>
        <strong>Title</strong>
      </li>
      <li>
        <strong>Url</strong>
      </li>
      {data.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </ul>
  );
}
