import { useSelector } from "react-redux";
const Review = () => {
  const { feeling, understanding, support, comments } = useSelector(
    (store) => store.feedbackInput
  );
  return (
    <div>
      <h2>Review Your Feedback:</h2>
      <p>Feeling: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
    </div>
  );
};

export default Review;
