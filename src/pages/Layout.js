import React from "react";
import "./header.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="App-header"></header>
      <div className="centre">{children}</div>
    </div>
  );
};

export default Layout;
