import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

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
      height={100}
      data={props.stockValues}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <XAxis tick={false} dataKey="name" />
      <YAxis tick={false} domain={[0, 100000000]} />
      <Tooltip />
      <Bar dataKey="volume" fill="#8884d8" />
    </BarChart>
  );
}
