export type FetcherVariables = { [key: string]: string | any | undefined };

export type FetcherResults<T> = {
  data: T;
};
const fetcher = async <T>({
  API_URL,
  env,
  payload,
}: FetcherVariables): Promise<FetcherResults<T>> => {
  const res = await fetch(API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env ?? ""}`,
    },
    body: JSON.stringify(payload),
  });
  const { data, errors } = await res.json();

  if (errors) {
    // if errors.message null or undefined returns the custom error
    throw new Error(errors.message ?? "Custom Error");
  }

  return { data };
};
export default fetcher;
