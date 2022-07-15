import "./index.css";

const ProfileItem = (props) => {
  const { details, deleteId } = props;
  const { id, role, email, name } = details;
  const remove = () => {
    deleteId(id);
  };
  return (
    <li className="profileItem">
      <div className="d">
        <p>{name}</p>
        <p>{role}</p>
      </div>
      <p>{email}</p>
      <button type="button" onClick={remove}>
        Delete
      </button>
    </li>
  );
};

export default ProfileItem;
