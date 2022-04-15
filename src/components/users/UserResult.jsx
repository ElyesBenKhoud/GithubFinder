import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
// const TOKEN = "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";
const UserResult = () => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  // const fetchUsers = async () => {
  //   const response = await fetch(`${process.env.URL}/users`, {
  //     headers: {
  //       Authorization: `token ${process.env.TOKEN}`,
  //       Accept: "application/json",
  //     },
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };

  const fetchUsers = async () => {
    try {
      axios
        .get("https://api.github.com/users")
        .then((res) => setUsers(res.data))
        .then(() => setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };

  if (!Loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users && users.map((user, idx) => <h3 key={idx}> {user.login}</h3>)}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResult;
