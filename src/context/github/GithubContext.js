import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_APP_URL = process.env.REACT_APP_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    Loading: false,
    user: {},
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get  searched user
  const SearchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_APP_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_APP_URL}/users/${login}`);
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //clear users from state

  const ClearUser = () => dispatch({ type: "CLEAR_USERS" });

  //set loading

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        Loading: state.loading,
        user: state.user,
        SearchUsers,
        ClearUser,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
