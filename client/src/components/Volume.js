import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";

//WIP
//WIP
//WIP
//WIP
//WIP
//WIP
//WIP

export default function Volume(props) {
  return (
    <BarChart
      width={1000}
      height={300}
      data={props.stockValues}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <XAxis dataKey="name" />

      <YAxis domain={[0, 100000000]} />
      <Tooltip />
      <Bar dataKey="volume" fill="#8884d8" />
    </BarChart>
  );
}
