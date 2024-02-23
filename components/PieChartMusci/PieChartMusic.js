'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const PieChartMusic = () => {
  const [classical, setClassical] = useState([]);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/music?category=Classical')
      .then(res => {
        setClassical(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const [Sad, setSad] = useState([]);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/music?category=Sad')
      .then(res => {
        setSad(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [Remix, setRemix] = useState([]);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/music?category=Remix')
      .then(res => {
        setRemix(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Set up the chart data once dramas state is populated
  const chartData = [
    ["Task", "Hours per Day"],
    ["Classical", classical.length || 0], // Use dramas.length or 0 to handle the case where dramas is not yet populated
    ["Sad", Sad.length || 0],
    ["Remix", Remix.length || 0],
    
  ];

  const options = {
    title: "Total Music Category",
    is3D: true,
  };

  return (
    <div className='my-10'>
      {classical.length > 0 ? ( // Render the chart only if dramas state is populated
        <Chart
          chartType="PieChart"
          data={chartData}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PieChartMusic;
