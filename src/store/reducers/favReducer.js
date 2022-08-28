const favReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDFAV":
      if (state.some((itm) => itm.id == action.favorite.id)) {
        return state;
      } else {
        return [...state, action.favorite];
      }
    case "REMOVEFAV":
      return (state = state.filter((ele) => ele.id !== action.id));
  }
  return state;
};

export default favReducer;
