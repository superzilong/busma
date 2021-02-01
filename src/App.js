import Counter from "./components/counter";
import Navbar from "./components/navbar/navbar";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Create from "./components/create";
import CreateProuct from "./components/createProduct";
import CreateVendor from "./components/createVendor";
import CreatePurchaseOrder from "./components/createPurchaseOrder";
import Login from "./pages/auth/login";
import { selectIsLogin, selectUsername } from "./store/auth";
import { useSelector } from "react-redux";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import axios from "axios";
import Sucess from "./components/success";

function App() {
  const isLogin = useSelector(selectIsLogin);
  const username = useSelector(selectUsername);
  if (isLogin) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("accessToken");
  } else {
    delete axios.defaults.headers.common.Authorization;
  }

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
              <Navbar username={username} />
              <Switch>
                <Route path="/home" exact>
                  <Home />
                </Route>
                <Route path="/profile" exact>
                  <Profile />
                </Route>
                <Route path="/count" exact>
                  <Counter />
                </Route>
                <Route path="/create" exact>
                  <Create />
                </Route>
                <Route path="/product/new">
                  <CreateProuct />
                </Route>
                <Route path="/vendor/new">
                  <CreateVendor />
                </Route>
                <Route path="/purchaseOrder/new">
                  <CreatePurchaseOrder />
                </Route>
                <Route path="/success" exact>
                  <Sucess />
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
