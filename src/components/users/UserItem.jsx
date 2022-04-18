import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url } }) => {
  return <div>{login}</div>;
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
