import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import "./ComponentsHeader.css";
import useAuth from "../../../utils/hook/useAuth";
import { logout } from "../../../contexts/AuthContext/reducer";
import { FaSignInAlt } from "react-icons/fa";
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
    <Navbar
      expand="md"
      className="nav-header navbar navbar-expand-md navbar-light w-100"
    >
      <Row className=" align-items-center w-100">
        <Col
          md={5}
          style={{ height: "100px" }}
          className=" text-black  p-4 text-center"
        >
          <Navbar.Brand href="/" className="p-3 fw-bold" style={{ zIndex: 99 }}>
            <img
              src={PRE}
              width="50px"
              height="50px"
              alt="Logo"
              style={{ marginRight: "50px" }}
            />
            PRE MARITIAL 2025
          </Navbar.Brand>
        </Col>
        <Col
          md={7}
          style={{ height: "100px" }}
          className=" text-black p-3 text-center ms-auto"
        >
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="p-2 fw-bold ">
              <Nav>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>

                <NavDropdown title="Getting Married" id="nav-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product01"
                    className="nav-dropdown-item"
                  >
                    Pre Marriage Counselling
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product02"
                    className="nav-dropdown-item"
                  >
                    Marriage Readiness
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product03"
                    className="nav-dropdown-item"
                  >
                    Marriage Vows
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product04"
                    className="nav-dropdown-item"
                  >
                    Marriage Preparation
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Married Life" id="nav-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product01"
                    className="nav-dropdown-item"
                  >
                    Relationship
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product02"
                    className="nav-dropdown-item"
                  >
                    Love
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product03"
                    className="nav-dropdown-item"
                  >
                    Communication
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product04"
                    className="nav-dropdown-item"
                  >
                    Intimacy
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Married Life" id="nav-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product01"
                    className="nav-dropdown-item"
                  >
                    Relationship
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product02"
                    className="nav-dropdown-item"
                  >
                    Love
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product03"
                    className="nav-dropdown-item"
                  >
                    Communication
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product04"
                    className="nav-dropdown-item"
                  >
                    Intimacy
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Married Life" id="nav-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product01"
                    className="nav-dropdown-item"
                  >
                    Relationship
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product02"
                    className="nav-dropdown-item"
                  >
                    Love
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product03"
                    className="nav-dropdown-item"
                  >
                    Communication
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/product04"
                    className="nav-dropdown-item"
                  >
                    Intimacy
                  </NavDropdown.Item>
                </NavDropdown>
                {user ? (
                  <NavDropdown
                    title={`${user.firstName} ${user.lastName}`}
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="/profile"
                      className="nav-dropdown-item"
                    >
                      My Profile
                    </NavDropdown.Item>

                    <NavDropdown.Item className="nav-dropdown-item">
                      <Button
                        onClick={handleLogout}
                        className="btn btn-danger w-100 text-start"
                        style={{
                          border: "none",
                          background: "none",
                          padding: "5px 15px",
                        }}
                      >
                        Log out
                      </Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <div style={{ marginBottom: "10px" }}>
                    <button
                      onClick={() => navigate("/login")}
                      className="login-button"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <FaSignInAlt style={{ marginRight: "8px" }} />
                      LOGIN
                    </button>
                  </div>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Col>
      </Row>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
}

export default ComponentsHeader;
