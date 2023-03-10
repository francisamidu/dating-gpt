import { ArrowRight } from "lucide-react";
import React, { ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { Button, Layout } from "../components";
import { fetcher, OpenAIResponse } from "../types";
import { NextResponse } from "../types/NextResponse";

const Advice = () => {
  const [num, setNum] = useState(42005);
  const [advice, setAdvice] = useState("");
  const [generatedAdvice, setGeneratedAdvice] = useState([""]);
  const formatter = Intl.NumberFormat();
  const text = `Helped ${formatter.format(num)} users so far `;

  const generateAdvice = async () => {
    if (!advice) return;
    const prompt = `Generate 3 pieces of relationship advice for a total newbie with best practices and. Make sure each generated piece of advices is at max 20 words and base it on this context: ${advice}${
      advice.slice(-1) === "." ? "" : "."
    }`;

    setGeneratedAdvice([""]);
    const response = await fetcher<OpenAIResponse>("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.choices?.length) {
      toast.error("Something went wrong");
    }

    const newAdvice = response?.choices?.length
      ? response?.choices[0]?.text
          .split(/(\d+)/)
          .map((val) => val.replace(".", "").trim())
          .filter((val) => isNaN(Number(val)))
      : [""];
    console.log(newAdvice);
    setGeneratedAdvice(newAdvice);
  };

  return (
    <section className="h-full md:max-w-[1100px] md:mx-auto my-10 flex flex-col flex-1 items-center ">
      <div className="text-center md:w-3/5">
        <h1 className="font-bold text-4xl mb-3 text-slate-700">
          Get any piece of relationship advice in seconds
        </h1>
        <h2 className="text-gray-500">
          <span>{text}</span>
        </h2>
        <form className="mt-10 flex flex-col">
          <label
            htmlFor="advice"
            className="font-bold text-slate-700 !text-left"
          >
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
          <Button
            classNames="!bg-slate-800 !hover:bg-slate-700 !text-base !rounded-md my-4 flex flex-row items-center justify-center"
            icon={<ArrowRight color="#fff" className="ml-3" size={20} />}
            text="Get Advice"
            onClick={generateAdvice}
          />
        </form>
        <div className="mt-5">
          <h1 className="font-bold text-3xl mb-5 text-slate-700">
            Your generated Advice
          </h1>
          {generatedAdvice.length > 1
            ? generatedAdvice?.map((advice) => (
                <div className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border mb-2" key={JSON.stringify(advice)}>
                  <p>{advice}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

Advice.getLayout = (page: ReactNode) => <Layout page="Advice">{page}</Layout>;

export default Advice;
