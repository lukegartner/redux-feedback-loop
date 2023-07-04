import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

const InputPage = ({ title, inputType, actionType, nextPage }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const next = () => {
    dispatch({ type: actionType, payload: inputValue });
    history.push(nextPage);
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
