import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="font-sans text-6xl font-bold text-purple-700">404</p>
        <p className="mb-4 text-5xl font-bold">Page not found</p>
        <p className="mb-6 text-md">
          Please check the URL in the address bar and try again.
        </p>
        <button className="px-6 py-4 font-semibold text-white uppercase bg-purple-600 text-md hover:bg-purple-700">
          <Link to="/" className="flex gap-2">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Go back to home page
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
