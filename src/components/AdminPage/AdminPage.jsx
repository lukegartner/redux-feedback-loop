import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// MUI
import { DataGrid } from "@mui/x-data-grid";

const AdminPage = ({ numSelected }) => {
  const dispatch = useDispatch();
  console.log(numSelected);
  useEffect(() => {
    fetch("/feedback")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_FEEDBACK_DATA", payload: data }))
      .catch((err) => console.error(err));
  }, []);

  const { feedbackData } = useSelector((store) => store);

  console.log(feedbackData);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "feeling", headerName: "Feeling", width: 130 },
    { field: "understanding", headerName: "Understanding", width: 130 },
    { field: "support", headerName: "Support", width: 130 },
    { field: "comments", headerName: "Comments", width: 130 },
    { field: "flagged", headerName: "Flagged", width: 70 },
  ];
  return (
    <div>
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
      />
    </div>
  );
};

export default AdminPage;
