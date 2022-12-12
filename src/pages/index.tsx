import { useState } from "react";
import { ClickEvent } from "types/event";

import { PokemonPullDown } from "components/pokemonsPullDown/PokemonPullDown";
import { Pokemon, PokemonType } from "types/pokemon";
import { Badge, BadgeWrapper } from "components/badge";
import { useTypeCheck } from "fooks/useTypeCheck";

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState<PokemonType>([]);
  const { typeCheck } = useTypeCheck();
  const handleClear = (e: ClickEvent, name: string) => {
    e.preventDefault();

    const result = pokemonsList.filter(
      (pokemon: Pokemon) => pokemon.name !== name
    );

    setPokemonsList(result);
  };

  return (
    <>
      <PokemonPullDown
        pokemonsList={pokemonsList}
        setPokemonsList={setPokemonsList}
      />
      <ul className="flex flex-wrap space-x-2">
        {pokemonsList.map((pokemon: Pokemon) => {
          return (
            <li
              key={pokemon.number}
              className="border border-solid  border-black p-2 shadow-lg"
            >
              <div>
                <span className="text-sm">{pokemon.name}</span>
                <BadgeWrapper>
                  <Badge color={typeCheck(pokemon.typeA)}>
                    {pokemon.typeA}
                  </Badge>
                  <Badge color={typeCheck(pokemon.typeB)}>
                    {pokemon.typeB}
                  </Badge>
                </BadgeWrapper>
                <button onClick={(e) => handleClear(e, pokemon.name)}>
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
