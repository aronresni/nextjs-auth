"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signIn } from "next-auth/react";
const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter()
    const [error, setError] = useState(null)

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        console.log(res)
        if (res.error) {
            setError(res.error)
        } else {
            router.push('/dashboard')
            router.refresh()
        }
    });
    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={onSubmit} className="w-1/4">

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
                <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
