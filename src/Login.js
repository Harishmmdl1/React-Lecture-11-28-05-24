import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext} from "./App";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
        setIsAuth(true);
        navigate("/home")
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <div>
      <h2 className="container text-center my-5">Please Login Here...</h2>

      <form className="d-flex justify-content-center">
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter_UserName"
            onChange={handleUsername}
            className="form-control text-center"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter_Password"
            onChange={handlePassword}
            className="form-control text-center"
          />
          <br />
          <br />
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
