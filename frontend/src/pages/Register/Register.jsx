import React from "react";
import styles from "./Register.module.sass";
import { fetchRegister } from "../../redux/slices/asyncThunk";
import { selectIsAuth } from "../../redux/slices/authSlice";
import { FormRegister } from "../../components";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

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

  return (
    <>
      <div className={styles.register}>
        <FormRegister styles={styles} onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default Register;
