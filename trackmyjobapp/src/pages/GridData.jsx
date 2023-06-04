import LaunchIcon from "@mui/icons-material/Launch";
export const Columns = [
  {
    field: "companyName",
    headerName: "Company name",
    width: 200,
    renderHeader: () => <strong>{"Company Name"}</strong>,
  },
  {
    field: "jobRole",
    headerName: "Job Role",
    width: 250,
    renderHeader: () => <strong>{"Job Role"}</strong>,
  },
  {
    field: "jobPortal",
    headerName: "Job Portal",
    width: 200,
    renderHeader: () => <strong>{"Job Portal"}</strong>,
  },
  {
    field: "date",
    headerName: "Applied On",
    width: 150,
    renderHeader: () => <strong>{"Applied On"}</strong>,
  },
  {
    field: "status",
    // headerName: "Status",
    type: "singleSelect",
    valueOptions: [
      "Applied",
      "Online Assessment",
      "Interview",
      "Rejected",
      "Selected",
    ],
    width: 150,
    editable: true,
    renderHeader: () => <strong>{"Status"}</strong>,
  },
  {
    field: "jobLink",
    headerName: "Job Link",
    width: 100,
    renderHeader: () => <strong>{"Job Link"}</strong>,
    renderCell: (params) => {
      return (
        <a href={params.row.jobLink} target="_blank">
          <LaunchIcon></LaunchIcon>
        </a>
      );
    },
  },
];
