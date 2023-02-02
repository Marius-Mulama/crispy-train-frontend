import { React, useState } from "react";
import SocialLogins from "./SocialLogins";
import { check_blank } from "../utils/checks";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    if (check_blank(email) && check_blank(password) && check_blank(password2)) {
      const credentials = JSON.stringify({
        email: email,
        password: password,
        password2: password2,
      });

      //console.log(credentials);

      axios.post("http://localhost:8000/auth/signup", credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          //console.log(response);
          if (response.status === 201) {
            //console.log("Cerated Succesfully");

            toast.success("Sucecsfull Registration", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        })
        .catch((error) => {
          console.log("Created but cant be confirmed try loggin in");
          console.error(error);
        });
    } else {
      toast.error("One of your fields are blanks",{
        position: toast.POSITION.TOP_CENTER,
      });
    }

    e.preventDefault();
  };

  return (
    <>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">Signup</h2>

        <form className="space-y-8 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                placeholder="Password"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label for="password2" className="text-sm">
                  Repeat Password
                </label>
              </div>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Repeat Password"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            SIGN UP
          </button>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        {/* Add the social logins and the event handlers */}

        <SocialLogins />

        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Do you have an account?
          <a href="/login" className="underline dark:text-gray-100">
            {" "}
            Login
          </a>
        </p>
      </div>
    </>
  );
}

export default Signup;
