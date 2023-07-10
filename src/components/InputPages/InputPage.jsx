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
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

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
        {/* Number Page Input */}
        {inputType === "number" && (
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                value="1"
                onChange={(event) => setInputValue(event.target.value)}
                control={<Radio />}
                label="1"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="2"
                onChange={(event) => setInputValue(event.target.value)}
                control={<Radio />}
                label="2"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                onChange={(event) => setInputValue(event.target.value)}
                control={<Radio />}
                label="3"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                onChange={(event) => setInputValue(event.target.value)}
                control={<Radio />}
                label="4"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="5"
                onChange={(event) => setInputValue(event.target.value)}
                control={<Radio />}
                label="5"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        )}

        {/* Comment Page Input */}
        {inputType === "text" && (
          <TextField
            variant="outlined"
            label="comment"
            type={inputType}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            sx={{}}
          />
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={() => history.goBack()}>Back</Button>
        <Button onClick={next}>Next</Button>
      </CardActions>
    </Card>
  );
};

export default InputPage;
