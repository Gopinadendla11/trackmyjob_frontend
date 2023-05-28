import React, { useState, useEffect } from "react";
import { GetApplicationStats } from "../services/ApplicationService";

import ReactApexChart from "react-apexcharts";

const MyBarChart = () => {
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);

  const getData = async () => {
    const response = await GetApplicationStats();
    if (response.status === 200) {
      const data = response.data;
      const datesArr = [];
      const valuesArr = [];
      let now = new Date(),
        DAY_MS = 86400000; // 1 day in milliseconds

      for (var i = 6; i >= 0; i--) {
        let date = new Date(now.getTime() - i * DAY_MS).toLocaleDateString(
          "en-US"
        );
        datesArr[6 - i] = date;
        let index = data.findIndex(
          (i) =>
            // console.log(i._id);
            // console.log(i.date);
            Date.parse(i._id) === Date.parse(date)
        );
        console.log(index);
        if (index === -1) valuesArr[i] = 0;
        else valuesArr[index] = data[index].count;
      }
      console.log(datesArr);
      console.log(valuesArr);

      // data.map((item) => {
      //   datesArr.push(item._id);
      //   valuesArr.push(item.count);
      // });
      setDates(datesArr);
      setValues(valuesArr);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const chartData = {
    chart: {
      type: "bar",
      id: "apexchart-example",
      foreColor: "black",
      height: "10px",
    },
    plotOptions: {
      bar: {
        columnWidth: "40px",
      },
    },
    xaxis: {
      categories: dates,
    },

    legend: {
      width: 400,
    },
    fill: {
      colors: ["#4f46e5"],
    },
    stroke: {
      colors: ["#4f46e5"],
      width: 2,
    },

    series: [
      {
        name: "Number of Jobs Applied",
        type: "column",
        data: values,
      },
    ],
  };

  return (
<<<<<<< HEAD
    <div className="pt-6">
      <ReactApexChart
        options={chartData}
        series={chartData.series}
        height="400px"
      />
=======
    <div className="p-4">
      <BarChart
        width={500}
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
>>>>>>> 443550032a219c737e56402a57a54c88c0bdf63c
    </div>
  );
};

export default MyBarChart;
