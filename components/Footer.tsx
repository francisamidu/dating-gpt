import React from "react";
import { Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-4 w-full bg-white fixed bottom-0 left-0">
      <div className="max-w-screen-lg md:mx-auto  flex flex-row items-center justify-between">
        <p>
          Powered by{" "}
          <a href="https://openai.com" className="font-bold">
            Open AI
          </a>
        </p>
        <div className="flex flex-row items-center">
          <a href="https://twitter.com/iamfrancisamidu" className="font-bold">
            <Twitter color="#054ccf" className="mr-2" size={25} />
          </a>
          <a href="https://github.com/francisamidu" className="font-bold">
            <Github color="#000" className="ml-2" size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
