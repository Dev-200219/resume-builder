export const templateCreator = (id) => {
  return {
    type: "TEMPLATE_SET",
    payload: id,
  };
};
