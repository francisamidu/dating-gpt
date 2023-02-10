import React from "react";
import { Button } from ".";
import { ArrowRight } from "lucide-react";
import shared from "../shared.json";

const Hero = () => {
  return (
    <section className="my-24 flex flex-col items-center justify-center text-center">
      <div className="md:w-3/5">
        <h1 className="px-4 text-4xl font-bold capitalize md:px-0 md:text-6xl md:leading-[4rem]">
          Get any <span className="text-redish-500">dating</span> advice from{" "}
          <span className="text-redish-500">{shared.name}</span> AI
        </h1>
        <p className="m-8 text-gray-600">
          From
          <span className="font-bold mx-1">how to talk to girls</span>to what to
          say in a text to what to wear on your date we have all the advice you
          need to make your relationships work!!
        </p>
        <Button
          classNames="px-7 py-4 !rounded-3xl"
          icon={<ArrowRight color="#fff" className="ml-3" size={20} />}
          text={`Ask ${shared.name}`}
        />
      </div>
    </section>
  );
};

export default Hero;
