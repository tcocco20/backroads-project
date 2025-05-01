import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";

import logo from "../images/logo.svg";

import Icons from "./Icons";

export default function MainNav() {
  return (
    <Navbar className="shadow-lg">
      <NavbarBrand>
        <img alt="Backroads Logo" src={logo} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="hover:text-cyan-400/70"
            color="foreground"
            href="#home"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#links">
            Tours
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Icons />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
