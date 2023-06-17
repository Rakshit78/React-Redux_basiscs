import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.counter);
  const add = () => {
    console.log("add", select);
    dispatch({ type: "add" });
  };
  const dec = () => {
    console.log("dec");
    dispatch({ type: "dec" });
  };
  const customAdd = () => {
    dispatch({ type: "add5", paylaod: 10 });
  };
  const showClassCompo = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <>
      <p>{select}</p>
      <div>
        <button onClick={add}>Add</button>
        <button onClick={dec}>Dec</button>
        <button onClick={customAdd}>customAdd</button>
        <button onClick={showClassCompo}>toggle</button>
      </div>
    </>
  );
};

export default Counter;
