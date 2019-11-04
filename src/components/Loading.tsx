import React from "react";
import styled from "styled-components";

export default function Loading() {
  const StyledLoading = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: red;
  `;
  return <StyledLoading>loading...</StyledLoading>;
}
