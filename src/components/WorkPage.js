import React, { useCallback, useEffect, useRef } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponents from "../subComponents/LogoComponents";
import ParticalComponent from "../subComponents/ParticalComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { motion } from "framer-motion";
import { darkThemes } from "./Themes";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YingYang } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: #fff;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = (props) => {
  let ref = useRef(null);
  const yingyang = useRef(null);
  const handleRotate = useCallback(() => {
    ref.current ? (
      (ref.current.style.transform = `translateX(${-window.pageYOffset}px)`)
    ) : (
      <></>
    );
    yingyang.current ? (
      (yingyang.current.style.transform =
        `rotate(` + -window.pageYOffset + "deg)")
    ) : (
      <></>
    );
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleRotate);
    return () => window.removeEventListener("scroll", handleRotate);
  }, [handleRotate]);
  return (
    <ThemeProvider theme={darkThemes}>
      <Box>
        <LogoComponents theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <BigTitle text="WORK" top="10%" right="20%" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work &&
            Work.map((item, index) => {
              return <Card data={item} />;
            })}
        </Main>
        <Rotate ref={yingyang}>
          <YingYang width={80} height={80} fill={darkThemes.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};
export default WorkPage;
