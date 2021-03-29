import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/styles'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import Logo from "../../utils/circled-x.png";

const links = [
  { href: "/", text: "About Me" },
  { href: "/resume", text: "Resume" },
  { href: "/portfolio", text: "Portfolio" },
];

const useStyles = makeStyles({
  title: {
    backgroundColor: "#fff",
    color: "#23260E"
  },
  icon: {
    width: "55px"
  }
});

const CreateNavItem = ({ href, text }) => (
  <NavItem className="mx-4">
    <Link to={href} className="nav-link">
      {text}{" "}
    </Link>
  </NavItem>
);

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const styleClasses = useStyles();

  return (
    <>
      <Navbar color="" className="p-3" expand="md">
        <NavbarBrand href="/">
          <img className={styleClasses.icon} src={Logo} alt="test" />
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
