import React from "react";
import styled from "styled-components";
import { darkThemes } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkThemes.text : darkThemes.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
const LogoComponents = (props) => {
  return <Logo color={props.theme}>Giang</Logo>;
};
export default LogoComponents;
