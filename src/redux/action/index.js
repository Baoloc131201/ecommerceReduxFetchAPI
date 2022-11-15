export const addToCart = (product) => {
  return {
    type: "ADDTOCARD",
    payload: product,
  };
};

export const deleteToCart = (product) => {
  return {
    type: "DELETEDTOCARD",
    payload: product,
  };
};
