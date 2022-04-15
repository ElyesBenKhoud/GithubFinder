import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import axios from "axios";
const UserResult = () => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_URL}/users`, {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        })
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
