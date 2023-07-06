import { useSelector } from "react-redux";
const Review = () => {
  const { feeling, understanding, support, comments } = useSelector(
    (store) => store.feedbackInput
  );

  const postFeedback = () => {};
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
