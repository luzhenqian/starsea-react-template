import React from "react";
import styled from "styled-components";

function HelloWorld() {
  return <StyledHelloWorld>Hello, StarSea!</StyledHelloWorld>;
}

const StyledHelloWorld = styled.div`
  text-align: center;
  font-size: 2rem;
  color: palevioletred;
  font-weight: bold;
`;

export default HelloWorld;
