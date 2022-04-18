import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  return <div>{user.login}</div>;
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
