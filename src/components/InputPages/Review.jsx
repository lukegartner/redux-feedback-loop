import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { ListItemText } from "@mui/material";

const Review = () => {
  const history = useHistory();
  const { feeling, understanding, support, comments } = useSelector(
    (store) => store.feedbackInput
  );

  const postFeedback = () => {
    fetch("/feedback", {
      method: "POST",
      body: JSON.stringify({ feeling, understanding, support, comments }),
      headers: { "Content-Type": "application/json" },
    });

    history.push("/complete");
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
        <Typography variant="h4" align="center" color="primary.main">
          Review Your Feedback
        </Typography>
        <List></List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history.push("/feeling")}>
            <ListItemText
              primary={`Feeling`}
              secondary={feeling}
              align="center"
            >
              Feeling: {feeling}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history.push("/understanding")}>
            <ListItemText
              primary="Understanding"
              secondary={understanding}
              align="center"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history.push("/support")}>
            <ListItemText
              primary="Support"
              secondary={support}
              align="center"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history.push("/comments")}>
            <ListItemText
              primary="Comments"
              secondary={comments}
              align="center"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={() => history.goBack()}>Back</Button>
        <Button variant="contained" onClick={postFeedback}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Review;
