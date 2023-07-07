import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <h2>{title}</h2>
      <input
        type={inputType}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={next}>Next</button>
    </div>
  );
};

export default InputPage;
