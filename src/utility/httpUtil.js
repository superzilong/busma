import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
// import createHistory from "history/createBrowserHistory";

// Request interceptor for API calls
// axios.interceptors.request.use(
//   async (config) => {
//     const accssToken = localStorage.getItem("accessToken");
//     if (
//       accssToken &&
//       (config.method !== "OPTIONS" || config.method !== "options")
//     ) {
//       config.headers = {
//         Authorization: `Bearer ${accssToken}`,
//         Accept: "application/json",
//         "Content-Type": "application/x-www-form-urlencoded",
//       };
//     }

//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
// const history = createHistory();

axios.interceptors.response.use(null, async (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occurrred.");
  } else if (error.response.status === 452) {
    try {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        const access_token = await refreshAccessToken();
        console.log(
          "🚀 ~ file: httpUtil.js ~ line 29 ~ axios.interceptors.response.use ~ access_token",
          access_token
        );
        originalRequest.headers["Authorization"] =
          "Bearer " + access_token.data.data.accessToken;
        return axios(originalRequest);
      }
    } catch (err) {
      console.log(
        "🚀 ~ file: httpUtil.js ~ line 50 ~ axios.interceptors.response.use ~ err",
        err
      );

      throw err;
    }
  } else if (error.response.status === 453) {
    // history.replace("/login");
  }
  return Promise.reject(error);
});

async function refreshAccessToken() {
  try {
    const res = await axios.post(
      apiUrl + "/refreshToken",
      {
        refreshToken: localStorage.getItem("refreshToken"),
      },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    );
    return res;
  } catch (err) {
    console.log(
      "🚀 ~ file: httpUtil.js ~ line 81 ~ refreshAccessToken ~ err",
      err
    );
    throw err;
  }
}

const ex = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default ex;
