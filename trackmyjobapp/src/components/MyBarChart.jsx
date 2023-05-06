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
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "05-01-2023",
    number: 23,
  },
  {
    date: "05-02-2023",
    number: 45,
  },
  {
    date: "05-03-2023",
    number: 16,
  },
  {
    date: "05-04-2023",
    number: 7,
  },
  {
    date: "05-05-2023",
    number: 32,
  },
  {
    date: "05-06-2023",
    number: 18,
  },
  {
    date: "05-07-2023",
    number: 27,
  },
  {
    date: "05-08-2023",
    number: 15,
  },
  {
    date: "05-09-2023",
    number: 41,
  },
  {
    date: "05-10-2023",
    number: 26,
  },
  {
    date: "05-11-2023",
    number: 18,
  },
  {
    date: "05-12-2023",
    number: 14,
  },
];

const MyBarChart = () => {
  return (
    <div className="p-8">
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="number" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
