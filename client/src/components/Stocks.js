import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import data from "../data/data";

export default function Stocks() {
  useEffect(() => {
    fetch("/values")
      .then(res => res.json())
      .then(stockValues => console.log(stockValues));
  }, []);

  /*
TODO:

TRANSFORM THIS:

{
 "Time Series (Daily)": 
 {
    "2020-02-10": 
    {
      "1. open": "183.5800",
      "2. high": "188.8400",
      "3. low": "183.2500",
      "4. close": "188.7000",
      "5. volume": "32625446"
    }
  }  
},

INTO THIS:

[
  {
    name: "2020-02-10",
    open: 183.5800,
  },
]

*/

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}
