import React from "react";
import styled from "styled-components";
import SCLogo from "@images/sc-logo.png";

function HelloWorld() {
  return (
    <StyledHelloWorld>
      Hello, StarSea!
      <img src={SCLogo} alt="logo" />
    </StyledHelloWorld>
  );
}

const StyledHelloWorld = styled.div`
  color: palevioletred;
  font-weight: bold;
`;

export default HelloWorld;
