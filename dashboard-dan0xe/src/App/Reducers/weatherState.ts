const weatherReducer = (state = false, action: any) => {
  switch (action.type) {
    case "TOGGLE_WEATHER":
      return !state;
    case "CLOSE_WEATHER":
      return false;
    default:
      return state;
  }
};

export default weatherReducer;
