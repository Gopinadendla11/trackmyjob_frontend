import React from "react";

const DashboardCard = (props) => {
  return (
    <div
      className={`rounded-lg p-8 flex justify-between bg-white drop-shadow-xl min-w-[300px] ${props.className}`}
    >
      <div>
        <p className="text-[28px] font-bold">{props.number}</p>
        <p>{props.name}</p>
      </div>
      <img alt="dashboard data" className="w-12 h-12" src={props.image}></img>
    </div>
  );
};

export default DashboardCard;
