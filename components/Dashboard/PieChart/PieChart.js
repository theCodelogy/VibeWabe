'use client'
import React from 'react';
import { Chart } from "react-google-charts";

const PieChart = () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];

      const options = {
        title: "My Daily Activities",
        is3D: true,
      };
    return (
        <div className='my-10'>
              <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
    );
};

export default PieChart;