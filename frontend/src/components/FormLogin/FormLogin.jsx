import React from "react";
import { InputWithValidation } from "../ui/input/Inputs";
import { useForm } from "react-hook-form";
import Label from "../ui/label/Label";
import { Link } from "react-router-dom";
import Button from "../ui/button/Button";
import styles from "./FormLogin.module.sass";
import { useDispatch, useSelector } from "react-redux";

function FormLogin({ onSubmit }) {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const valueStorage = [watch("fullName"), watch("email"), watch("password")];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <div className={styles.loginFormWrapper}>
          <h1 className={styles.loginFormTitle}>Welcome!</h1>
          <p className={styles.loginFormText}>Let's to log in your account!</p>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputField}>
            <InputWithValidation
              error={Boolean(errors.fullName?.message)}
              helperText={errors.fullName?.message}
              {...register("fullName", {
                required: "Set a username",
                minLength: {
                  value: 3,
                  message: "The fullname must be at least 3 characters long!",
                },
              })}
              className={`${styles.inputLogin} ${
                valueStorage[0].length !== 0 ? styles.hasValue : ""
              }`}
              autocomplete={"username"}
              type={"text"}
            />
            <Label className={styles.labelLogin}>Enter username . . .</Label>
          </div>
          <div className={styles.inputField}>
            <InputWithValidation
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Set a email",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "The email contains @example.com",
                },
              })}
              className={`${styles.inputLogin} ${
                valueStorage[1].length !== 0 ? styles.hasValue : ""
              }`}
              autocomplete={"email"}
            />
            <Label className={styles.labelLogin}>Enter email . . .</Label>
          </div>
          <div className={styles.inputField}>
            <InputWithValidation
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register("password", {
                required: "Set a password",
                minLength: {
                  value: 8,
                  message: "The password must be at least 8 characters long!",
                },
              })}
              className={`${styles.inputLogin} ${
                valueStorage[2].length !== 0 ? styles.hasValue : ""
              }`}
              autocomplete={"current-password"}
              type={"password"}
            />
            <Label className={styles.labelLogin}>Enter password . . .</Label>
          </div>
        </div>
        <Button type={"submit"} className={styles.btnLogin}>
          Log in
        </Button>
        <div className={styles.returnToRegister}>
          <span>Don’t have an account?</span>
          <Link className={styles.returnToRegisterLink} to="/register">
            Sign up
          </Link>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
