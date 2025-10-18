import { useFetch } from "../../hooks/useFetch";
import { Gallery } from "./Galery";
import "./GalleryList.css";

export default function GalleryList() {
  const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/albums");

  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <p>{error}</p>;

  return (
    <ul className="gallery-list">
      <li>
        <strong>Id</strong>
      </li>
      <li>
        <strong>UserId</strong>
      </li>
      <li>
        <strong>Title</strong>
      </li>
      {data.map((album) => (
        <Gallery key={album.id} {...album} />
      ))}
    </ul>
  );
}
