const Increment = (props) => {
  return (
    <div className="Increment">
      {props.counter === 10 ? (
        <button></button>
      ) : (
        <button
          onClick={() => {
            props.setCounter(props.counter + 1);
          }}
        >
          +
        </button>
      )}
      {props.counter}
    </div>
  );
};

export default Increment;
