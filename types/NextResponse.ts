import { NextApiResponse } from "next";
import { OpenAIResponse } from "./OpenAIResponse";

type NextResponse = NextApiResponse<OpenAIResponse>;
export type { NextResponse };
