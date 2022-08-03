import React from "react";
import styled, { ThemeProvider } from "styled-components";
import BigTitle from "../subComponents/BigTitle";
import LogoComponents from "../subComponents/LogoComponents";
import ParticalComponent from "../subComponents/ParticalComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Design, Developer } from "./AllSvgs";
import { lightThemes } from "./Themes";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  cursor: pointer;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightThemes}>
      <Box>
        <LogoComponents theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticalComponent theme="light" />
        <BigTitle text="MY SKILLS" top="80%" right="30%" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Design</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
              <li>Photoshop</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Developer width={40} height={40} /> Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>VSCode, SublimeText</li>
              <li>Github, Gitlab</li>
            </ul>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};
export default MySkillsPage;
