import { IPhoto } from "../../models/Photo";

export function Photo({ id, albumId, title, url, thumbnailUrl }: IPhoto) {
  return (
    <>
      {/* <li className="image">
        <img src={thumbnailUrl} alt={title} />
      </li> */}
      <li>
        <span>{id}</span>
      </li>
      <li>
        <span>{albumId}</span>
      </li>
      <li className="title">
        <span>{title}</span>
      </li>
      <li className="url">
        <span>{url}</span>
      </li>
    </>
  );
}
