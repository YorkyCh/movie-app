import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from "../ui/Logo";
import Search from "../ui/Search";

const Home = () => {
  const [toDashboard, setToDashboard] = useState(false);

  if (toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Logo />
      <div className="row-span-5 grid grid-rows-5 grid-cols-2">
        <div className="col-span-2 md:col-span-1 row-span-5 grid grid-rows-5">
          <h1 className="row-span-2 flex justify-center items-center  text-4xl text-indigo-400 font-serif">
            Rate Your Favourite Movies
          </h1>

          <button
            className="row-span-2 mt-10 mx-24 h-[5rem] rounded-xl bg-indigo-400 text-2xl text-white font-serif  hover:text-gray-200  hover:shadow-sm hover:shadow-indigo-500"
            onClick={() => setToDashboard(true)}
          >
            Get Started
          </button>
          <div className="row-span-1 flex gap-2 items-end p-2 text-indigo-400">
            <p>Image by </p>
            <a href="https://www.freepik.com/free-photo/virtual-reality-headset-popcorn_13379346.htm#page=7&query=theater%20white%20background&position=0&from_view=search&track=ais&uuid=b5e7b7dc-bedc-442a-9848-84bc9079e50c">
              Freepik
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
