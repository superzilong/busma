import { createSlice } from "@reduxjs/toolkit";
import { loginSvc } from "../../service/authSvc";
import jwt_decode from "jwt-decode";

function initialize() {
  try {
    var accessToken = localStorage.getItem("accessToken");
    var decoded = jwt_decode(accessToken);
    if (decoded.username) {
      return {
        bLogin: true,
        username: decoded.username,
      };
    }
  } catch (error) {}
  return { bLogin: false, username: "" };
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialize(),
  reducers: {
    login: (state, action) => {
      state.bLogin = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.bLogin = false;
      state.username = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loginAsync = (username, password) => async (dispatch) => {
  const { data } = await loginSvc(username, password);
  console.log(data);
  if (data.data && data.data.accessToken && data.data.refreshToken) {
    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem("refreshToken", data.data.refreshToken);
    dispatch(login(username));
    return data.msg;
  } else {
    throw new Error(data.msg);
  }
};

export const logoutAsync = () => (dispatch) => {
  setTimeout(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsLogin = (state) => state.auth.bLogin;
export const selectUsername = (state) => state.auth.username;

export default authSlice.reducer;
