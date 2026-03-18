import React from "react";
import BasicEffect from "./components/BasicEffect.jsx";
import CounterEffect from "./components/CounterEffect.jsx";
import FetchDataEffect from "./components/FetchDataEffect.jsx";

const App = () => {
  return (
    <div
      style={{ backgroundColor: "black", minHeight: "100vh", width: "100vw" }}
    >
      <FetchDataEffect />
    </div>
  );
};
export default App;
