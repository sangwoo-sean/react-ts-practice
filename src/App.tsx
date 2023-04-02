import React from "react";
import "./App.css";
import { LeftSideBar } from "./components/LeftSideBar";
import { Main } from "./components/Main";
import { RightSideBar } from "./components/RightSideBar";

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </div>
  );
}

export default App;
