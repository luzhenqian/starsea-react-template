import React, { useEffect } from "react";
import SCLogo from "@images/sc-logo.png";
import styled from "styled-components";
import { getInfo as getInfoReducer } from "@reducers/getInfo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GET_INFO_BEGIN, GET_INFO_SUCCESS } from "@actions";
import { Button } from "antd";

function HelloWorld({
  getInfo,
  getInfoState,
  info,
}: {
  getInfo: any;
  getInfoState: string;
  info: any;
}) {
  useEffect(() => {
    getInfo();
  }, []);

  let name = " ?? ";
  let address = " ?? ";
  if (getInfoState === GET_INFO_SUCCESS) {
    name = info.name;
    address = info.address;
  }

  return (
    <>
      {getInfoState !== GET_INFO_BEGIN ? (
        <StyledHelloWorld>
          Hello, StarSea!
          <img src={SCLogo} alt="logo" />
          i'm {name}, i come from {address}
          <Button>hi</Button>
        </StyledHelloWorld>
      ) : null}
    </>
  );
}

const StyledHelloWorld = styled.div`
  color: palevioletred;
  font-weight: bold;
`;

function mapStateToProps(state: any) {
  return {
    info: state.info,
    getInfoState: state.getInfoState,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ getInfo: getInfoReducer }, dispatch);
}

// export default HelloWorld;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloWorld);
