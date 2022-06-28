import { useState } from "react";
import { Link } from "react-router-dom";
import Fetch from "../Component/Fetch";

const URL =
  "https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json";

export default () => {
  const [usersList, setUsersList] = useState([]);

  return (
    <Fetch url={URL} setResult={setUsersList}>
      <div className="container p-4">
        <ul className="nav d-flex flex-column">
          {usersList.map((user, index) => (
            <li key={index}>
              <Link className="nav-link" to={`/userProfile/:${index}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fetch>
  );
};
