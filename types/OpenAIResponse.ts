type OpenAIResponse = {
  id?: string;
  object?: string;
  message?: string;
  created?: number;
  choices?: {
    finish_reason: string;
    index: number;
    logprobs: null;
    text: string;
  }[];
};
export type { OpenAIResponse };
