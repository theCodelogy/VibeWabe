'use client'
import React from 'react';
import { Chart } from "react-google-charts";
const ChartComponent = () => {
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
      ];

      const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
      };
    return (
        <div className='my-10'>
            <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
        </div>
    );
};

export default ChartComponent;