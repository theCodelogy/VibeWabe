'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
const ChartTwo = () => {
    const [basicWalet , setBasicWalet] = useState([])
    const [basicTotal, setBasicTotal] = useState(0);
  
    useEffect(() => {
      axios.get('https://vibewabe-server.vercel.app/order?package=basic')
        .then(response => {
          // Update the state with the fetched data
          setBasicWalet(response.data);
          console.log(response.data)
        })
        
    }, []);
  
    useEffect(() => {
      // Calculate total price
      const totalPrice = basicWalet.reduce((acc, item) => {
      
          return acc + item.price;
        
       
      }, 0);
      setBasicTotal(totalPrice);
    }, [basicWalet]);





    const [regulerWalet , setRegulerWalet] = useState([])
    const [regulerTotal, setRegulerTotal] = useState(0);
  
    useEffect(() => {
      axios.get('https://vibewabe-server.vercel.app/order?package=reguler')
        .then(response => {
          // Update the state with the fetched data
          setRegulerWalet(response.data);
          console.log(response.data)
        })
        
    }, []);
  
    useEffect(() => {
      // Calculate total price
      const totalPrice = regulerWalet.reduce((acc, item) => {
      
          return acc + item.price;
        
       
      }, 0);
      setRegulerTotal(totalPrice);
    }, [regulerWalet]);



    const [populerWalet , setPopulerWalet] = useState([])
    const [populerTotal, setPopulerTotal] = useState(0);
  
    useEffect(() => {
      axios.get('https://vibewabe-server.vercel.app/order?package=populer')
        .then(response => {
          // Update the state with the fetched data
          setPopulerWalet(response.data);
          console.log(response.data)
        })
        
    }, []);
  
    useEffect(() => {
      // Calculate total price
      const totalPrice = populerWalet.reduce((acc, item) => {
      
          return acc + item.price;
        
       
      }, 0);
      setPopulerTotal(totalPrice);
    }, [populerWalet]);







    const data = [
        ["Element", "Total Walet", { role: "style" }],
        ["Basic Income", basicTotal, "#b87333"], // RGB value
        ["Reguler Income", regulerTotal, "silver"], // English color name
        ["Gold Income", populerTotal , "gold"],
       
    ];

    return (
        <div className='my-10'>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
    );
};

export default ChartTwo;