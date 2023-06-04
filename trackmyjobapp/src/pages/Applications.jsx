import { Box } from "@mui/system";
import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import {
  DeleteApplications,
  GetApplications,
  UpdateStatus,
} from "../services/ApplicationService";
import { DataGrid, GridCellEditStopReasons } from "@mui/x-data-grid";
import { Dropdown } from "../components/Dropdown";
import Button from "../components/Button";
import Search from "../components/Search";
import { Columns } from "./GridData";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

// const StatusOptions = ["Applied", "InProgress", "Rejected"];
const StatusOptions = [
  "Applied",
  "Online Assessment",
  "Interview",
  "Rejected",
  "Selected",
];
const DateOptions = ["All", "Today", "Past Week", "Past Month"];

export const Applications = () => {
  // const [alert, setAlert] = useState(false);
  // const [alertMsg, setAlertMsg] = useState("");
  // const [sev, setSev] = useState("error");
  // const handleClose = () => {
  //   setAlert(false);
  // };
  let [data, setData] = useState([]);
  let [displayData, setDisplayData] = useState([]);
  let [status, setstatus] = useState("");
  let [dateFilter, setDateFilter] = useState("");
  let [searchQuery, setSearchQuery] = useState("");
  let [rowSelectionModel, setRowSelectionModel] = useState("");
  const [element, setElement] = useState("");

  useEffect(() => {}, data);

  //function for search click button
  const onSearchClicked = () => {
    if (searchQuery !== "") {
      setData(data.filter((item) => item.companyName === searchQuery));
    }
  };

  //function to delete applications
  const onDeleteClicked = async () => {
    const response = await DeleteApplications(rowSelectionModel);
    fetchData();
  };

  //function to change status
  const statusChanged = useCallback(async (newRow) => {
    const response = await UpdateStatus({
      _id: newRow._id,
      status: newRow.status,
    });
    if (response.status === 200) {
      return newRow;
    }
  });

  const onStatusFilterChanged = (status) => {
    setstatus(status);
    if (status !== "")
      setDisplayData(data.filter((item) => item.status === status));
  };

  const onDateFilterChanged = (dateRange) => {
    setDateFilter(dateRange);
    if (dateFilter !== "") {
      const currentDate = new Date();
      let previousDate = new Date();
      let numDays = 0;

      if (dateRange === "Past Week") numDays = 7;
      else if (dateRange === "Past Month") numDays = 31;
      else if (dateRange === "Today") numDays = 1;

      previousDate.setDate(currentDate.getDate() - numDays);
      console.log(previousDate);
      setDisplayData(
        data.filter((item) => {
          const itemDate = new Date(item.date);
          return (
            Date.parse(itemDate) >= Date.parse(previousDate) &&
            Date.parse(itemDate) <= Date.parse(currentDate)
          );
        })
      );
      if (dateRange === "All") setDisplayData(data);
    }
  };

  //function to fetch rows from database
  const fetchData = async (e) => {
    const response = await GetApplications();
    let dataArray = [];
    let i = 1;
    response.forEach((item) => {
      item["id"] = item._id;
      let temp = new Date(item.createdAt);
      item["date"] = temp.toLocaleDateString();
      dataArray.push(item);
      i++;
    });
    //   console.log(data);
    setData(dataArray);
    setDisplayData(dataArray);
  };

  //useEffect to call fetch data function
  useEffect(() => {
    fetchData();
  }, []);

  //return to display applications page
  return (
    <div className="h-screen w-screen overflow-scroll flex  bg-purple-50">
      <Sidebar />
      <div className="w-full flex flex-col items-center">
        <div className="px-12 xl:px-24 py-8 w-full text-xl flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-bold text-md xl:text-3xl">My Applications</h1>
          <a href="/new-application">
            <Button btnText="Add New Application" />
          </a>
        </div>
        <div className="w-full px-12 2xl:px-24 flex flex-col justify-center drop-shadow-xl items-center space-y-4">
          <div className="w-full flex justify-start">
            <input
              className="mr-6 p-3 w-8/12 rounded-md border-[2px] border-solid border-primary"
              placeholder="What are you looking for?"
              type="text"
              onChange={(e) => {
                setElement(e.target.value);
                setSearchQuery(e.target.value);
              }}
            />
            <button
              className="w-48 p-3 rounded-md border-[2px] border-solid border-primary bg-primary text-white text-[0px] md:text-lg"
              onClick={onSearchClicked}
            >
              <SearchIcon />
              Search
            </button>
          </div>
          <div className="w-full flex justify-start items-center space-x-3 ">
            <div className="w-4/12">
              <Dropdown
                options={StatusOptions}
                OnSelectionChange={onStatusFilterChanged}
                name="Status"
              />
            </div>
            <div className="w-4/12">
              <Dropdown
                OnSelectionChange={onDateFilterChanged}
                options={DateOptions}
                name="Date"
              />
            </div>
            <div className="my-3 flex justify-center">
              <button
                className="w-48 flex p-3 pr-3 rounded-md border-[2px] border-solid border-primary bg-primary text-white justify-center text-[0px] md:text-lg"
                onClick={onDeleteClicked}
              >
                <DeleteIcon />
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 px-12 2xl:px-24 w-full">
          <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={displayData}
              columns={Columns}
              processRowUpdate={statusChanged}
              experimentalFeatures={{ newEditingApi: true }}
              onProcessRowUpdateError={(err) => {
                console.log(err);
              }}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
              }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
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
