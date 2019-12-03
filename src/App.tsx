import React from "react";
import renderRouter from "./routers";
import "reset-css";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

export default function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>{renderRouter()}</ConfigProvider>
    </Provider>
  );
}
