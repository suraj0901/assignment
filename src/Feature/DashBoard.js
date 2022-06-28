import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

const URL =
  "https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json";

export default () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);

  if (usersList.length === 0) return <h1>No users available</h1>;
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {usersList.map((user, index) => (
          <li key={index}>
            <Link to="/user">{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
