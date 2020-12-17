import { createSlice } from "@reduxjs/toolkit";
import { svcLogin } from "../../service/svc-auth";
// import { useDispatch } from "react-redux";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    bLogin: false,
  },
  reducers: {
    login: (state) => {
      state.bLogin = true;
    },
    logout: (state) => {
      state.bLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loginAsync = (username, password) => async (dispatch) => {
  const { data } = await svcLogin(username, password);
  console.log(data);
  dispatch(login());
};

export const logoutAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIsLogin = (state) => state.auth.bLogin;

export default authSlice.reducer;
