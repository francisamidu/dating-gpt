import React from "react";
import { Button } from ".";
import shared from "../shared.json";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full sm:px-8 bg-white">
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between md:max-w-[1100px] border-b border-b-200 py-4">
        <a href="/" className="self-center whitespace-nowrap text-xl font-bold">
          {shared.name}
        </a>
        <Button
          icon={<Github color="#000" size={20} />}
          iconPosition="left"
          classNames="border-none bg-white shadow-md rounded-3xl text-inherit hover:bg-white"
          text="Star on Github"
        />
      </div>
    </nav>
  );
};

export default Navbar;
