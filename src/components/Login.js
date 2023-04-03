/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useEffect, useState } from "react";
import SocialLogins from "./SocialLogins";
import { check_blank } from "../utils/checks";
import axios from "axios";
import { Navigate, redirect } from "react-router-dom";
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    //Checks are done in the checks file in the utils directory
    if (!check_blank(email) || !check_blank(password)) {
      


    }  

    const credentials = JSON.stringify({
      email: email,
      password: password,
    });

      axios
        .post(
          "http://tp-api.mariuslabs.com/auth/login",
          //"http://localhost:8000/auth/login",
          credentials,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        )
        .then((response) => {
          console.log(response)
          if (response.status === 200) {

            toast.success("Successfull Login", {
              position: toast.POSITION.TOP_CENTER,
            });

            //Store response in local storage
            localStorage.setItem("accessToken", String(response.data.token));
            localStorage.setItem("userData", JSON.stringify(response.data.result));

            navigate("/home")
            window.location.reload(true)

          } else {
            toast.warning(response.data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        })
        .catch((Error) => {
          toast.warning("Something occured while loggin in. Please try again", {
            position: toast.POSITION.TOP_CENTER,
          });

          
        });

         e.preventDefault();

  };

  return (
    <>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>

        <form
          className="space-y-8 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="user@email.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
              <a
                href="/"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-bold rounded-md dark:bg-violet-400 dark:text-gray-900 hover:bg-violet-600"
          >
            LOG IN
          </button>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        {/* Add the social logins and the event handlers */}

        <SocialLogins />

        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <a href="/signup" className="underline dark:text-gray-100">
            Sign up
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;
