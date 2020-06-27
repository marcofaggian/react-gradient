import React from "react";
import { Header, BgDiv } from "./styles/gradients";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

function App() {
  const colors = [...Array(getRandomInt(15))].map(() => ({
    color: getRandomInt(360),
    x: getRandomInt(100),
    y: getRandomInt(100),
    width: getRandomInt(30),
  }));

  console.log("colors", colors);

  return (
    <div style={{ textAlign: "center" }}>
      <Header>
        <BgDiv colors={colors} />
        <h1 style={{ color: "#000" }}>React gradients</h1>
      </Header>
    </div>
  );
}

export default App;
