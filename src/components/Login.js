import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import loginimg from "../statics/images/undraw_ideas_s70l.png";
import { Link } from "react-router-dom";
import { auth, provider } from "./../firebase";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Login() {
  const classes = useStyles();
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userdata;
  const [error, setError] = useState("");

  const handleClickWithGoogle = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("login succesfully!");
      })
      .catch((error) => {
        setError(error.message);
      });

    //login with popup with google auth
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log("login succesfully!", result);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   });
  };

  const handleChange = (e) => {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="login">
      {/* img */}
      <div className="login__container">
        <div className="login__img">
          <img src={loginimg} alt="loginimage" />
        </div>
        <form>
          <div className="login__formular">
            <h2>Sign In Form</h2>
            {error ? <Alert severity="error">{error}</Alert> : null}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleClickWithGoogle}>Sing In</button>
            <div className="login__parraf">
              <p>
                You dont have an Account?{" "}
                <Link className="login__links" to="/register">
                  Create here!
                </Link>
              </p>
              <p>Dont remember your password?</p>
              {/* <button onClick={handleClickWithGoogle}>Sign In With Google</button> */}
            </div>
          </div>
        </form>
      </div>
      {/* formular */}
    </div>
  );
}

export default Login;
