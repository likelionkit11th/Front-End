const EItem = ({ emotion }) => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + emotion[0]} />
      <p>{emotion[1]}</p>
    </div>
  );
};

export default EItem;
