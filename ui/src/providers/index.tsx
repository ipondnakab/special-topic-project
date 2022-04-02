import React from "react";
import ApplicationTheme from "./ApplicationTheme";

const Providers: React.FC = ({ children }) => {
  return <ApplicationTheme>{children}</ApplicationTheme>;
};

export default Providers;
