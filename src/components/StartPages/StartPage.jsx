import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

const StartPage = ({ page }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const start = () => {
    dispatch({ type: "CLEAR_INPUTS" });
    history.push("/feeling");
  };

  return (
    <Card
      sx={{
        mt: 4,
        width: "90%",
        maxWidth: 850,
        bgcolor: "#eceff1",
        mx: "auto",
      }}
    >
      <CardContent>
        <Typography variant="h2" align="center" color="primary.main">
          {page === "complete" ? "Thank You!" : "Welcome"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={start} variant="contained" sx={{ mx: "auto", mb: 2 }}>
          {page === "complete" ? "Leave New Feedback" : "Leave Feedback"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default StartPage;
