import useSWR from "swr";

// @ts-ignore
export const fetcher = (url) => fetch(url).then((res) => res.json());

export { useSWR };
