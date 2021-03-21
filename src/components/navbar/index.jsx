import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const links = [
  { href: "/", text: "Home" },
  { href: "/resume", text: "Resume" },
]

const CreateNavItem = ({ href, text }) => (
  <NavItem>
    <Link to={href} className="nav-link">
      {text}{" "}
    </Link>
  </NavItem>
);

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Navbar color="dark" className="p-3" dark expand="md">
        <NavbarBrand href="/">Xuejin Gao</NavbarBrand>
        <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            {links.map((item, i) => (
              <CreateNavItem {...item} key={i} />
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar
