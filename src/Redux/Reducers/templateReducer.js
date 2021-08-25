export const templateReducer = (state = null, action) => {
  switch (action.type) {
    case "TEMPLATE_SET":
      return action.payload;

    default:
      return state;
  }
};
