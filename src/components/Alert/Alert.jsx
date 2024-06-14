import React, { useState, useEffect } from "react";

const Alert = ({ isError, message, setIsError, setMessage }) => {
  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-4 z-50">
      <div
        role="alert"
        className={`rounded-xl border ${
          isError
            ? "border-red-400 bg-red-100 text-red-900"
            : "border-green-400 bg-green-100 text-green-900"
        } p-4 shadow-md flex items-start gap-4`}
      >
        <span className={`${isError ? "text-red-600" : "text-green-600"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium">
            {isError ? "Error" : "Changes saved"}
          </strong>
          <p className="mt-1 text-sm">{message}</p>
        </div>

        <button
          onClick={() => {
            setIsError(false);
            setMessage("");
          }}
          className="text-gray-500 transition hover:text-gray-600"
        >
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
