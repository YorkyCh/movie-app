import React from "react";

const Search = () => {
  return (
    <div className="row-span-5 grid grid-rows-5 grid-cols-2">
      <div className="col-span-2 md:col-span-1 row-span-5 grid grid-rows-5">
        <h1 className="row-span-1 flex justify-center items-end  text-4xl text-indigo-400 font-serif">
          Get Started
        </h1>
        <input
          placeholder="User Name"
          className="text-center mx-12 rounded-xl h-20 mt-12 bg-inherit text-2xl text-indigo-400 font-serif border-2"
        />
        <button className="row-span-2 mt-12 mx-24 h-[5rem] rounded-xl bg-indigo-400 text-2xl text-white font-serif border-2">
          Log In
        </button>
        <div className="row-span-1 flex gap-2 items-end p-2 text-indigo-400">
          <p>Image by </p>
          <a href="https://www.freepik.com/free-photo/virtual-reality-headset-popcorn_13379346.htm#page=7&query=theater%20white%20background&position=0&from_view=search&track=ais&uuid=b5e7b7dc-bedc-442a-9848-84bc9079e50c">
            Freepik
          </a>
        </div>
      </div>
    </div>
  );
};

export default Search;
