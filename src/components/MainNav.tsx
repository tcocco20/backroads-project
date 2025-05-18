import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";

import logo from "../images/logo.svg";

import Icons from "./ui/Icons";

export default function MainNav() {
  const menuItems = ["Home", "About", "Services", "Tours"];

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
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={`${item}`}
            className="hover:bg-primaryBlue-300/80 hover:ps-1 transition-all duration-400"
          >
            <Link className="w-full p-4" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
