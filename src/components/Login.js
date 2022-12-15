/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useState } from "react";
import SocialLogins from "./SocialLogins";
import {check_blank} from "../utils/checks"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    //Checks are done in the checks file in the utils directory
    //TO DO: Write api to handle form submission

    if (check_blank(email) && check_blank(password)) {
      console.log("Submited Succesfully");
    } else {
      console.error("Error Has been Seen")
    }

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
              <label for="email" className="block text-sm">
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
                <label for="password" className="text-sm">
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
      
        <SocialLogins/>


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
