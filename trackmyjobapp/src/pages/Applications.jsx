import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { GetApplications } from "../services/ApplicationService";
import { DataGrid } from "@mui/x-data-grid";
import { Dropdown } from "../components/Dropdown";
import Button from "../components/Button";
import Search from "../components/Search";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/core";

const StatusOptions = ["Applied", "InProgress", "Rejected"];
const DateOptions = ["Past Week", "Past Month", "Today"];

const Columns = [
  {
    field: "companyName",
    headerName: "Company name",
    width: 150,
    editable: true,
  },
  {
    field: "jobRole",
    headerName: "Job Role",
    width: 150,
    editable: true,
  },
  {
    field: "jobLink",
    headerName: "Job Link",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
  },
];

export const Applications = () => {
  let [data, setData] = React.useState([]);
  const fetchData = async (e) => {
    const response = await GetApplications();
    //   console.log("data is", response);
    let dataArray = [];
    let i = 1;
    response.forEach((item) => {
      item["id"] = i;
      dataArray.push(item);
      i++;
    });
    //   console.log(data);
    setData(dataArray);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-screen w-screen flex overflow-x-hidden  ">
      <div className=" basis-1/6">
        <Sidebar />
      </div>
      <div className=" basis-5/6 mx-8">
        <div className="text-center pt-10 text-xl flex justify-between items-center">
          <h1 className="font-bold">Applications</h1>
          <a href="/new-application">
            <Button btnText="Add New" />
          </a>
        </div>
        <div className="flex justify-center mt-10 drop-shadow-xl items-center">
          <div className=" basis-4/6">
            <Search />
          </div>
          <div className="basis-1/6">
            <Dropdown options={StatusOptions} name="Status" />
          </div>
          <div className="basis-1/6">
            <Dropdown options={DateOptions} name="Date" />
          </div>
          <Button btnText="Search" />
        </div>

        <div className="text-center pl-40 pt-10">
          <Box sx={{ height: 400, width: "80%" }}>
            <DataGrid
              rows={data}
              columns={Columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
    </div>
  );
};
