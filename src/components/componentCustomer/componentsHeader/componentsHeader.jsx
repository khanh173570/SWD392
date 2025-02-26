import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./ComponentsHeader.css";
import useAuth from "../../../utils/hook/useAuth";
import { logout } from "../../../contexts/AuthContext/reducer";
import { FaUser } from "react-icons/fa"; // Đổi sang icon người dùng
import { FaBars } from "react-icons/fa";
import PRE from "../../../assets/asstetsCustomer/react.svg";

function ComponentsHeader() {
  const navigate = useNavigate();
  const { user, dispatch } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Navbar expand="md" className="nav-header navbar-light w-100">
      <Container>
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center">
          <img
            src={PRE}
            width="50px"
            height="50px"
            alt="Logo"
            className="me-3"
          />
          PRE MARITIAL 2025
        </Navbar.Brand>

        {/* Nút mở menu trên mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <NavLink to="/" className="nav-link">
              Home
            </NavLink> */}

            <NavDropdown title="Getting Married" id="nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/product01">
                Pre Marriage Counselling
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product02">
                Marriage Readiness
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product03">
                Marriage Vows
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product04">
                Marriage Preparation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Getting Married" id="nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/product01">
                Pre Marriage Counselling
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product02">
                Marriage Readiness
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product03">
                Marriage Vows
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product04">
                Marriage Preparation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Getting Married" id="nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/product01">
                Pre Marriage Counselling
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product02">
                Marriage Readiness
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product03">
                Marriage Vows
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product04">
                Marriage Preparation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Getting Married" id="nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/product01">
                Pre Marriage Counselling
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product02">
                Marriage Readiness
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product03">
                Marriage Vows
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product04">
                Marriage Preparation
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown User */}
            <NavDropdown
              title={<FaUser size={20} />}
              id="user-dropdown"
              align="end"
            >
              {user ? (
                <>
                  <NavDropdown.Item as={NavLink} to="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Log out
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item onClick={() => navigate("/login")}>
                  Login
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ComponentsHeader;
