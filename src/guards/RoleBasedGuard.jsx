import PropTypes from "prop-types";
import useAuth from "../utils/hook/useAuth";

export const RoleBasedGuard = ({ children, roles }) => {
  const { user } = useAuth();

  console.log(!roles.includes(user?.role));

  if (!roles.includes(user?.role)) {
    return <div>Not found</div>;
  }

  return children;
};

// Define prop types
RoleBasedGuard.propTypes = {
  children: PropTypes.node.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure roles is an array of strings
};

export default RoleBasedGuard;
