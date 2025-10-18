export const UserInfo = ({ id, name, username, email, phone, website }) => {
  return (
    <>
      <li>
        <span>{id}</span>
      </li>
      <li>
        <span>{name}</span>
      </li>
      <li>
        <span>{username}</span>
      </li>
      <li>
        <span>{email}</span>
      </li>
      <li>
        <span>{phone}</span>
      </li>
      <li>
        <span>
          <a target="_blank" href={`http://${website}`} rel="noreferrer">
            {website}
          </a>
        </span>
      </li>
    </>
  );
};
