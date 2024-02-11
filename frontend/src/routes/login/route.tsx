import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { FormLogin } from "../../components";
import s from '../../assets/styles/login/_login.module.sass';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "@tanstack/react-router";
import { fetchLogin } from "../../redux/slices/asyncThunk";
import { selectIsAuth } from "../../redux/slices/authSlice";

export const Route = createFileRoute("/login")({
    component: Login,
});

export default function Login() {
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
    return <div className={s.login}>
        <FormLogin onSubmit={onSubmit} />
    </div>
}
