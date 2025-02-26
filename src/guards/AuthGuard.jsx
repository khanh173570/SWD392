import PropTypes from "prop-types";
import useAuth from "../utils/hook/useAuth";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!isInitialized) {
    return null;
  }

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthGuard;
