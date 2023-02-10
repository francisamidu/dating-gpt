import React, { ReactNode, useState } from "react";
import { Layout } from "../components";

const Advice = () => {
  const [num, setNum] = useState(42005);
  const [advice, setAdvice] = useState("");
  const formatter = Intl.NumberFormat();
  const text = `Helped ${formatter.format(num)} users so far `;

  return (
    <section className="h-full md:max-w-[1100px] md:mx-auto my-10 flex flex-col item-center">
      <div className="text-center md:w-3/5">
        <h1 className="font-bold text-4xl mb-3 text-slate-700">
          Get any piece of relationship advice in seconds
        </h1>
        <h2 className="text-gray-500">
          <span>{text}</span>
        </h2>
      </div>
      <form className="w-3/5 mt-10">
        <label htmlFor="advice" className="font-bold text-slate-700">
          Please enter your query
        </label>
        <textarea
          aria-label="advice"
          value={advice}
          onChange={(e) => setAdvice(e.target.value)}
          rows={4}
          className="w-full rounded-md border-2 border-slate-200 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 mt-3"
          placeholder={
            "e.g. What should I wear for a first date with a colleague?"
          }
        />
      </form>
    </section>
  );
};

Advice.getLayout = (page: ReactNode) => <Layout page="Advice">{page}</Layout>;

export default Advice;
