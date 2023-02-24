import React from "react";
import { Button } from ".";
import shared from "../shared.json";
import { Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const redirectToGithub = () => {
    router.push("/github");
  };

  return (
    <nav className="w-full sm:px-8 bg-white">
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between md:max-w-[1100px] border-b border-b-200 py-4">
        <Link
          href="/"
          className="self-center whitespace-nowrap text-xl font-bold"
        >
          {shared.name}
        </Link>
        <Button
          icon={<Github color="#334155" size={20} />}
          iconPosition="left"
          classNames="border-none !bg-white !text-slate-700 shadow-md rounded-3xl text-inherit hover:bg-white"
          text="Star on Github"
          onClick={redirectToGithub}
        />
      </div>
    </nav>
  );
};

export default Navbar;
