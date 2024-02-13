"use client"
import React from 'react'
import { useForm } from "react-hook-form"
const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        if (data.password !== data.confirmPassword) {
            return alert("Passwords do not match");
        }

        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            router.push("/auth/login");
        }
    });

    console.log(errors);

    return (
        <div
            className='h-[calc(100vh-7rem)] flex justify-center items-center'>

            <form action="" onSubmit={onSubmit} className="w-1/4">
                <h1 className='text-slate-200 font-bold text-4xl '>
                    Register
                </h1>
                <label htmlFor='username' className='text-slate-500 mb-2 block text-sm' >Username</label>

                <input type="text"
                    placeholder='JhonDoe'
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required"
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-950 text-slate-300 w-full"
                />
                {
                    errors.username && (
                        <span className='text-red-500'>
                            {errors.username.message}
                        </span>
                    )
                }
                <label htmlFor='email' className='text-slate-500 mb-2 block text-sm' >Email</label>
                <input type="email"
                    placeholder='JhonDoe@gmail.com'
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required"
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-950 text-slate-300 w-full"

                />
                {
                    errors.email && (
                        <span className='text-red-500'>
                            {errors.email.message}
                        </span>
                    )
                }
                <label htmlFor='password' className='text-slate-500 mb-2 block text-sm' >Password</label>
                <input type="password"

                    placeholder='********'
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required"
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-950 text-slate-300 w-full"
                />
                {
                    errors.password && (
                        <span className='text-red-500'>
                            {errors.password.message}
                        </span>
                    )
                }
                <label htmlFor='password' className='text-slate-500 mb-2 block text-sm' >Confirm Pasword</label>
                <input type="password"
                    placeholder='********'
                    {...register("confirmPassword", {
                        required: {
                            value: true,
                            message: "Connfirm password please"
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-950 text-slate-300 w-full"
                />
                {
                    errors.password && (
                        <span className='text-red-500'>
                            {errors.password.message}
                        </span>
                    )
                }
                <button className='w-full bg-blue-500 text-white p-3 rounded-lg font-bold'>Register</button>

            </form>
        </div>

    )
}

export default RegisterPage
