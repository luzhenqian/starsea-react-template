import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routesConfig from "./config";
import renderRoutes from "./render";

export default function() {
  return <Router>{renderRoutes(routesConfig, true)}</Router>;
}
