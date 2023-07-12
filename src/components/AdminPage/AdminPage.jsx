import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DelteAlert from "./DeleteAlert";

// MUI
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";

import FlagIcon from "@mui/icons-material/Flag";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const AdminPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getFeedbackData();
  }, []);

  const getFeedbackData = () => {
    fetch("/feedback")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_FEEDBACK_DATA", payload: data }))
      .catch((err) => console.error(err));
  };

  const { feedbackData } = useSelector((store) => store);

  console.log(feedbackData);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "feeling", headerName: "Feeling", width: 130 },
    { field: "understanding", headerName: "Understanding", width: 130 },
    { field: "support", headerName: "Support", width: 130 },
    { field: "comments", headerName: "Comments", width: 130 },
    {
      field: "flagged",
      headerName: <FlagIcon sx={{ color: "warning.main", mt: 3 }} />,
      type: "boolean",
      width: 70,
      renderCell: (params) => {
        return params.value ? (
          <FlagIcon sx={{ color: "warning.main" }} />
        ) : (
          <CheckBoxOutlineBlankIcon />
        );
      },
    },
  ];

  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  // Add or Remove flag from all selected rows
  const flagSelected = () => {
    fetch("/feedback/flag", {
      method: "PUT",
      body: JSON.stringify(rowSelectionModel),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        getFeedbackData();
      })
      .catch((err) => console.error(err));
  };
  const removeFlagSelected = () => {
    fetch("/feedback/remove-flag", {
      method: "PUT",
      body: JSON.stringify(rowSelectionModel),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        getFeedbackData();
      })
      .catch((err) => console.error(err));
  };

  //   Delete selected rows
  const deleteSelected = () => {
    fetch("/feedback", {
      method: "DELETE",
      body: JSON.stringify(rowSelectionModel),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        getFeedbackData();
      })
      .catch((err) => console.error(err));
  };

  //   Toggle flag on row when flagged cell is clicked
  const handleOnCellClick = ({ id, field, value, row }) => {
    if (field === "flagged") {
      fetch(`/feedback`, {
        method: "PUT",
        body: JSON.stringify({ ...row, flagged: !value }),
        headers: { "Content-Type": "application/json" },
      })
        .then(() => {
          getFeedbackData();
        })
        .catch((err) => console.error(err));
    }
  };

  //   Table initially sorts by most recent first.
  const [sortModel, setSortModel] = useState([
    {
      field: "id",
      sort: "desc",
    },
  ]);
  return (
    <div>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", my: 2 }}
      >
        <Typography variant="h4" color="primary.main">
          Admin
        </Typography>

        {/* Display options when rows are selected */}
        {rowSelectionModel.length > 0 && (
          <>
            <Button onClick={flagSelected} sx={{ color: "warning.main" }}>
              Flag
            </Button>
            <Button onClick={removeFlagSelected} sx={{ color: "success.main" }}>
              Remove Flag
            </Button>
            <DelteAlert deleteSelected={deleteSelected} />
          </>
        )}
      </Container>
      <DataGrid
        rows={feedbackData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
          console.log(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        onCellClick={handleOnCellClick}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
};

export default AdminPage;
