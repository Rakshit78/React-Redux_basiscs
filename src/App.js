import Counter from "./Counter";
import CounterClassCompo from "./CounterClassCompo";
import { useSelector } from "react-redux";
import "./styles.css";

export default function App() {
  const show = useSelector((state) => state.showClassComponent);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Counter />
      {show && <CounterClassCompo />}
      <h2>Start editing to see some magic happen</h2>
    </div>
  );
}
