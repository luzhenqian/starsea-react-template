import React, { useEffect, useState } from "react";
import SCLogo from "@images/sc-logo.png";
import styled from "styled-components";
import { get } from "@utils/http";
import api from "../../mock/api";

function HelloWorld() {
  const [name, setName] = useState(" ?? ");
  const [address, setAddress] = useState(" ?? ");

  useEffect(() => {
    get(`/api${api.HELLO_WORLD_URL}`).then(res => {
      setName(res.data.name);
      setAddress(res.data.address);
    });
  }, []);

  return (
    <StyledHelloWorld>
      Hello, StarSea!
      <img src={SCLogo} alt="logo" />
      i'm {name}, i come from {address}
    </StyledHelloWorld>
  );
}

const StyledHelloWorld = styled.div`
  color: palevioletred;
  font-weight: bold;
`;

export default HelloWorld;
