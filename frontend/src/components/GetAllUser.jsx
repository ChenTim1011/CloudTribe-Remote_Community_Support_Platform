import axios from "axios";
import { useEffect, useState } from "react";

// Component to fetch and display all users from the database
const GetAllUser = () => {
  const [users, setAllUser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all")
      .then((response) => setAllUser(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>All Users</h1>
      <ul>
        {users && users.map(user => 
          <li key={user.id}>
            <h3>ID: {user.id}</h3>
            name: {user.name} <br />
            age: {user.age} <br />
            email: {user.email} <br />
          </li>
        )}
      </ul>
    </>
  );
};

export default GetAllUser;
