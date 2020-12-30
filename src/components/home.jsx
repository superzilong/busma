import React, { useState, useEffect } from "react";
import httpUtil from "../utility/httpUtil";
import { apiUrl } from "../config.json";

const Home = () => {
  const [content, setContent] = useState("initialState");
  useEffect(() => {
    async function fetchData() {
      const { data } = await httpUtil.get(apiUrl + "/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      console.log("🚀 ~ file: home.jsx ~ line 8 ~ useEffect ~ data", data);
      setContent(data.Name + " like " + data.Hobby);
    }
    fetchData();
  }, []);
  return <h1>{content}</h1>;
};

export default Home;
