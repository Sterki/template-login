import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth, storage } from "./firebase";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import store from "./store";
import { getUserAction } from "./actions/userActions";

const appWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // save the current user
      console.log(authUser);
      dispatch(
        getUserAction({
          id: authUser.uid,
          displayName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
        })
      );
    });
  }, []);

  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default appWrapper;
