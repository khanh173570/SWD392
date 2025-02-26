import PropTypes from "prop-types";
import useAuth from "../utils/hook/useAuth";
import { Navigate } from "react-router-dom";

export const GuestGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  if (!isInitialized) {
    return null;
  }

  return children;
};

// Define prop types
GuestGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestGuard;
