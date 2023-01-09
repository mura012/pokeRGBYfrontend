import useSWR from "swr";
import { PokemonType } from "types/pokemon";
export const useGetPokemonSearch = (type: string) => {
  console.log("in");

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error }: { data: PokemonType; error: Error | undefined } =
    useSWR(`http://localhost:8080/api/pokemon/${type}`, fetcher);
  // useSWR(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${type}`, fetcher);

  return { data, error };
};
