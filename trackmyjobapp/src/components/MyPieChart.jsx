import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const MyPieChart = () => {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const pieData = [
    {
      name: "Pending",
      count: 65,
    },
    {
      name: "Online Assessments",
      count: 12,
    },
    {
      name: "Interviews",
      count: 3,
    },
    {
      name: "Rejected",
      count: 23,
    },
  ];
  const RADIAN = Math.PI / 180;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip p-2 text-[12px] bg-primary text-white">
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex justify-center">
      <PieChart width={350} height={350}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="count"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
