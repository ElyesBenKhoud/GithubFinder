import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_APP_URL = process.env.REACT_APP_URL;
// const GITHUB_APP_TOKEN = process.env.REACT_APP_TOKEN;
// , {
//     headers: {
//       Authorization: `token ${GITHUB_APP_TOKEN}`,
//     },
export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_APP_URL}/users`);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        Loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
