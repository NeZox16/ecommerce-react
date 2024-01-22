import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, InputWithValidation, Label } from "../index.js";

export default function FormRegister({ styles, onSubmit }) {
  const valueStorage = [watch("fullName"), watch("email"), watch("password")];
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
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
      <div className={styles.registerFormWrapper}>
        <h1 className={styles.registerFormTitle}>Welcome!</h1>
        <p className={styles.registerFormText}>Let's create your account!</p>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputField}>
          <InputWithValidation
            error={Boolean(errors.fullName?.message)}
            helperText={errors.fullName?.message}
            id={"fullname"}
            className={`${styles.inputRegister} ${
              valueStorage[0].length !== 0 ? styles.hasValue : ""
            }`}
            {...register("fullName", {
              required: "Set a username",
              minLength: {
                value: 3,
                message: "The fullname must be at least 3 characters long!",
              },
            })}
            autocomplete={"given-name"}
            type={"text"}
          />
          <Label className={styles.labelRegister}>Enter username . . .</Label>
        </div>
        <div className={styles.inputField}>
          <InputWithValidation
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            className={`${styles.inputRegister} ${
              valueStorage[1].length !== 0 ? styles.hasValue : ""
            }`}
            {...register("email", {
              required: "Set a email",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "The email contains @example.com",
              },
            })}
            autocomplete={"email"}
            type={"email"}
          />
          <Label className={styles.labelRegister}>Enter email . . .</Label>
        </div>
        <div className={styles.inputField}>
          <InputWithValidation
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            className={`${styles.inputRegister} ${
              valueStorage[2].length !== 0 ? styles.hasValue : ""
            }`}
            {...register("password", {
              required: "Set a password",
              minLength: {
                value: 8,
                message: "The password must be at least 8 characters long!",
              },
            })}
            autocomplete={"new-password"}
            type={"password"}
          />
          <Label className={styles.labelRegister}>Enter password . . .</Label>
        </div>
      </div>
      <Button type={"submit"} className={styles.btnRegister}>
        Register
      </Button>
      <div className={styles.returnToLogin}>
        <span>Already have an account?</span>
        <Link className={styles.returnToLoginLink} to="/login">
          Log in
        </Link>
      </div>
    </form>
  );
}
