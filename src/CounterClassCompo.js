import { connect } from "react-redux";
const CounterClassCompo = (props) => {
  const add = () => {
    console.log("add");
    props.add();
    // dispatch({ type: "add" });
  };
  const dec = () => {
    console.log("dec");
    props.dec();
    // dispatch({ type: "dec" });
  };
  const customAdd = () => {
    // dispatch({ type: "add5", paylaod: 10 });
  };
  return (
    <>
      <p>{props.select}</p>
      <div>
        <button onClick={add}>Add</button>
        <button onClick={dec}>Dec</button>
        <button onClick={customAdd}>customAdd</button>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    select: state.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: "add" }),
    dec: () => dispatch({ type: "dec" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClassCompo);
