let initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  college: "",
  degree: "",
  cgpa: "",
  year: "",
};

export const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFO":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
