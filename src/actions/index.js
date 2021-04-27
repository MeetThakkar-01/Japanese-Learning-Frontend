import axios from "axios";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const fetchAnimeDetails = () => async (dispatch) => {
  const searchUrl = `https://animereport.herokuapp.com/api/data/animes`;
  const res = await axios.get(searchUrl);
  dispatch({ type: "FETCH_DATA", payload: res.data });
};
