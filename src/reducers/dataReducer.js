var initState = {
  results: [],
  isLoading: true,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        results: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
