interface GalleryProps {
  id: number;
  userId: number;
  title: string;
}

export function Gallery({ id, userId, title }: GalleryProps) {
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
    </>
  );
}
