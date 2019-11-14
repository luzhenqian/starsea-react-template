import React from "react";
import renderRouter from "./routers";
import "reset-css";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import "antd/dist/antd.css";

export default function App() {
  return <Provider store={store}>{renderRouter()}</Provider>;
}
