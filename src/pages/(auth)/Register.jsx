import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../Api/Instance'
import { registerSchema } from '../../validation/registerSchema'

const Register = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver:  zodResolver(registerSchema)
    }
  )


  async function onSubmit(data){
    setLoading(true)
    try {
        const res = await axiosInstance.post('/auth/register', data)
        console.log(res)
        console.log('Registration successful:', res.data)
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        alert('Registration successful!')
      navigate('/')

    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed. Please try again.')
      console.log(error)
      
    }finally{
      setLoading(false)
    }
  }
  return (
    <div>
      <main className="flex items-center justify-center w-full px-4 min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex w-full flex-col max-w-96">

        <a href="/" className="mb-8" title="Go home">
          <svg
            className="size-10"
            width="30"
            height="33"
            viewBox="0 0 30 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m8 4.55 6.75 3.884 6.75-3.885M8 27.83v-7.755L1.25 16.19m27 0-6.75 3.885v7.754M1.655 8.658l13.095 7.546 13.095-7.546M14.75 31.25V16.189m13.5 5.976V10.212a2.98 2.98 0 0 0-1.5-2.585L16.25 1.65a3.01 3.01 0 0 0-3 0L2.75 7.627a3 3 0 0 0-1.5 2.585v11.953a2.98 2.98 0 0 0 1.5 2.585l10.5 5.977a3.01 3.01 0 0 0 3 0l10.5-5.977a3 3 0 0 0 1.5-2.585"
              stroke="#1d293d"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <h2 className="text-4xl font-medium text-gray-900">
          Create account
        </h2>

        <p className="mt-4 text-base text-gray-500/90">
          Fill in the details below to create your account.
        </p>

        {/* FULL NAME */}
        <div className="mt-8">
          <label className="font-medium">First name</label>
          <input
            placeholder="Please enter your First name"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="text"
            name="firstName"
            {...register("firstName")}
          />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        <div>
          <label className="font-medium">Last name</label>
          <input
            placeholder="Please enter your Last name"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="text"
            name="lastName"
            {...register("lastName")}
          />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        {/* EMAIL */}
        <div className="mt-6">
          <label className="font-medium">Email</label>
          <input
            placeholder="Please enter your email"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="email"
            name="email"
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* PASSWORD */}
        <div className="mt-6">
          <label className="font-medium">Password</label>
          <input
            placeholder="Create a password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="password"
            name="password"
            {...register("password")}
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mt-6">
          <label className="font-medium">Confirm password</label>
          <input
            placeholder="Confirm your password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="password"
            name="confirmPassword"
            {...register("confirmPassword")}
          />
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        </div>

        <button
        disabled={loading}
          type="submit"
          className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
        >
         {loading ? "Signing up..." : "Sign up"}
        </button>

        <p className="text-center py-8">
          Already have an account?{" "}
          <Link to="/auth/signin" className="text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </main>
    </div>
  )
}

export default Register
