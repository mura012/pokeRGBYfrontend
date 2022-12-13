import { useState } from "react";
import { ClickEvent } from "types/event";

import { PokemonPullDown } from "components/pokemonsPullDown/PokemonPullDown";
import { Pokemon, PokemonType } from "types/pokemon";
import { Badge, BadgeWrapper } from "components/badge";
import { useTypeCheck } from "fooks/useTypeCheck";
import { Button } from "@mantine/core";
import { PokemonData } from "mock/pokemons";
import { Header } from "components/header";

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState<PokemonType>([]);
  const [selected, setSelected] = useState("");

  const { typeCheck } = useTypeCheck();
  const handleClear = (e: ClickEvent, name: string) => {
    e.preventDefault();

    const result = pokemonsList.filter(
      (pokemon: Pokemon) => pokemon.name !== name
    );
    setPokemonsList(result);
  };
  const handleClick = (e: ClickEvent) => {
    e.preventDefault();

    if (pokemonsList.length >= 6) {
      alert("ポケモンは６匹までです");
      return;
    }

    if (pokemonsList.some((pokemon) => pokemon.name === selected)) {
      alert("同じポケモンは1匹まで");
      return pokemonsList;
    }

    const selectPokemon = PokemonData.map((pokemon) => {
      if (pokemon.name === selected) {
        const newArray = [
          ...pokemonsList,
          {
            number: pokemon.number,
            name: pokemon.name,
            typeA: pokemon.typeA,
            typeB: pokemon.typeB,
          },
        ];
        setPokemonsList(newArray);
      }
    });

    return selectPokemon;
  };

  return (
    <>
      <Header />
      <PokemonPullDown selected={selected} setSelected={setSelected} />
      <Button onClick={handleClick}>button</Button>

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
