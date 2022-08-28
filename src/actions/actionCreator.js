export const ADDFAV = (favorite) => {
  return {
    type: "ADDFAV",
    favorite,
  };
};

export const REMOVEFAV = (id) => {
  return {
    type: "REMOVEFAV",
    id,
  };
};
