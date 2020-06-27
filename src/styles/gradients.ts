import styled from "styled-components";

import { Colors } from "../types";

export const BgDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: ${({ colors }: { colors: Colors }) =>
    colors.map(
      ({ x, y, width, color }, i) =>
        `radial-gradient(circle at ${x}% ${y}%,
    hsl(${color}, 100%, 90%) 0%,
    transparent ${width}%)${colors.length - 1 === i ? "" : ", "}`
    )};
`;

export const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`;
