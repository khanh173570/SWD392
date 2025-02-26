import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../utils/hook/useAuth";
import { login } from "../../../contexts/AuthContext/reducer";
import { API_BASE_URL } from "../../../utils/constants/url";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const validate = () => {
    let result = true;
    if (userId.trim() === "") {
      result = false;
      toast.error("Error username !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (password.trim() === "") {
      result = false;
      toast.error("Error password !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return result;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/user_request/login`,
          { userId, password },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = response.data;
        dispatch(
          login({
            user: data,
            isAuthenticated: true,
          })
        );
        localStorage.setItem("user", JSON.stringify(data));
        if (data?.role) {
          const rolePaths = {
            customer: "/customer",
            therapist: "/therapist",
            admin: "/admin",
          };
          navigate(rolePaths[data.role] || "/customer");
        } else {
          setError("Invalid role");
        }
      } catch (error) {
        console.error("Invalid username or password", error);
        setError("Invalid username or password");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="form-container d-flex justify-content-center align-items-center">
        <form
          className="form-row my-5 p-5"
          style={{ width: "600px", boxShadow: "rgb(0 0 0 / 16%) 1px 1px 10px" }}
          onSubmit={handleOnSubmit}
        >
          <div className="d-flex justify-content-center mb-3">
            <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
              WELCOME TO WEBSITE HEREs
            </h1>
          </div>
          <div className="form-group mt-3">
            <div
              htmlFor="userId"
              className="d-flex justify-content-start fw-bold"
            >
              User ID<span style={{ color: "red" }}>*</span>
            </div>
            <input
              id="userId"
              type="text"
              placeholder="Enter your username"
              name="userId"
              value={userId}
              className="form-control mt-1 py-2"
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <div className="form-password d-flex justify-content-between">
              <label
                htmlFor="password"
                className="d-flex justify-content-start fw-bold"
              >
                Password<span style={{ color: "red" }}>*</span>
              </label>
              <div className="form-forgot">
                <NavLink to="/change-pass" className="link-secondary">
                  Forgot password?
                </NavLink>
              </div>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              className="form-control mt-1 py-2"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}

          <div className="form-button d-grid mt-4 text-center">
            <button
              type="submit"
              className="btn fw-bold py-2"
              style={{
                backgroundColor: "#CCFBF0",
                color: "#000",
                transition: "background-color 1s ease, color 2s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#66FF33";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#CCFBF0";
                e.target.style.color = "#000";
              }}
            >
              Login
            </button>
          </div>
          <hr
            style={{ background: "#DDE1DF", height: "2px", marginTop: "1.5em" }}
          />
          <p className="text-center mt-4">
            You do not have an account?{" "}
            <NavLink to="/signup" className="link-secondary">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
