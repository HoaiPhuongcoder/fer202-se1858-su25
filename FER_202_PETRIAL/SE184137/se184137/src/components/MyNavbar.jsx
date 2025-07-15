import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router";

function MyNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand>
            <NavLink className="nav-link" to="/">
              SE184137
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>

              <NavLink className="nav-link" to="/SE184137/AllCards">
                AllCards
              </NavLink>

              <NavLink className="nav-link" to="/SE184137/UnavailableCards">
                UnAvailableCards
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default MyNavbar;
