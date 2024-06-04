import React, { useEffect, useRef } from "react";
import "./assets/styles.css";
import { CellChange, NumberCell, ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { getColumns } from "./getColumns";
import { getRows, CREDITLINE_ROW_ID, CASHBOXBANK_ROW_ID } from "./getRows";
import { inflows as emptyInflows, outflows as emptyOutflows } from "./rawData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  BarController,
  LineElement
} from "chart.js";
import { getChartData, chartOptions } from "./chart";
import { calculateOutputVariables } from "./plannerOutputVariables";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  PointElement,
  LineController,
  LineElement
);

const applyChange = (change) => (groups) =>
  groups.map((group) =>
    group.title === change.rowId
      ? {
          ...group,
          values: group.values.map((value, idx) =>
            change.columnId === idx + 1 ? change.newCell.value : value
          ),
        }
      : group
  );

export const LiquidityPlanner = ({ headerColors }) => {
  const [openingBalance, setOpeningBalance] = React.useState(10000);
  const [creditLine, setCreditLine] = React.useState(3000);
  const [cashInflow, setCashInflow] = React.useState(() => [...emptyInflows]);
  const [cashOutflow, setCashOutflow] = React.useState(() => [...emptyOutflows]);
  const chartRef = useRef(null);
  const chartContainerRef = useRef(null);

  const columns = getColumns();
  const inputVariables = {
    cashInflow,
    cashOutflow,
    openingBalance,
    creditLine,
  };

  const outputVariables = calculateOutputVariables(inputVariables);
  const plannerData = {
    ...inputVariables,
    ...outputVariables,
  };

  const rows = getRows(plannerData, headerColors);

  const handleChanges = (changes) => {
    changes.forEach((change) => {
      if (change.rowId === CASHBOXBANK_ROW_ID && change.columnId === 1) {
        setOpeningBalance(change.newCell.value);
      }
      if (change.rowId === CREDITLINE_ROW_ID && change.columnId === 1) {
        setCreditLine(change.newCell.value);
      }
      setCashInflow((cashInflow) => applyChange(change)(cashInflow));
      setCashOutflow((cashOutflow) => applyChange(change)(cashOutflow));
    });
    console.log(plannerData);
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    if (chartContainerRef.current) {
      chartRef.current = new ChartJS(chartContainerRef.current, {
        type: 'bar', // or 'line' if you're using line charts
        data: getChartData(plannerData),
        options: chartOptions,
      });
    }
    // Cleanup function to destroy the chart when the component unmounts or updates
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [plannerData]);

  return (
    <div style={{ width: 1523 }} className="liquidity-planner-app">
      <canvas ref={chartContainerRef} />
      <ReactGrid
        rows={rows}
        columns={columns.map(column => ({
          ...column
        }))}
        onCellsChanged={handleChanges}
        stickyTopRows={1}
        stickyLeftColumns={1}
        stickyRightColumns={1}
        // props below are available for PRO version
        enableFillHandle
        enableRangeSelection
      />
    </div>
  );
};
