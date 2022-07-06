const clockReducer = (state = true, action: any) => {
  switch (action.type) {
    case "TOGGLE_CLOCK":
      return !state;
    case "CLOSE_CLOCK":
      return false;
    default:
      return state;
  }
};

export default clockReducer;
