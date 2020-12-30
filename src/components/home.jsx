import React, { useEffect } from "react";
import httpUtil from "../utility/httpUtil";
import { apiUrl } from "../config.json";

const Home = () => {
  useEffect(() => {
    async function fetchData() {
      const { data } = await httpUtil.get(apiUrl + "/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      console.log("🚀 ~ file: home.jsx ~ line 8 ~ useEffect ~ data", data);
    }
    fetchData();
  }, []);
  return <h1>Home</h1>;
};

export default Home;
