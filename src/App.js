import Counter from "./components/counter";
import Navbar from "./components/navbar";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./pages/auth/login";
import { selectIsLogin } from "./pages/auth/auth";
import { useSelector } from "react-redux";
import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";

function App() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route>
          {isLogin ? (
            <React.Fragment>
              <Navbar />
              <Switch>
                <Route path="/home" exact>
                  <Home />
                </Route>
                <Route path="/count" exact>
                  <Counter />
                </Route>
                <Redirect from="/" to="/home" exact />
              </Switch>
            </React.Fragment>
          ) : (
            <Redirect to="login" />
          )}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
