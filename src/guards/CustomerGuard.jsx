import PropTypes from "prop-types";
import useAuth from "../utils/hook/useAuth";
import { CUSTOMER } from "../utils/constants/role";

export const CustomerGuard = ({ children }) => {
  const { user } = useAuth();
  console.log(user, CUSTOMER);

  if (user && user.role !== CUSTOMER) {
    return <div>Not found</div>;
  }

  return children;
};

// Define prop types
CustomerGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerGuard;
