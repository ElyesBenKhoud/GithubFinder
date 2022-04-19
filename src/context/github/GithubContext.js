import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_APP_URL = process.env.REACT_APP_URL;
// const GITHUB_APP_TOKEN = process.env.REACT_APP_TOKEN;
// , {
//     headers: {
//       Authorization: `token ${GITHUB_APP_TOKEN}`,
//     },
export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [Loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    Loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_APP_URL}/users`);
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        Loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
