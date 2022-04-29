const Decrement = (props) => {
  return (
    <div className="Decrement">
      {props.counter === 0 ? (
        <button></button>
      ) : (
        <button
          onClick={() => {
            props.setCounter(props.counter - 1);
          }}
        >
          -
        </button>
      )}
    </div>
  );
};

export default Decrement;
