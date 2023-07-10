import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// MUI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const InputPage = ({ title, inputType, actionType, nextPage }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const storeValue = useSelector(
    (store) => store.feedbackInput[actionType.toLowerCase()]
  );
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (storeValue) {
      setInputValue(storeValue);
    }
  }, []);

  const next = () => {
    if (
      (Number(inputValue) >= 1 && Number(inputValue) <= 5) ||
      inputType === "text"
    ) {
      dispatch({ type: actionType, payload: inputValue });
      history.push(nextPage);
    } else {
      alert("A value of 1 - 5 is required");
    }
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
        <Typography
          variant="h4"
          color="primary.main"
          align="center"
          sx={{ fontStyle: "none" }}
        >
          {title}
        </Typography>
        <TextField
          variant="outlined"
          label="1-5"
          type={inputType}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          sx={{}}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={() => history.goBack()}>Back</Button>
        <Button onClick={next}>Next</Button>
      </CardActions>
    </Card>
  );
};

export default InputPage;
