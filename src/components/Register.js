import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import loginimg from "../statics/images/undraw_online_messaging_9ro6.png";
import { Link } from "react-router-dom";
import { auth } from "./../firebase";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Register() {
  const classes = useStyles();
  const [error, setError] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { username, email, password, confirm } = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickRegister = (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      setError("Error, all the fields are required!");
      return;
    }
    if (password !== confirm) {
      setError("Password doesnt match! please try again");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="login">
      {/* img */}

      <div className="login__container">
        <form>
          <div className="login__formular">
            <h2>Register Form</h2>
            {error ? <Alert severity="error">{error}</Alert> : null}

            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="confirm"
              onChange={handleChange}
            />
            <button onClick={handleClickRegister}>Sing Up</button>
            <div className="login__parraf">
              <p>
                You have an Account?{" "}
                <Link className="login__links" to="/">
                  Sing In
                </Link>
              </p>
            </div>
          </div>
        </form>
        <div className="login__img">
          <img src={loginimg} alt="loginimage" />
        </div>
      </div>
      {/* formular */}
    </div>
  );
}

export default Register;
