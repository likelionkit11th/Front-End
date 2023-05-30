import React from "react";

const Emotion = ({ path }) => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + path} />
    </div>
  );
};

export default Emotion;
