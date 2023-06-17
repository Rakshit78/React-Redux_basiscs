import { legacy_createStore as createStore } from "redux";
const counterReducer = (
  state = { counter: 0, showClassComponent: false },
  action
) => {
  if (action.type === "add") {
    return {
      counter: state.counter + 1,
      showClassComponent: state.showClassComponent
    };
  }
  if (action.type === "dec") {
    return {
      counter: state.counter - 1,
      showClassComponent: state.showClassComponent
    };
  }
  if (action.type === "toggle") {
    console.log(state.showClassComponent);
    return {
      counter: state.counter,
      showClassComponent: !state.showClassComponent
    };
  }
  if (action.type === "add5") {
    return {
      counter: state.counter + action.paylaod,
      showClassComponent: state.showClassComponent
    };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
