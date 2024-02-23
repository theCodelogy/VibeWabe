// 'use client'
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Chart } from "react-google-charts";

// const PieChart = () => {

//   const [dramas, setDramas] = useState([])
//   useEffect(() =>{
//     axios.get('https://vibewabe-server.vercel.app/video?category=drama')
//     .then(res => setDramas(res.data))
//   },[])

//     const data = [
//         ["Task", "Hours per Day"],
//         ["Work", 11],
//         ["Eat", 2],
//         ["Commute", 2],
//         ["Watch TV", 2],
//         ["Sleep", 7],
//       ];

//       const options = {
//         title: "My Daily Activities",
//         is3D: true,
//       };
//     return (
//         <div className='my-10'>
//               <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//         </div>
//     );
// };

// export default PieChart;
'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const PieChart = () => {
  const [dramas, setDramas] = useState([]);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/video?category=drama')
      .then(res => {
        setDramas(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/video?category=series')
      .then(res => {
        setSeries(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://vibewabe-server.vercel.app/video?category=movie')
      .then(res => {
        setMovies(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Set up the chart data once dramas state is populated
  const chartData = [
    ["Task", "Hours per Day"],
    ["Dramas", dramas.length || 0], // Use dramas.length or 0 to handle the case where dramas is not yet populated
    ["series", series.length || 0],
    ["Movies", movies.length || 0],
    
  ];

  const options = {
    title: "Total Movie Category",
    is3D: true,
  };

  return (
    <div className='my-10'>
      {dramas.length > 0 ? ( // Render the chart only if dramas state is populated
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

export default PieChart;
