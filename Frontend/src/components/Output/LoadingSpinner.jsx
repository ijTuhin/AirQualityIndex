import React from "react";

export default function LoadingSpinner() {
  return (
    <div className={`flex flex-col items-center gap-y-1.5`}>
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600/50 rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <p className={`text-sm opacity-80`}>Loading...</p>
    </div>
  );
}
