"use client";
import React from "react";

function PromptInput() {
  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          placeholder="Enter a prompt..."
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button type="submit" className="">
          Genrerate
        </button>
        <button
          type="button"
          className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold 
        disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-violet-400 border-none transition-colors duration-200
        rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;
