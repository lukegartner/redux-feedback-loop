import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const InputPage = ({ title, inputType, action, nextPage }) => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const next = () => {
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
