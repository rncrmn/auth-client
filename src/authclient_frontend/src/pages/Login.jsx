import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ICPLogo from "../../assets/icp-logo.svg";

function Login() {
  const { login } = useContext(AppContext);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-start justify-center min-h-screen col-span-1 gap-8 p-10 basis-1/4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold ">Auth Client Demo</h1>
            <p className="font-mono text-lg">by Aaron Carmen</p>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            Internet Identity is the identity provider for the Internet
            Computer: A dapp facilitating authentication on the Internet
            Computer.
          </p>
          <button
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium leading-6 text-white uppercase whitespace-no-wrap bg-purple-600 border border-purple-700 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            onClick={login}
          >
            Login with Internet Identity
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen col-span-2 gap-4 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
          <img
            src={ICPLogo}
            className="animate-pulse"
            alt="ICP Logo"
            width="135"
            heigh="60"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
