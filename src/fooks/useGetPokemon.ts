import useSWR from "swr";
import { PokemonType } from "types/pokemon";
export const useGetPokemon = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error }: { data: PokemonType; error: Error | undefined } =
    useSWR(`${process.env.NEXT_PUBLIC_API_URL}`, fetcher);
  return { data, error };
};
