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
import Logo from "../../utils/smiley.png";

const links = [
  { href: "/", text: "About Me" },
  { href: "/resume", text: "Resume" },
  { href: "/portfolio", text: "Portfolio" },
];

const CreateNavItem = ({ href, text }) => (
  <NavItem className="mx-4">
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
        <NavbarBrand href="/">
          <img src={Logo} />
          Xuejin Gao
        </NavbarBrand>
        <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar className="ml-auto  mr-4">
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
