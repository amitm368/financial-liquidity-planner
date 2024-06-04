import React, { useState } from "react";
import { LiquidityPlanner } from "./LiquidityPlanner";

const App = () => {
  const [colorName, setColorName] = useState('blue');

  const handleColorChange = (event) => {
    setColorName(event.target.value);
  };

  return (
    <div className="liquidity-planner-app">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <h1 style={{ marginBottom: "0px" }}>Financial Liquidity Planner By Amit Mishra</h1>
        <input
          type="text"
          placeholder="Please enter color name"
          onChange={handleColorChange}
        />
      </div>

      {/* Pass headerColors as prop to LiquidityPlanner */}
      <LiquidityPlanner headerColors={colorName} />
    </div>
  );
};

export default App;
