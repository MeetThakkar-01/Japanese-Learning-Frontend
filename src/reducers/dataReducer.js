var initState = {
  results: [],
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
