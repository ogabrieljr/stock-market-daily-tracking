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
            const entriesArray = Object.entries(stockValues["Time Series (Daily)"]);
            const finalData = entriesArray.map(key => {
              return {
                name: key[0],
                open: key[1]["1. open"],
                close: key[1]["4. close"]
              };
            });
            setStockValues(finalData.reverse());
          })
      );
  }, []);

  return (
    <LineChart
      width={1000}
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
      <YAxis type="number" domain={[]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false} />
      <Line type="monotone" dataKey="close" stroke="#ff7300" dot={false} />
    </LineChart>
  );
}
