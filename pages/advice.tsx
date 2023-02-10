import React, { ReactNode } from "react";
import { Layout } from "../components";

const Advice = () => {
  return (
    <section className="h-full">
      <h1 className="font-bold text-3xl my-5">Let's get you</h1>
      <h2 className="text-gray-600">We here</h2>
    </section>
  );
};

Advice.getLayout = (page: ReactNode) => <Layout page="Advice">{page}</Layout>;

export default Advice;
