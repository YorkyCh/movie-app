import React from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";

const Home = () => {
  return (
    <div className="grid grid-rows-5 h-screen background">
      <Logo />
      <Search />
    </div>
  );
};

export default Home;
