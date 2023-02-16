import React from "react";
import Body from "./components/body/body";
import Sidebar from "./components/side-bar/sidebar";

function Home() {
  return (
    <div className="body">
      <Sidebar />
      <Body />
    </div>
  );
}

export default Home;
