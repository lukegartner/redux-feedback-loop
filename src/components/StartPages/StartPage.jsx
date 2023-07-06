import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";

const StartPage = ({ page }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const start = () => {
    dispatch({ type: "CLEAR_INPUTS" });
    history.push("/feeling");
  };

  return (
    <div>
      <h2>{page === "complete" ? "Thank You!" : "Welcome"}</h2>
      <button onClick={start}>
        {page === "complete" ? "Leave New Feedback" : "Leave Feedback"}
      </button>
    </div>
  );
};

export default StartPage;
