import React from "react";
import SideBar from "./sidebar";
const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <main
        style={{ marginLeft: "100px", padding: "20px", background: "pink" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
