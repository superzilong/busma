import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo, getUserInfo } from "../store/auth";

const Profile = () => {
  var userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  return <h1>{userInfo}</h1>;
};

export default Profile;
