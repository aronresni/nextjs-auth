"use client"

import React from 'react'
import { useForm } from "react-hook-form"


const LoginPage = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            router.push("/home");
        }
    });
    console.log(errors);

    return (
        <div>

        </div>
    )
}

export default LoginPage
