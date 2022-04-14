import axios from "axios";
import { useEffect } from "react";

const TOKEN = "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";
const UserResult = () => {
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
        .get("https://api.github.com/users", {
          headers: { Authorization: `token ${TOKEN}` },
        })
        .then((res) => console.log(res.data))
        .then(() => console.log(TOKEN));
    } catch (err) {
      console.log(err);
    }
  };
  return <div>UserResult</div>;
};

export default UserResult;
