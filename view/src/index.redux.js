function counter(state = 0, action = {}) {
  switch (action.type) {
    case "SUM":
      return ++state;
      break;
    case "DECREASE":
      return --state;
      break;

    default:
      return 10;
      break;
  }
}

export default counter;

export function onAdd() {
  // return { type: "SUM" };
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "SUM" });
    }, 2000);
  };
}

export function onDecrease() {
  return { type: "DECREASE" };
}
