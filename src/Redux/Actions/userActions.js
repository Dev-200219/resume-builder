export const addUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
