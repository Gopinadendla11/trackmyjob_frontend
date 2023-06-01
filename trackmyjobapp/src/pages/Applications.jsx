import { Box } from "@mui/system";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
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

const StatusOptions = ["Applied", "InProgress", "Rejected"];
const DateOptions = ["Past Week", "Past Month", "Today"];

export const Applications = () => {
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [sev, setSev] = useState("error");
  const handleClose = () => {
    setAlert(false);
  };
  let [data, setData] = React.useState([]);
  let [temp_data, settemp] = React.useState([]);
  let [status, setstatus] = React.useState("");
  let [date, setdate] = React.useState("");
  let [searchQuery, setSearchQuery] = React.useState("");
  let [rowSelectionModel, setRowSelectionModel] = React.useState("");

  useEffect(() => {}, data);

  //function for search click button
  const searchClicked = () => {
    data = temp_data;
    console.log(status);
    if (status !== "") {
      setData(data.filter((item) => item.status === status));
    }
    if (searchQuery !== "") {
      setData(data.filter((item) => item.companyName === searchQuery));
    }
    if (date !== "") {
      let curr_date = new Date();
      if (date === "Today") {
        setData(data.filter((item) => (item.createdAt = curr_date)));
      } else if (date == "Past Month") {
        console.log(
          data.filter((item) => {
            item.companyName = "Meta";
          })
        );
      }
      console.log("Date is", curr_date);
    }
  };

  //function to delete applications
  const deleteCLicked = async () => {
    const response = await DeleteApplications(rowSelectionModel);
    fetchData();
  };

  //function to change status
  const statusChanged = React.useCallback(async (newRow) => {
    console.log("before");
    const response = await UpdateStatus({
      _id: newRow._id,
      status: newRow.status,
    });
    if (response.status === 200) {
      return newRow;
    }
  });

  //function to fetch rows from database
  const fetchData = async (e) => {
    const response = await GetApplications();
    //   console.log("data is", response);
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
    settemp(dataArray);
  };

  //useEffect to call fetch data function
  useEffect(() => {
    fetchData();
  }, []);

  //return to display applications page
  return (
    <div className="h-screen w-screen overflow-scroll bg-purple-50">
      <div className="flex">
        <Sidebar />
        <div className=" basis-9/12 mx-8">
          <div className="text-center pt-10 text-xl flex justify-between items-center">
            <h1 className="font-bold text-3xl">My Applications</h1>
            <a href="/new-application">
              <Button btnText="Add New Application" />
            </a>
          </div>
          <div className="w-full flex justify-center mt-8 drop-shadow-xl items-center">
            <div className="mx-3 basis-6/12">
              <Search
                onSearchChange={(query) => {
                  setSearchQuery(query);
                }}
              />
            </div>
            <div className="mx-3 basis-2/12">
              <Dropdown
                options={StatusOptions}
                OnSelectionChange={(status) => {
                  setstatus(status);
                }}
                name="Status"
              />
            </div>
            <div className="mx-3 basis-2/12">
              <Dropdown
                OnSelectionChange={(date) => {
                  setdate(date);
                  console.log("date", date);
                }}
                options={DateOptions}
                name="Date"
              />
            </div>
            <div className="mx-3 basis-2/12">
              <button
                className="w-full p-3 pr-3 my-3 rounded-md border-[2px] border-solid border-primary bg-primary text-white"
                onClick={searchClicked}
              >
                Search
              </button>
            </div>
            <div className="mx-3">
              <button
                className="w-full flex p-3 pr-3 my-3 rounded-md border-[2px] border-solid border-primary bg-primary text-white"
                onClick={deleteCLicked}
              >
                Delete
                <DeleteIcon></DeleteIcon>
              </button>
            </div>
          </div>

          <div className="text-center pt-10">
            <Box sx={{ height: 500, width: "100%" }}>
              <DataGrid
                rows={data}
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
    </div>
  );
};
