import React, { useState } from "react";
import classes from "./Login.module.css";
import { Input, Button, message } from "antd";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const HandlePassChange = (e) => {
    setPassword(e.target.value);
  };
  function ValidateInput(params) {
    console.log("VALIDATING");
  }
  return (
    <div className={classes.login}>
      {/* {console.log(email === undefined)} */}
      <div className={classes.card}>
        <h1>Login</h1>
        <div className={classes.input}>
          <Input
            placeholder="Email"
            htmlType="email"
            value={email}
            onChange={HandleEmailChange}
          />
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={HandlePassChange}
          />
          <Button className={classes.button} onClick={ValidateInput}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
