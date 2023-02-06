import React from "react";
import { Button } from ".";
import shared from "../shared.json";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-2 py-2 sm:px-8">
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between md:max-w-[1100px]">
        <a
          href="#"
          className="self-center whitespace-nowrap text-sm font-bold uppercase"
        >
          {shared.name}
        </a>
        <Button
          text="Star on Github"
          icon={<Github color="#000" size={20} />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
