import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ComposedChart
} from "recharts";
import { connect } from "react-redux";

function StocksXYValues(props) {
  return (
    <>
      <p style={{ marginLeft: "10%" }}>
        {props.stockPrices.length ? props.stockPrices[0].symbol.toUpperCase() : null}
      </p>
      <ComposedChart
        width={1000}
        height={400}
        data={props.stockPrices}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[]} />
        <YAxis hide yAxisId="left" domain={[0, 1000000000]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="close" stroke="#ff7300" dot={false} />
        <Bar
          yAxisId="left"
          dataKey="volume"
          barSize={3}
          type="monotone"
          stroke="#413ea0"
          dot={false}
        />
      </ComposedChart>
    </>
  );
}

const mapStateToProps = state => ({
  stockPrices: state.stockReducer.stockPrices,
  apiCall: state.stockReducer.apiCall
});

export default connect(mapStateToProps)(StocksXYValues);
