import React from "react";
import { Link } from "react-router-dom";

import { useLogin } from "./useLogin";


// type SigninFormData = z.infer<typeof signinSchema>;

const Signin = () => {
    const { register, handleSubmit, errors, isSubmitting, onSubmit } = useLogin()
    console.log(errors);

    return (
        <div className="flex h-[700px] w-full">
            <div className="w-full flex flex-col items-center justify-center">
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    className="md:w-96 w-80 flex flex-col items-center justify-center"
                >
                    <h2 className="text-4xl text-gray-300 font-medium">Sign in</h2>
                    <p className="text-sm text-gray-500/90 mt-3">
                        Welcome back! Please sign in to continue
                    </p>

                    {/* Google */}
                    <button
                        type="button"
                        className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full"
                    >
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                            alt="googleLogo"
                        />
                    </button>

                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="w-full h-px bg-gray-300/90"></div>
                        <p className="w-full text-nowrap text-sm text-gray-500/90">
                            or sign in with email
                        </p>
                        <div className="w-full h-px bg-gray-300/90"></div>
                    </div>

                    {/* Email */}
                    <div className="w-full">
                        <div className="flex items-center bg-transparent border border-gray-300/60 h-12 rounded-full pl-6 gap-2">
                            <input
                                type="email"
                                placeholder="Email id"
                                className="bg-transparent text-gray-500/80 outline-none text-sm w-full h-full"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="w-full mt-6">
                        <div className="flex items-center bg-transparent border border-gray-300/60 h-12 rounded-full pl-6 gap-2">
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-transparent text-gray-500/80 outline-none text-sm w-full h-full"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && (
                            <p className="text-red-400 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember */}
                    <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" {...register("remember")} />
                            Remember me
                        </label>
                        <a className="text-sm underline" href="#">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
                    >
                        {isSubmitting ? "Signing in..." : "Login"}
                    </button>

                    <p className="text-gray-500/90 text-sm mt-4">
                        Don’t have an account?{" "}
                        <Link className="text-indigo-400 hover:underline" to={"/auth/register"}>
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signin;
