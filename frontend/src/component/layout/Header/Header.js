import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const options1 = {
  burgerColor: "#eb4034",
  navColor1: "white",
  logo,
  logoWidth: "20vmax",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  logoTransition: 0.5, 
  logoAnimationTime: 1, 
  nav1FlexDirection: "row", 
  nav2FlexDirection: "row", 
  nav3FlexDirection: "row", 
  nav4FlexDirection: "row", 
  nav1alignItems: "center", //
  nav2alignItems: "center", //
  nav3alignItems: "center", //
  nav4alignItems: "center", //
  nav1justifyContent: "center", //
  nav2justifyContent: "center", //
  nav3justifyContent: "center", //
  nav4justifyContent: "center", //
  nav1Transition: 0.4, //
  nav2Transition: 0.8, //
  nav3Transition: 1.2, //
  nav4Transition: 1.6, //
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Family: "Roboto",
  link1Color: "rgba(35, 35, 35,0.8)",
  link1ColorHover: "#eb4034",
  link1Decoration: "none",
  link1Margin: "3vmax",
  link2Margin: "3vmax",
  link3Margin: "3vmax",
  link4Margin: "3vmax",
  link1Padding: "0", //
  link2Padding: "0", //
  link3Padding: "0", //
  link4Padding: "0", //
  link1Transition: 0.5, //
  link2Transition: 0.5, //
  link3Transition: 0.5, //
  link4Transition: 0.5, //
  link1AnimationTime: 1.5, //
  link2AnimationTime: 1.5, //
  link3AnimationTime: 1.5, //
  link4AnimationTime: 1.5, //
  searchIcon: true,
  SearchIconElement: FaSearch,
  cartIcon: true,
  CartIconElement: FaShoppingCart,
  profileIcon: true,
  ProfileIconElement: FaUserAlt,
  searchIconMargin: "1vmax",
  cartIconMargin: "1vmax",
  profileIconMargin: "1vmax",
  searchIconUrl: "/search", //
  cartIconUrl: "/cart", //
  profileIconUrl: "/login", //
  searchIconSize: "2vmax",
  cartIconSize: "2vmax",
  profileIconSize: "2vmax",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  searchIconTransition: 0.5,
  cartIconTransition: 0.5,
  profileIconTransition: 0.5,
  searchIconAnimationTime: 2,
  cartIconAnimationTime: 2.5,
  profileIconAnimationTime: 3
};


const Header = () => {
  return <ReactNavbar {...options1} />
};

export default Header;