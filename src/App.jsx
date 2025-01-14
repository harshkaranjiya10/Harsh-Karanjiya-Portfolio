import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./Pages/Main";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="">
      <div
        className="h-full w-full"
        style={{
          "--dot-bg": "#0a0a0a",
          "--dot-color": "#848282",
          "--dot-size": "1px",
          "--dot-space": "20px",
          background: `
          linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
          linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
          var(--dot-color)
        `,
        }}
      >
        <Main />
        <Footer />
      </div>
    </div>
  );
}


export default App;
