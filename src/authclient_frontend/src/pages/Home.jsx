import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { copyToClipboard } from "../utils/copytoclipboard";
import ICPLogo from "../../assets/icp-logo.svg";

function Home() {
  const {
    logout,
    principal,
    getPrincipalID,
    isCopied,
    setIsCopied,
    copyCss,
    setCopyCss,
    isHidden,
  } = useContext(AppContext);

  const onCopy = () => {
    copyToClipboard(principal);
    setIsCopied(true);
    setCopyCss(
      "active:border-green-600 active:shadow-none bg-gradient-to-tr from-green-600 to-green-500"
    );
    setTimeout(() => {
      setIsCopied(false);
      setCopyCss(
        "active:border-purple-600 active:shadow-none bg-gradient-to-tr from-purple-600 to-purple-500"
      );
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
      <button
        onClick={logout}
        className="absolute flex items-center justify-center px-4 py-2 font-mono text-xs font-semibold transition-all bg-purple-900 rounded right-4 top-4 text-slate-200 hover:text-black hover:bg-slate-100"
      >
        Logout
        <svg
          className="w-3 h-3 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center gap-5 text-center px-8 py-10 bg-white shadow-lg rounded-2xl w-[420px]">
          <img
            src={ICPLogo}
            alt="ICP Logo"
            className="bg-purple-100 h-[70px] w-[70px] p-3 rounded-full"
          />
          <h1 className="text-3xl font-bold text-gray-800">Who Am I?</h1>
          <p className="mb-2 text-gray-500 text-md">
            Click the button below to show your II Principal
          </p>
          {isHidden ? (
            <button
              onClick={getPrincipalID}
              className="relative inline-flex items-center justify-center px-4 py-2 m-1 text-white border-b-4 border-l-2 border-purple-700 rounded shadow-lg cursor-pointer group active:border-purple-600 active:shadow-none bg-gradient-to-tr from-purple-600 to-purple-500"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative flex items-center justify-center gap-2 font-sans font-medium uppercase">
                Click Me
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  ></path>
                </svg>
              </span>
            </button>
          ) : (
            <div className="flex items-center justify-center">
              <p className="px-2 py-1.5 text-xs border-2 border-dashed font-mono font-semibold border-gray-600 border-r-0">
                {principal}
              </p>
              <button
                className={`relative inline-flex items-center justify-center px-3 py-3 text-xs text-white shadow-lg cursor-pointer group ${copyCss}`}
                onClick={onCopy}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-20 group-hover:h-20 opacity-10"></span>
                <span className="relative font-sans font-semibold tracking-widest uppercase"></span>
                {!isCopied ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
