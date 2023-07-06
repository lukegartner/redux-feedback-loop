import { useSelector } from "react-redux";
const Review = () => {
  const { feeling, understanding, support, comments } = useSelector(
    (store) => store.feedbackInput
  );

  const postFeedback = () => {
    fetch("/feedback", {
      method: "POST",
      body: JSON.stringify({ feeling, understanding, support, comments }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <div>
      <h2>Review Your Feedback:</h2>
      <p>Feeling: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button onClick={postFeedback}>Submit</button>
    </div>
  );
};

export default Review;
