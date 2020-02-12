import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function Stocks() {
  const [stockValues, setStockValues] = useState([]);
  useEffect(() => {
    fetch("/values")
      .then(res => res.json())
      .then(data =>
        fetch(data.API_CALL)
          .then(res => res.json())
          .then(stockValues => {
            var a = Object.entries(stockValues["Time Series (Daily)"]);
            var b = a.map(key => {
              return { open: key[1]["1. open"], name: key[0] };
            });
            setStockValues(b);
          })
      );
  }, []);
  console.log(stockValues);

  return (
    <LineChart
      width={600}
      height={400}
      data={stockValues}
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
      <Line type="monotone" dataKey="open" stroke="#8884d8" />
    </LineChart>
  );
}
