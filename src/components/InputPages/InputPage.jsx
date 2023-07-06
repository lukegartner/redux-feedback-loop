import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

const InputPage = ({ title, inputType, actionType, nextPage }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const next = () => {
    if (
      (Number(inputValue) >= 0 && Number(inputValue) <= 5) ||
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
