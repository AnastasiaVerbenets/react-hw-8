export const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <div>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    </div>
  );
};
