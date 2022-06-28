import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fetch from "../Component/Fetch";

const URL =
  "https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/user-profile.json";

export default () => {
  // const { userId } = useParams(); for fetching data according to userId
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleClick = () => navigate("/", { replace: true });
  const { name, email, gender, contact_number } = user;
  return (
    <div className="container p-4">
      <Fetch url={URL} setResult={setUser}>
        <div>
          <p>Name : {name}</p>
          <p>Email: {email}</p>
          <p>Contact: {contact_number}</p>
          <p>Gender: {gender}</p>
        </div>
        <button className="btn btn-secondary" onClick={handleClick}>
          Back
        </button>
      </Fetch>
    </div>
  );
};
