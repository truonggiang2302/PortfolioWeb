import React, { useCallback, useEffect, useRef } from "react";

import styled from "styled-components";
import { Anchor, Link } from "../components/AllSvgs";

const Container = styled.div`
  position: relative;
`;
const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;
const Slider = styled.div`
  top: 0;
  position: fixed;
  right: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: translateY(-100%);
  .chain {
    transform: rotate(135deg);
  }
`;
const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  const handleScroll = useCallback(() => {
    let scrollPosition = window.pageYOffset;
    let windowSize = window.innerHeight;
    let bodyHeight = document.body.offsetHeight;
    let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
    let diffP = (diff * 100) / (bodyHeight - windowSize);
    ref.current.style.transform = `translateY(${-diffP}%)`;
    if (window.pageYOffset > 5) {
      hiddenRef.current.style.display = "none";
    } else {
      hiddenRef.current.style.display = "block";
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};
export default AnchorComponent;
