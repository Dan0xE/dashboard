const formReducer = (state = false, action: any) => {
  switch (action.type) {
    case "TOGGLE_FORM":
      return !state;
    case "CLOSE_FORM":
      return false;
    default:
      return state;
  }
};

export default formReducer;
