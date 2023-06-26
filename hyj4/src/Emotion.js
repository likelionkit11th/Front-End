import "./Emotion.css";
import EItem from "./EItem";

const Emotion = ({ active, emotion, onClick }) => {
  return (
    <div
      className={["emotion", emotion[2], active].join(" ")}
      onClick={onClick}
    >
      <EItem emotion={emotion} />
    </div>
  );
};

export default Emotion;
