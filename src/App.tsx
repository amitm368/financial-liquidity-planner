import React from "react";
import { LiquidityPlanner } from "./LiquidityPlanner";

const App: React.FC = () => {
  // Define header colors for each column

  return (
    <div className="liquidity-planner-app">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <h1 style={{ marginBottom: "0px" }}>Financial liquidity planner By Amit Mishra</h1>
      </div>

      {/* Pass headerColors as prop to LiquidityPlanner */}
      <LiquidityPlanner headerColors='blue' />
    </div>
  );
};

export default App;
