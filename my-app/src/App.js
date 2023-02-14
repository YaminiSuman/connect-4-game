import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./Welcome";

const Form = (props) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/welcome");
    // setUserName("");
    // setPassword("");
    axios
      .post("http://localhost:3000/", { username, password })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    // history.push(`/welcome?username=${username}`);
  };

  return (
    <>
      {/* {...props} username={username} */}
      <Routes>
        <Route
          path="/welcome"
          element={<WelcomePage {...props} username={username} />}
        />
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to the game</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="Username">Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Form;
