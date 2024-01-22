import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.sass";
import { FormLogin } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/authSlice";
import { fetchLogin } from "../../redux/slices/asyncThunk";

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));

    if (!data.payload) {
      return alert("Не получилось");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  console.log("isAuth", isAuth);
  return (
    <>
      <div className={styles.login}>
        <FormLogin onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default Login;
