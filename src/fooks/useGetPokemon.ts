import useSWR from "swr";
import { PokemonType } from "types/pokemon";
export const useGetPokemon = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error }: { data: PokemonType; error: Error | undefined } =
    useSWR("https://pokemonrgbytoolsbackend.onrender.com/api/pokemon", fetcher);
  return { data, error };
};
