// pages/signup.tsx

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

interface FormData {
  username: string;
  password: string;
  email: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const onSubmit = async (data: FormData) => {
    console.log(data);
    // router.push("/"); // Redirect to login page after successful signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl mb-4">{!show ? "Signup" : "Login"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className="mt-1 block w-full rounded-md  shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none p-2 border-blue-500 border-[0.5px]"
              placeholder="Enter your name"
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          {!show && (
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                className="mt-1 block w-full rounded-md border-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none p-2 border-[0.5px]"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 block w-full rounded-md border-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none p-2 border-[0.5px]"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div>
            {!show && (
              <div className="text-center">
                <p>Already have an account</p>
                <p
                  onClick={() => setShow(!show)}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Login
                </p>
              </div>
            )}
            {show && (
              <div className="text-center">
                <p className="mb-2">{`Don't`} have an account</p>
                <p
                  onClick={() => setShow(!show)}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Signup
                </p>
              </div>
            )}
            {show && (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>

          {!show && (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-5"
            >
              Signup
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
