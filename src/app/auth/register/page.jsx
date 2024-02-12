"use client"
import React from 'react'
import { useForm } from "react-hook-form"
const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })
    return (
        <div
            className='h-[calc(100vh-7rem)] flex justify-center items-center'>

            <form action="" onSubmit={onSubmit} className="w-1/4">
                <h1 className='text-slate-200 font-bold text-4xl '>
                    Register
                </h1>
                <label htmlFor='username' className='text-slate-500 mb-2 block text-sm' >Username</label>

                <input type="text"
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
                            {errors.username}
                        </span>
                    )
                }
                <label htmlFor='email' className='text-slate-500 mb-2 block text-sm' >Email</label>
                <input type="email"
                    {...register("email", {
                        required: true,
                    })}
                    className="p-3 rounded block mb-2 bg-slate-950 text-slate-300 w-full"

                />
                <label htmlFor='password' className='text-slate-500 mb-2 block text-sm' >Password</label>
                <input type="password"
                    {...register("password", {
                        required: true,
                    })}
                    className="p-3 rounded block mb-2 bg-slate-950 text-slate-300 w-full"
                />
                <label htmlFor='password' className='text-slate-500 mb-2 block text-sm' >Confirm Pasword</label>
                <input type="password"
                    {...register("password", {
                        required: true,
                    })}
                    className="p-3 rounded block mb-2 bg-slate-950 text-slate-300 w-full"
                />
                <button className='w-full bg-blue-500 text-white p-3 rounded-lg font-bold'>Register</button>

            </form>
        </div>

    )
}

export default RegisterPage
