export default reducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
      break;
    case "withdraw":
      return state - action.payload;
      break;
    default:
      return state;
  }
};
