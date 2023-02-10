import React, { ReactNode } from "react";
import { Layout } from "../components";

const Advice = () => {
  return (
    <section className="h-full md:max-w-[1100px] md:mx-auto my-4">
      <h1 className="font-bold text-3xl mb-5 text-slate-800">Let's get you</h1>
      <h2 className="text-gray-600">We here</h2>
    </section>
  );
};

Advice.getLayout = (page: ReactNode) => <Layout page="Advice">{page}</Layout>;

export default Advice;
