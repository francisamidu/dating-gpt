import React from "react";
import { TwitterIcon, GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-3 px-4">
      <p>
        Powered by{" "}
        <a href="https://openai.com" className="font-bold">
          Open AI
        </a>{" "}
        and <a href="https://netlify.app/edge-functions">Edge Functions</a>
      </p>
      <div className="flex flex-row items-center">
        <TwitterIcon color="#054ccf" className="mr-1" size={20} />
        <GithubIcon color="#000" className="ml-1" size={20} />
      </div>
    </footer>
  );
};

export default Footer;
