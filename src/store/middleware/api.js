import axios from "axios";
import { apiUrl } from "../../config.json";
import * as actions from "../api";
import { logoutAsync } from "../../pages/auth/auth";
import { toast } from "react-toastify";

const api = ({ dispatch }) => (next) => async (action) => {
  if (
    action.type !== actions.apiCallBegan().type &&
    action.type !== actions.apiCallFailed().type
  )
    return next(action);

  next(action);

  if (action.type === actions.apiCallBegan().type) {
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: apiUrl,
        url,
        method,
        data,
      });
      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error));
      // Specific
      if (onError) dispatch({ type: onError, payload: error });
    }
  }
  if (action.type === actions.apiCallFailed().type) {
    if (action.payload.response && action.payload.response.status === 401) {
      dispatch(logoutAsync());
    } else {
      toast.error(action.payload.response.data);
    }
  }
};

export default api;
