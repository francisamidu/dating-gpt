import type { NextApiRequest, NextApiResponse } from "next";
import type { OpenAIPayload } from "../../types/OpenAIPayload";
import { getEnv } from "../../utils/getEnv";

const env = getEnv();
if (!env) {
  throw new Error("Missing env Var");
}
type NextResponse = {
  message: string;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<NextResponse>
): Promise<any> => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      res.status(400).json({
        message: "No prompt in the request",
      });
    }

    const payload: OpenAIPayload = {
      model: "text-davinci-003",
      prompt,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 200,
      stream: false,
      n: 1,
    };

    // const res = await fetch("https://api.openai.com/v1/completions", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${env ?? ""}`,
    //   },
    //   method: "POST",
    //   body: JSON.stringify(payload),
    // });

    // const data = await res?.json();
    // return data;
    res.status(200).json({
      message: "Received. This message is from the API",
    });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

export default handler;
