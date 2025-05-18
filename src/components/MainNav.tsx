import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";

import logo from "../images/logo.svg";

import Icons from "./Icons";

export default function MainNav() {
  return (
    <Navbar className="fixed shadow-lg" isBlurred={false}>
      <NavbarBrand>
        <img alt="Backroads Logo" src={logo} />
      </NavbarBrand>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="hover:text-primaryBlue-500 transition-colors duration-300"
            color="foreground"
            href="#home"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-primaryBlue-500 transition-colors duration-300"
            color="foreground"
            href="#about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-primaryBlue-500 transition-colors duration-300"
            color="foreground"
            href="#services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-primaryBlue-500 transition-colors duration-300"
            color="foreground"
            href="#links"
          >
            Tours
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="hidden lg:flex">
          <Icons />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
