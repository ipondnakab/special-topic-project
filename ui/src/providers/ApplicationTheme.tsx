import { Application } from "react-rainbow-components";
import React from "react";
import { ThemeType } from "react-rainbow-components/components/Application";
const theme: ThemeType = {
  rainbow: {
    palette: {
      brand: "#5c56b6",
    },
  },
};

const ApplicationTheme: React.FC = ({ children }) => {
  return <Application theme={theme}>{children}</Application>;
};

export default ApplicationTheme;
